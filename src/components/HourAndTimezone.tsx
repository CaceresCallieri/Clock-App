import { FC } from 'react'
import Hour from './Hour'

function formatTimezone(timezone: string): string | undefined {
    // Create a new Intl.DateTimeFormat object with the 'en-US' locale and the provided timezone.
    // The option 'timeZoneName: short' specifies that we want the short name of the timezone (e.g., 'PST' for Pacific Standard Time).
    const formatter = new Intl.DateTimeFormat('en-US', { timeZone: timezone, timeZoneName: 'short' });

    // Use the formatToParts method to format the current date into parts, each with a type and value.
    const parts = formatter.formatToParts(new Date());

    // Search the parts to find the one with a type of 'timeZoneName', and return its value (the short name of the timezone).
    // If no part with a type of 'timeZoneName' is found, the function returns undefined.
    const timeZoneName = parts.find(part => part.type === 'timeZoneName')?.value;

    return timeZoneName;
}

interface HourAndTimezoneProps {
    date: Date
    timezone: string
}

const HourAndTimezone: FC<HourAndTimezoneProps> = ({ date, timezone }) => {
    return (
        <div className="hour-and-timezone">
            <Hour initialDate={date} />
            <p className="timezone">{formatTimezone(timezone)}</p>
        </div>
    )
}

export default HourAndTimezone