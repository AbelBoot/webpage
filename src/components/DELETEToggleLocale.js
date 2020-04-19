import React from "react"
import { LocaleContext } from "./LocaleContext"

export default class ToggleLocale extends React.Component {
	
	render(){
		return (
			<LocaleContext.Consumer>
			{localeVal => (
        	<button onClick={localeVal.updateLocale}>Change language</button>	
      		)}			
			</LocaleContext.Consumer>
			)
	}
} 

