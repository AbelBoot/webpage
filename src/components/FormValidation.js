import React, {useState, useEffect} from "react"
import axios from "axios"

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
		e.preventDefault()
		console.log("handlesubmit")
		const errorsObtained = validateFunction(values)
		setErrors(errorsObtained)
		console.log("errorsObtained", errorsObtained)
		console.log("values", values)
		setSubmitting(true)
		axios.post(
        "https://formcarry.com/s/YKms8OaO9n", 
        values, 
        {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log("response data", response.data)
        // access response.data in order to check formcarry response
        if(response.data.success){
          console.log("reponse data success", response.data)
        } else {
          // handle error
          console.log("reponse error", response.data.message);
        }
 
      })
      .catch(function (error) {
        console.log(error);
      });
    
    e.preventDefault();
}

	return {values, handleChange, handleSubmit, errors, isSubmitting }
}

	// function handleBlur(){
	// 	const errorsObtained = validateFunction(values)
	// 	setErrors(errorsObtained)
	// }