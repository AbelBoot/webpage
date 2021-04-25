import React, { useState, useContext } from "react"
import { useSize } from "../../custom/Size"
import { Hamburger } from "./Hamburger"
import { HamburgerContainer } from "../../theme/Containers"
import { ASimple, H5 } from "../../theme/SmallComp"
import { Emoji } from "../Emoji"
import { Icon } from "../Icons"
import { violet } from "../../theme/variables"
import { HeaderLink, HeadDiv0, HeadDiv1, HeadDivIconHamburger } from "../../theme/HeaderStyle"

			// { widthS < 400 && burger 
			// 	? <HeadDiv0><H5>Abel Locati</H5></HeadDiv0>
			// 	:  null }
export const SmHeader = ({burger, setBurger}) => {
    const widthS = useSize()
    const handleClick = () => {
    	setBurger(!burger)
    }
		return (
			<>

			{ widthS < 400 
				? <HeadDiv0><H5 color={violet}>Abel Locati</H5></HeadDiv0>
				:  null }
            <HeadDiv1 marginBottom={.4}> 
            <HamburgerContainer key={widthS} burger={burger} onClick={handleClick}> 
            { burger
				? <><HeadDivIconHamburger><Icon name="hamburger" color={violet}/></HeadDivIconHamburger></>
				: <><HeadDivIconHamburger flexBasis={"100"} ><Icon name="cross" width={"15"} color={violet}/></HeadDivIconHamburger></>
		    }
            <Hamburger 
			  burger={burger} 
              setBurger={setBurger} 
              	/>
			</HamburgerContainer>
			</HeadDiv1>
			</>
			)
}
