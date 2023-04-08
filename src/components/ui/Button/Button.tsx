import { FC,MouseEventHandler } from 'react'
import Link from 'next/link'
import styles from './Button.module.scss'

type Props = {
    type: 'button' | 'submit' | 'anchor' | 'link' ,
    className?: string,
    text: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    customClass?: string,
    href?: string,
    icon?: React.ReactNode 
}

const Button: FC<Props> = ({type, className = '', text, handleClick, disabled, href = '#', customClass = ''}) => {
    const style = `${styles.default} ${styles[className]} ${customClass}`

    return (
        <div className={styles.wrapper}>
            {type === 'button' &&
            <button type={type} className={style} onClick={handleClick} aria-label={text}>
                {text}
            </button>}

            {type === 'submit' &&
            <button type={type} className={style} onClick={handleClick} aria-label={text} disabled={!disabled ? false : disabled}>
                
                {text}
            </button>}

            {type === 'link' &&
            <Link href={href}>
                <a className={style}>{text}</a>
            </Link>}
        </div>
    )
}

export default Button