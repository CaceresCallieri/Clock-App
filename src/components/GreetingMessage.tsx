import { FC } from 'react'

import calculateTimeOfDay from '../utils/calculateTimeOfDay'

import IconMoon from '../assets/common/icon-moon.svg?react'
import IconSun from '../assets/common/icon-sun.svg?react'

const iconTimeDay = (hour: number): JSX.Element => {
    if (hour >= 6 && hour < 18) {
        return <IconSun />;
    }
    return <IconMoon />;
}

const greetingMessage = (timeOfDay: string): string => {
    switch (timeOfDay) {
        case 'morning':
            return 'GOOD MORNING, IT\'S CURRENTLY';
        case 'day':
            return 'GOOD DAY, IT\'S CURRENTLY';
        case 'afternoon':
            return 'GOOD AFTERNOON, IT\'S CURRENTLY';
        case 'night':
            return 'GOOD NIGHT, IT\'S CURRENTLY';
        default:
            return '';
    }
}

interface TimeOfDayMessageProps {
    hour: number
}

const TimeOfDayMessage: FC<TimeOfDayMessageProps> = ({ hour }) => {
    const timeOfDay = calculateTimeOfDay(hour)

    return (
        <div className="greeting-message">
            {iconTimeDay(hour)}
            <p>{greetingMessage(timeOfDay)}</p>
        </div>
    )
}

export default TimeOfDayMessage