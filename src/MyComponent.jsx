import {useEffect, useState} from "react";

const MyComponent = () => {
	const [error, setError] = useState('')
	const [isTuSimulateError, setIsToSimulateError] = useState(false)
	const someData = {}

	useEffect(() => {
		if (isTuSimulateError) {
			try {
				console.log(someData.missingProp.inDeep)
			} catch (error) {
				setError('Something went wrong')
			}
		}
	}, [isTuSimulateError])

	return <>
		<button onClick={() => setIsToSimulateError(true)}>Simulate Error</button>
		{
			!error ? <span>This is my component</span> : <span>{error}</span>
		}
	</>
}

export default MyComponent