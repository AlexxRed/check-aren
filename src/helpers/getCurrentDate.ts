const getCurrentDate = () => {
    const date: string = new Date().toString()
    
    const first: string = date.slice(0, 19)
    const second: number = Number(date.slice(19, 21)) + 1
    const third: string = date.slice(21)

    return (first + second + third) as string
}

export default getCurrentDate