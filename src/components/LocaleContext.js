import React from "react"

export const LocaleContext = React.createContext()
//const LocaleProvider = LocaleContext.Provider
//const LocaleConsumer = LocaleContext.Consumer

export default class LocaleProvider extends React.Component {
	
	updateLocale = (lang) => {
        this.setState({locale: lang})
    }

	state = {
		locale: "en",
		updateLocale: this.updateLocale
	}

	render(){
		return (
			<LocaleContext.Provider
				value={this.state}
			>
			  {this.props.children}
			</LocaleContext.Provider>
			)
	}

}