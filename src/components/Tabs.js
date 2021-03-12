import React from "react"
import { Tab } from "./Tab"
//import { TabContainer, ListTab, LiActive, 
import { OlTabs, H5 } from "../theme/SmallComp"
//import { Container, Relative, Flex  } from "../theme/Containers"


export default class Tabs extends React.Component {
	
	state = {
		activeTab: this.props.children[0].props.label
	}
	clickingTab = (tab) => {
		this.setState({activeTab: tab})
	}
	render(){
		const {children} = this.props
		const {activeTab} = this.state
//flexBasis and flexDirection are coming 
// from Tabs and allow horizontal tabs 
//on small screens.
		return (
			<>
			<OlTabs 				
				flexBasis={this.props.flexBasis}
				flexDirection={this.props.flexDirection}
				>
				{children.map((tab) => {
					return (
						<Tab
							key={tab.props.label}
							label={tab.props.label}
							activeTab={activeTab}
							onClick={this.clickingTab}//.bind(tab)}
						></Tab>
						)
				})}
			</OlTabs>
			<div>
				{children.map((content) => {
					if (content.props.label === activeTab){
						return (
							<H5 
							  marginTop=".1"
							  fontSize="1"
							>{content}</H5>
						)
					}
				})}
			</div>		
			</>
			)
	}
}

//</TabContainer>