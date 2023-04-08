import { FC, ReactNode, useState, useEffect, useRef } from 'react'

import { useAppDispatch } from '../../store/hook'
import { hideLoader } from '../../store/slices/loaderSlice'

import Header from './Header/Header'
// import Footer from './Footer/Footer';
import Loader from '@/components/ui/Loader/Loader'

import styles from './Layout.module.scss'
import Footer from './Footer/Footer'

type Props = { children: ReactNode }

const Layout: FC<Props> = ({ children }) => {
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [headerHeight, setHeaderHeight] = useState<number | undefined>(0)

  const headerRef = useRef<HTMLElement>(null)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(hideLoader())

    window.addEventListener('scroll', () => {
      setHeaderHeight(headerRef.current?.offsetHeight)

      if (window.scrollY > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='next-layout'>
      <div className={styles.wrapper}>
        <Loader />
        <Header isSticky={isSticky} headerRef={headerRef} />
        <main style={{ paddingTop: isSticky ? headerHeight : 0 }}>
          {children}
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Layout
