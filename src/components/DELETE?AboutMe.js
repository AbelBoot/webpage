import React from "react"
import { LocaleContext } from "./LocaleContext"
import styled from "styled-components"
import { AboutMeText, AboutMeText1 } from "./Text"

export default class AboutMe extends React.Component {
	render(){
		return (
			<>
			<LocaleContext.Consumer>
			{localeVal => {
					if (localeVal.locale === "en"){
						return <h3>{AboutMeText[0]}</h3>
					}
					if (localeVal.locale === "fr"){
						return <h3>{AboutMeText[1]}</h3>
					}
					if (localeVal.locale === "sp"){
						return <h3>{AboutMeText[2]}</h3>
					}
					if (localeVal.locale === "pt"){
						return <h3>{AboutMeText[3]}</h3>
					}
			 	}
			}
			</LocaleContext.Consumer>
			
			</>
			)
	}
}
//export default Button
//<ToggleLocale />