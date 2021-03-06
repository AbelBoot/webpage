import React, {useState, useEffect} from "react"

let success = false
let errors = {}
export default function validateFunction(values){
	delete errors.email 
	console.log("errrors email before", errors.email)
	if (!values.email){
		errors.email = "Email required"
	} else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email.toString())) {
		errors.email = "Wrong email format."
	}
	console.log("errrors email after", errors.email)
	console.log("errrors after", errors)
	return errors
}

export function useValidation(initialState, validateFunction){
	const [values, setValues] = useState({initialState})
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false)

	useEffect(() => {
		if (isSubmitting){
			const noErrors = Object.keys(errors).length === 0
			//Object.keys(errors).length === 0
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
		e.preventDefault()		
		//setErrors({})
		let errorsObtained = {}

		console.log("errorsObtained before", errorsObtained)
		console.log("values before ", values)
		
		errorsObtained = validateFunction(values)
		//const errorsObtained = validateFunction(values)
		setErrors(errorsObtained)
		console.log("errorsObtained", errorsObtained)
	    setSubmitting(true)
	   
        if (Object.keys(errors).length === 0){
console.log("Object.keys(errors).length", Object.keys(errors).length)
console.log("Object.keys", errors.email)
		// fetch('https://formcarry.com/s/YKms8OaO9n', {
		fetch('https://formspree.io/f/meqpbajv', {
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

        }


	    

    
    e.preventDefault();
}

	return {values, handleChange, handleSubmit, errors, isSubmitting, success }
}

	// function handleBlur(){
	// 	const errorsObtained = validateFunction(values)
	// 	setErrors(errorsObtained)
	// }