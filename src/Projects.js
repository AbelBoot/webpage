import React, { useContext } from "react"
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
		return (
			<>
            <Welcome />
			<ProjectContainer
        	    flexWrap={widthS < 600 
				   ? "wrap" 
				   : null }
			>

        {locale === "en" && 
        	<Tabs 
        	    maxWidth="30px" 
        	    flexDirection={widthS < 600 
				   ? "row" 
				   : "column" }
				flexBasis={widthS < 600 
				   ? "100" 
				   : null }
				>
                <div label="Drones">
                  <PDrones />
				</div>
				<div label="Coding">
                  <PCoding />
				</div>
				<div label="Chemistry">
		          <PChem />
				</div>
			</ Tabs>
        }
		{locale === "fr" && 
			<Tabs maxWidth="30px"         	    flexDirection={widthS < 600 
				   ? "row" 
				   : "column" }
				flexBasis={widthS < 600 
				   ? "100" 
				   : null }
				>
                <div label="Drones">
                  <PDrones />
				</div>
				<div label="Coding">
                  <PCoding />
				</div>
				<div label="Chimie">
		          <PChem />
				</div>
			</ Tabs>
    	}
    			
		{locale === "sp" && 
			<Tabs  maxWidth="30px"         	    flexDirection={widthS < 600 
				   ? "row" 
				   : "column" }
				flexBasis={widthS < 600 
				   ? "100" 
				   : null }
				>
                <div label="Drones">
                  <PDrones />
				</div>
				<div label="Coding">
                  <PCoding />
				</div>
				<div label="Química">
		          <PChem />
				</div>
			</ Tabs>
 	    }	
		{locale === "pt" && 
			<Tabs  maxWidth="30px" 
			       flexDirection={widthS < 600 
				   ? "row" 
				   : "column" }
				flexBasis={widthS < 600 
				   ? "100" 
				    : null }

				>
                <div label="Drones">
                  <PDrones />
				</div>
				<div label="Coding">
                  <PCoding />
				</div>
				<div label="Química">
		          <PChem />
				</div>
			</ Tabs>
	    }	
			</ProjectContainer>
			 </>   
			)
}


