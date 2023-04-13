import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoIosArrowUp } from '@react-icons/all-files/io/IoIosArrowUp'
import { IoIosArrowDown } from '@react-icons/all-files/io/IoIosArrowDown'

import data from '@/data/filters.json'

import styles from './Filter.module.scss'
import { Russo_One } from 'next/font/google'

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400',
})

type FormData = Record<string, string[]>

const Filter: FC = () => {
    const { register, handleSubmit, watch } = useForm<FormData>()
    const [formData, setFormData] = useState<FormData>({})
    const [visibleKeys, setVisibleKeys] = useState<string[]>([])
    const [clickedKey, setClickedKey] = useState('')
    const [open, setOpen] = useState(false)


    const onSubmit = (data: FormData) => {
        setFormData(data)
    };

    const handleClick = (key: string) => {
        if (visibleKeys.includes(key)) {
        setVisibleKeys(visibleKeys.filter((visibleKey) => visibleKey !== key));
        } else {
        setVisibleKeys([...visibleKeys, key]);
        }
        setClickedKey(key);
        setOpen((prevState) => !prevState)
        console.log(formData)
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        const newFormData = {
        ...formData,
        [name]: formData[name] ? [...formData[name], value] : [value],
        };
        setFormData(newFormData);
    };

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>
                <span className={russo.className}>Filter</span>           
            </h2>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {Object.entries(data).map(([key, options]) => (
                    <div className={styles.field} key={key}>
                        <div
                            className={styles.key}
                            onClick={() => handleClick(key)}
                            style={{ fontWeight: clickedKey === key ? 'bold' : 'normal',
                                color:  clickedKey === key ? 'white' : ''}}
                            >
                            {key}
                            {/* {clickedKey !== key &&  <IoIosArrowDown size={32} className={styles.arrow}/>}
                            {clickedKey === key &&  <IoIosArrowUp size={32} className={styles.arrow}/>} */}
                            {open &&  <IoIosArrowDown size={32} className={styles.arrow}/>}
                            {!open &&  <IoIosArrowUp size={32} className={styles.arrow}/>}
                        </div>
                        {visibleKeys.includes(key) && (
                            <div className={styles.options}>
                            {options.map((option) => (
                                <label key={option.value} className={styles.lable}>
                                <input
                                    type="checkbox"
                                    name={key}
                                    value={option.value}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                                {option.label}
                                </label>
                            ))}
                            </div>
                        )}
                    </div>
                ))}
                {/* <RangeSlider id={1000} className={styles.price} step={1} defaultValue={[100,900]}  min={10} max={1000}/> */}
                </form>
        </div>
    )
}

export default Filter