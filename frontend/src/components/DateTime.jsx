import { useEffect, useState } from 'react'
const DateTime = () => {
    const [date, setDate] = useState(new Date())
    const d = new Date(date)
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <>
            <div className="text-center">{`${d.getDate()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${d.getHours() >= 12 ? 'PM':'AM'}`}</div>
        </>
    )
}
export default DateTime 