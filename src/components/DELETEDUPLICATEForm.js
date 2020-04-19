import React, { useState, useContext, useEffect } from "react"
import { LocaleContext } from "../context/LocaleContext"
import {useValidation} from "./FormValidation"
import validateFunction from "./FormValidation"
import { BigDivForm, DivForm, DivFormMess, InputForm, LabelForm, ButtonForm, PForm } from "../theme/FormStyle"
import { FormContainer } from "../theme/Containers"

const initialVal = {
		name: "", email: "", message:""
	}
		


export function FormComp(props){
	const { locale } = useContext(LocaleContext)
	const { values, handleChange, handleSubmit, handleBlur, errors, isSubmitting  } 
		= useValidation(initialVal, validateFunction)
	// try with an object as initial value
	const [placeHolderValue, setPlaceHolder] = useState()
	useEffect(() => {
		if (locale === "en"){setPlaceHolder("Your Name:")}		
		if (locale === "fr"){setPlaceHolder("Votre Nom:")}		
		if (locale === "sp"){setPlaceHolder("Su Nombre:")}		
		if (locale === "pt"){setPlaceHolder("O Seu Nome:")}		
	}, [locale])

	return (
		<>
		<BigDivForm>
		<FormContainer onSubmit={handleSubmit}>
		<DivForm>
		<LabelForm>
			{locale === "en" && `Name: `}
			{locale === "fr" && `Nom: `}		
			{locale === "sp" && `Nombre: `}	
			{locale === "pt" && `Nome: `}
		</LabelForm>
		<InputForm 
			name="name"
			value={values.name}
			placeholder={placeHolderValue}
			onChange={handleChange}
			onBlur={handleBlur}
			className={errors.name && "error-input"}
		/>

		<LabelForm>Email: </LabelForm>
		<InputForm 
			name="email"
			value={values.email}
			placeholder="Votre mail"
			onChange={handleChange}
		/>
		
		{errors.email && <PForm>{errors.email}</PForm>}
		
		<ButtonForm type="submit" value="Submit">Submit</ButtonForm>
		</DivForm>
		<DivFormMess>
		<LabelForm>Message: </LabelForm>
		<InputForm 
			name="message"
			value={values.message}
			placeholder="Votre message"
			onChange={handleChange}
		/>
		</DivFormMess>
		</FormContainer>
		</BigDivForm>	
		</>
		)
}