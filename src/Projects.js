import React, { useEffect, useContext } from "react"
import { useSize } from "./custom/Size"
import { LocaleContext } from "./custom/LocaleContext"
import { Welcome } from "./components/Welcome"
import { PChem } from "./components/PChem"
import { PDrones } from "./components/PDrones"
import { PCoding } from "./components/PCoding"
import Tabs from "./components/Tabs"
import { ProjectContainer} from "./theme/Containers"
//        	<Tabs maxWidth="30px" dir={window.innerWidth < 767 
//				? "row" : "column" }>
//for chemistry tab <Tabs alignItems="center">
    //            	flexBasis={widthS < 767
				//    ? "100"
				//    : null }
				// flexWrap={widthS < 767
				//    ? "wrap"
				//    : null }


				// flexBasis={widthS < 500 
				//    ? "100" 
				//    : null }

export const Projects = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	const widthS = useSize()
//Tabs also responsive with 
//<Tabs maxWidth="30px" dir={window.innerWidth < 767 
//? "row" : "column" }>
    let projectContainerProps = {
    	flexWrap: null
    }
    let mainTabProps = {
    	maxWidth: "30px",
    	flexDirection: "column",
    	flexBasis: null
    }
    let chemistryTabProps = {
      label: "Chemistry"
    }
   // useEffect(() => {


    if (widthS < 600){
    	projectContainerProps.flexWrap = "wrap"
    }

    if (widthS < 600){
    	mainTabProps.flexDirection = "row"
    	mainTabProps.flexBasis = "100"
    }
//useEffect(() => {
    if (locale === "fr" ){
      chemistryTabProps.label = "Chimie"
    }
    if (locale === "sp" || locale === "pt"){
      chemistryTabProps.label = "Química"
    }
//    }, [locale])

		return (
			<>
            <Welcome />
			<ProjectContainer locale={locale}
        	    {...projectContainerProps}
			>
        	<Tabs wid={widthS} locale={locale} {...mainTabProps}>
                <div label="Drones">
                  <PDrones wid={widthS} locale={locale}/>
				</div>
				<div label="Coding">
                  <PCoding wid={widthS} locale={locale}/>
				</div>
				<div {...chemistryTabProps}>
		          <PChem wid={widthS} locale={locale}/>
				</div>
			</ Tabs>
        
			</ProjectContainer>
			 </>   
			)
}
