import { FC, useState, useEffect } from 'react'
import calculateTimeOfDay from '../utils/calculateTimeOfDay';

function formatTime(datetime: Date) {
    const date = new Date(datetime || '')
    // Format the time to HH:MM:SS
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

interface HourProps {
    initialDate: Date
}

const Hour: FC<HourProps> = ({ initialDate }) => {
    const [dateTime, setDateTime] = useState(initialDate)

    type TimeOfDay = 'morning' | 'day' | 'afternoon' | 'night'
	const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day')

    useEffect(() => {
        // Calculate the time difference between the current time and the initial time every second, in order to always have the correct time
        const timer = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = currentTime.getTime() - initialDate.getTime();
            setDateTime(new Date(initialDate.getTime() + timeDifference));

            // Set the time of day based on the current time
            setTimeOfDay(calculateTimeOfDay(currentTime.getHours()))
        }, 1000)
        return () => clearInterval(timer)
    }, [initialDate])

    useEffect(() => {
        // Set the class of body based on the time of day
        const body = document.querySelector('body')
        body?.classList.remove('morning', 'day', 'afternoon', 'night')
    
        switch (timeOfDay) {
            case 'morning':
                body?.classList.add('morning')
                break
            case 'day':
                body?.classList.add('day')
                break
            case 'afternoon':
                body?.classList.add('afternoon')
                break
            case 'night':
                body?.classList.add('night')
                break
        }
    }, [timeOfDay])

    return (
        <h1>{formatTime(dateTime)}</h1>
    )
}

export default Hour