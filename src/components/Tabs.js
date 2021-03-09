import React from "react"
import { Tab } from "./Tab"
//import { TabContainer, ListTab, LiActive, 
import { OlTabs } from "../theme/SmallComp"
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

		return (
			<>
			<OlTabs 				
				
				flexBasis={this.props.basis}
				flexDirection={this.props.dir}>

				{children.map((tab) => {
				console.log("props olTabs", this.props)
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
							<h4>{content}</h4>
						)
					}
				})}
			</div>		
			</>
			)
	}
}

//</TabContainer>