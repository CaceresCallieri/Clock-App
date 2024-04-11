import { useEffect, useState } from 'react'

const IP_API_URL = 'https://api.ipdata.co?api-key='
// const IP_KEY = '14064bea2c6096fdc4114c938f06a6ff92bb08e81cc3fd343a7b9bce' // REMEMBER: PROTECT THIS KEY
const IP_KEY = import.meta.env.VITE_IP_KEY

function useFetchLocation() {
	const [location, setLocation] = useState<string>('')
	const [locationError, setLocationError] = useState<string | null>(null)

	useEffect(() => {
		fetch(IP_API_URL + IP_KEY)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Failed to fetch location. Status: ' + response.statusText)
				}
				return response.json()
			})
			.then((data) => setLocation(data.time_zone.name))
			.catch((locationError) => setLocationError(locationError.message))
	}, [])

	return { location, locationError }
}

export default useFetchLocation