import './styles/App.css'
import './styles/time-sensitive-styles.css'

import { useState } from 'react'
import useFetchLocation from './hooks/useFetchLocation'
import useFetchTimeData from './hooks/useFetchTimeData'

import QuoteContainer from './components/QuoteContainer'
import ClockContainer from './components/ClockContainer'
import Button from './components/Button'
import MoreInfoContainer from './components/MoreInfoContainer'

function App() {
	const { location, locationError } = useFetchLocation()
	const { timeData, timeDataError } = useFetchTimeData(location)

	const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false)

	if (timeDataError || locationError) {
		return ('Error: ' + (timeDataError || locationError))
	}

	return (
		<main>
			{!showMoreInfo && <QuoteContainer />}

			<div className="clock-and-button">
				{timeData && <ClockContainer timeData={timeData} />}

				<Button showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} />
			</div>

			{timeData && <MoreInfoContainer showMoreInfo={showMoreInfo} setShowMoreInfo={setShowMoreInfo} timeData={timeData} />}
		</main>
	)
}

export default App
