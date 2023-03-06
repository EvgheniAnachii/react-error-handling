import {useState} from "react";

const MyComponent = () => {
	const [error, setError] = useState('')
	const someData = {}

	try {
		console.log(someData.prop.nestedProp)
	} catch (err) {
		setError('Something went wrong')
	}

	return <>
		{!error ? <span>My Component</span> : <span>{error}</span>}
	</>
}

export default MyComponent