import { FC } from 'react'

const formatLocation = (timeZone: string): string => {
    if (!timeZone) {
        return 'UNKNOWN LOCATION';
    }

    // Get the location in [city, country] format
    const [, ...formattedTimezone] = timeZone?.split('/') || [];
    formattedTimezone.reverse();
    return formattedTimezone.join(', ').toUpperCase();
}

interface LocationProps {
    timeZone: string
}

const Location: FC<LocationProps> = ({ timeZone }) => {
    return (
        <div className="location">
            <h4>IN {formatLocation(timeZone)}</h4>
        </div>
    )
}

export default Location