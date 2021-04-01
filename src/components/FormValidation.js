import React, { useState, useEffect, useContext } from "react"
import { LocaleContext } from "../custom/LocaleContext"

let success = false
let errors = {}

//Need to use localeNonReact, because validateFunction is not 
//a React function, cannot use Context.
export default function validateFunction(values, localeNonReact){
    console.log("values", values)
    console.log("localeNonReact", localeNonReact)
	delete errors.message 
	delete errors.email 
	console.log("errrors email before", errors.email)
	if (!values.message){
		if (localeNonReact === "en"){errors.message = "Message required."}		
		if (localeNonReact === "fr"){errors.message = "Message requis."}		
		if (localeNonReact === "sp"){errors.message = "Se requiere un mensaje."}		
		if (localeNonReact === "pt"){errors.message = "O campo Mensagem é obrigatório."}		
		//errors.email = "Email required"
	}
	if (!values.email){
		if (localeNonReact === "en"){errors.email = "Email required."}		
		if (localeNonReact === "fr"){errors.email = "Une adresse email est requise."}		
		if (localeNonReact === "sp"){errors.email = "Se requiere un email."}		
		if (localeNonReact === "pt"){errors.email = "O campo Email é obrigatório."}		
		//errors.email = "Email required"
	} else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email.toString())) {
		errors.email = "Wrong email format."
		if (localeNonReact === "en"){errors.email = "Wrong email format."}		
		if (localeNonReact === "fr"){errors.email = "Format de l'adresse mail non valide."}		
		if (localeNonReact === "sp"){errors.email = "Formato de correo electrónico incorrecto"}		
		if (localeNonReact === "pt"){errors.email = "Endereço e-mail incorreto "}		
	}
	console.log("errrors email after", errors.email)
	console.log("errrors after", errors)
	return errors
}

export function useValidation(initialState, validateFunction){
	const [values, setValues] = useState({initialState})
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false)
	const { locale } = React.useContext(LocaleContext)

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
    //localeNonReact created here to be used in validateFunction
    // which is not a React function
		e.preventDefault()		
		//setErrors({})
		let errorsObtained = {}
        let localeNonReact = null
        if (locale === "en"){localeNonReact = "en"}
        if (locale === "fr"){localeNonReact = "fr"}
        if (locale === "sp"){localeNonReact = "sp"}
        if (locale === "pt"){localeNonReact = "pt"}
        
		console.log("errorsObtained before", errorsObtained)
		console.log("values before ", values)
		
		errorsObtained = validateFunction(values, localeNonReact)
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
        } //else {}
        })
        .catch(function (error) {
         console.log(error);
         })
        }
        e.preventDefault()
    }
	return {values, handleChange, handleSubmit, errors, isSubmitting, success }
}

	// function handleBlur(){
	// 	const errorsObtained = validateFunction(values)
	// 	setErrors(errorsObtained)
	// }