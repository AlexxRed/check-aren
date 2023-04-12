import { FC, useState, useRef, FormEvent, ChangeEvent } from 'react'
import Image from 'next/image'

import helpFormData from '@/data/signForm.json'
import IConsultation from '@/shared/interfaces/HelpForm/IHelpForm'

import Button from '@/components/ui/Button/Button'

import styles from './HelpForm.module.scss'
import { Russo_One } from 'next/font/google'

const russo = Russo_One({
    subsets: ['latin'],
    weight: '400'
})


const SignForm: FC = () => {
    const {section, description, button, image}: IConsultation = helpFormData
    const {url, alt} = image

    const nameInputRef = useRef<HTMLInputElement>(null)
    const phoneInputRef = useRef<HTMLInputElement>(null)

    const [fields, setFields] = useState<any| {}>({
        name: {text: 'Name', target: nameInputRef},
        phone: {text: 'Phone', target: phoneInputRef}
    });

    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = (e.target as HTMLInputElement)
        
        const {name, value} = target;
        const text = target.dataset.text,
        smile = target.dataset.smile;
    }

    const handleClick = () =>{
        console.log('submit form')
    }

    return (
        <section className={styles.section} id={section.id}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.thumb}>
                        <div className={styles.image}>
                            <Image src={url} blurDataURL={url} alt={alt}  placeholder="blur" width={324} height={308} className={styles.picture}/>
                        </div>
                    </div>
                    <form className={styles.content} onSubmit={e => console.log(e)}>
                        <h2 className={styles.title}>
                            <span className={russo.className}>
                                {section.title}
                            </span>
                        </h2>
                        <p className={styles.description}>{description}</p>
                        <div className={styles.input_container}>
                            <div className={styles.input_wrapper}>
                                <input type="text" placeholder="Name" name="name" data-text="Name" data-smile="🧑" className={styles.input} ref={nameInputRef} onInput={handleChange} />
                                <p className={styles.error}>-</p>
                            </div>

                            <div className={styles.input_wrapper}>
                                <input type="tel" placeholder="Phone number" name="phone" data-text="Phone" data-smile="📞" className={styles.input} ref={phoneInputRef} onInput={handleChange} />
                                <p className={styles.error}>-</p>
                            </div>
                        </div>
                        <div className={styles.button_wrapper}>
                            <Button type="submit" text={button.text}   className="theme" customClass={styles.view} handleClick={handleClick} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default SignForm