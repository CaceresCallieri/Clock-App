import { FC } from 'react'
import { TimeData } from '../types/types'

import GreetingMessage from './GreetingMessage'
import HourAndTimezone from './HourAndTimezone'
import Location from './Location'

interface ClockContainerProps {
    timeData: TimeData
}

const ClockContainer: FC<ClockContainerProps> = ({ timeData }) => {
    const date = (new Date(timeData?.datetime ?? ''))
    const timeZone = timeData?.timezone

    return (
        <div className="clock-container">
            <GreetingMessage hour={date.getHours()} />

            <HourAndTimezone date={date} timezone={timeZone} />

            <Location timeZone={timeZone} />
        </div>
    )
}

export default ClockContainer