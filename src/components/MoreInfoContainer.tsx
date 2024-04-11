import { FC } from 'react'
import { TimeData } from '../types/types'

import InfoBlock from './InfoBlock'

interface MoreInfoContainerProps {
    showMoreInfo: boolean
    setShowMoreInfo: (showMoreInfo: boolean) => void
    timeData: TimeData
}

const MoreInfoContainer: FC<MoreInfoContainerProps> = ({ showMoreInfo, timeData }) => {
    // Get only the Country and City from the timezone
    const [, ...formattedTimezone] = timeData?.timezone?.split('/') || []
    const formattedTimezoneString = formattedTimezone.join(', ')

    return (
        <>
            {showMoreInfo && (
                <div className="more-info-container">
                    <InfoBlock title="CURRENT TIMEZONE" value={formattedTimezoneString} />
                    <InfoBlock title="DAY OF THE WEEK" value={timeData?.day_of_week} />
                    <InfoBlock title="DAY OF THE YEAR" value={timeData?.day_of_year} />
                    <InfoBlock title="WEEK NUMBER" value={timeData?.week_number} />
                </div>
            )}
        </>
    )
}

export default MoreInfoContainer