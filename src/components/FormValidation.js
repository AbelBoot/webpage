import React, {useState, useEffect} from "react"
let success = false
export default function validateFunction(values){
	let errors = {}
	
	if (!values.email){
		errors.email = "Email required"
	} else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email.toString())) {
		errors.email = "Wrong email format."
	}
	return errors
}

export function useValidation(initialState, validateFunction){
	const [values, setValues] = useState({initialState})
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false)

	useEffect(() => {
		if (isSubmitting){
			const noErrors = Object.keys(errors).length === 0
			if (noErrors){
				console.log("handling submit",
				values.name + values.email + values.message)
				setSubmitting(false)
			} else {
				setSubmitting(false)
			}
		}
	}, [errors])

	function handleChange(e){
		setValues({
			...values,
			[e.target.name]: e.target.value
		})	
	}
	function handleSubmit(e){
		//e.preventDefault()		
		const errorsObtained = validateFunction(values)
		setErrors(errorsObtained)
		console.log("errorsObtained", errorsObtained)
	    setSubmitting(true)
	   

		fetch('https://formcarry.com/s/YKms8OaO9n', {
           method: "POST",
           headers: {'Content-Type': 'application/json', "Accept": "application/json"},
           body: JSON.stringify({"name": values.name, "email": values.email, "message": values.message}),
        })
        .then(function (response) {
        console.log("response", response)
        if(response.status === 200){
           success = true
           setValues(initialState)
           setErrors({})
        } else {}
        })
        .catch(function (error) {
         console.log(error);
         });

	    

    
    e.preventDefault();
}

	return {values, handleChange, handleSubmit, errors, isSubmitting, success }
}

	// function handleBlur(){
	// 	const errorsObtained = validateFunction(values)
	// 	setErrors(errorsObtained)
	// }