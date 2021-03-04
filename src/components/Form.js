import React, { useContext, useState, useEffect } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { BigDivForm, DivForm, DivFormMess, InputForm, LabelForm, TextAreaForm, ButtonForm, PForm } from "../theme/FormStyle"
import { FormContainer } from "../theme/Containers"
import {useValidation} from "./FormValidation"
import validateFunction from "./FormValidation"

const initialVal = {
		name: "", email: "", message:""
	}
		
export function Form(props){

	const { locale } = useContext(LocaleContext)
		const { values, handleChange, handleSubmit, handleBlur, errors, isSubmitting, success  } 
		= useValidation(initialVal, validateFunction)
	const [placeHolderValue, setPlaceHolder] = useState({placeHolderName: "Your Name", placeHolderEmail: "Your Email", placeHolderMessage: "Your message"})
	useEffect(() => {
		if (locale === "en"){setPlaceHolder({placeHolderName:"Your Name", placeHolderEmail: "Your Email", placeHolderMessage: "Your Message"})}		
		if (locale === "fr"){setPlaceHolder({placeHolderName:"Votre Nom", placeHolderEmail: "Votre Email", placeHolderMessage: "Votre Message"})}		
		if (locale === "sp"){setPlaceHolder({placeHolderName:"Su Nombre", placeHolderEmail: "Su Email", placeHolderMessage: "Su Mensaje"})}		
		if (locale === "pt"){setPlaceHolder({placeHolderName:"O Seu Nome", placeHolderEmail: "O Seu Email", placeHolderMessage: "Su Mensagem"})}		
	}, [locale])
// useEffect(() => {
//   // if (Object.keys(errors).length === 0) {
   
//   // }
//   console.log("errorrrrs", errors)
// }, [errors]);

//onSubmit={handleSubmit}
//https://formcarry.com/s/YKms8OaO9n
//https://formspree.io/f/meqpbajv
 //action="https://formcarry.com/s/YKms8OaO9n"  method="POST">
	return (
		<>
		<BigDivForm>
		<FormContainer noValidate onSubmit={handleSubmit}>
		<DivForm>
		<LabelForm>
			{locale === "en" && `Name: `}
			{locale === "fr" && `Nom: `}		
			{locale === "sp" && `Nombre: `}	
			{locale === "pt" && `Nome: `}
		</LabelForm>
		<InputForm 
			name="name"
			value={values.name || ""}
			required="true"
			placeholder={placeHolderValue.placeHolderName}
			onChange={handleChange}
			onBlur={handleBlur}
			className={errors.name && "error-input"}
	
		/>
		<LabelForm>Email: </LabelForm>
		<InputForm 
			type="email"
			name="email"
			required="true"

			value={values.email || ""}
			placeholder={placeHolderValue.placeHolderEmail}
			onChange={handleChange}
		/>
		{errors.email && <PForm>{errors.email}</PForm>}		
		
		</DivForm>
		<DivFormMess>
		<LabelForm>
			{(locale === "en" || locale === "fr") && `Message: `}		
			{locale === "sp" && `Mensaje: `}	
			{locale === "pt" && `Mensagem: `}
		</LabelForm>
		<TextAreaForm 
			name="message"
			rows="5"
			required="true"
			value={values.message || ""}
			placeholder={placeHolderValue.placeHolderMessage}
			onChange={handleChange}
		/>
        {success && <PForm>Thank you for your message!</PForm>}
		<ButtonForm type="submit" value="Send">Submit</ButtonForm>
		</DivFormMess>
		</FormContainer>
		</BigDivForm>	

		</>
		)
}

//<InputForm type="hidden" name="_next" value="https://www.lemonde.fr" />
// Useless because my validation is actually a reducer already (?)
// function reducer(state, {field, value}){
// 		console.log("state", state)
// 		return {
// 			...state, 
// 			[field]: value
// 		}
// 	}
// In the Form function
	//const [state, dispatch] = useReducer(reducer, initialVal)
	//const {name, email, message, placeHolder } = state
	// const onChange = (e) => {
	// 	dispatch({field: e.target.name, value: e.target.value})
	// }