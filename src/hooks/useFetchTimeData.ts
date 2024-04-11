import { useEffect, useState } from 'react'
import { TimeData } from '../types/types'

const TIME_API_URL = 'https://www.worldtimeapi.org/api/timezone/'

function useFetchTimeData(location: string) {
    const [timeData, setTimeData] = useState<TimeData>()
    const [timeDataError, setTimeDataError] = useState<string | null>(null)

    useEffect(() => {
        if (location) {
            fetch(TIME_API_URL + location)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch time data. Status: ' + response.statusText)
                    }
                    return response.json()
                })
                .then((data: TimeData) => setTimeData(data))
                .catch((timeDataError) => setTimeDataError(timeDataError.message))
        }
    }, [location])

    return { timeData, timeDataError }
}

export default useFetchTimeData