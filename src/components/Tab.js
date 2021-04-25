import React, { useContext } from "react"
import { ListTab } from "../theme/SmallComp"
import { SpanTab } from "../theme/SmallComp"
import { LocaleContext } from "../custom/LocaleContext"


const handleClick = (label, clicking) => {
	//const { onClick, label } = props
	clicking(label)
}

//export class Tab extends React.Component {
export  const Tab = (props) => {
console.log("popsss", props)
	//render(){
		//const {label, activeTab} = props
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			<SpanTab key={locale}	><ListTab 
				key={locale}	
				keyWid={props.keyWid}	
				onClick={() => handleClick(props.label, props.onClick)}
				selected={props.activeTab === props.label}
			>
				{props.label}
			</ListTab></SpanTab>
			)
	//}
	
}

//}