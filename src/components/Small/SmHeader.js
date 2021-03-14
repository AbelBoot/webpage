import React, { useState, useContext } from "react"
import { useSize } from "../../custom/Size"
import { Hamburger } from "./Hamburger"
import { HamburgerContainer } from "../../theme/Containers"
//import { LocaleContext } from "../../context/LocaleContext"
import { ASimple, SpanCV } from "../../theme/SmallComp"
import { Emoji } from "../Emoji"
import { Icon } from "../Icons"
import { violet } from "../../theme/variables"
//import { HeaderContainer } from "../../theme/Containers"
import { HeaderLink, HeadDiv0, HeadDiv1, HeadDivIconHamburger } from "../../theme/HeaderStyle"

export const SmHeader = ({burger, setBurger}) => {
	//const { locale, updateLocale } = useContext(LocaleContext)
    const widthS = useSize()
    
    const handleClick = () => {
    	setBurger(!burger)
    }
		return (
			<>
			{ widthS < 400 || burger
				? <HeadDiv0><SpanCV>AL</SpanCV></HeadDiv0>
				:  null }
            <HeadDiv1 marginBottom={.4}> 
            <HamburgerContainer burger={burger} onClick={handleClick}> 
            { burger
				? <><HeadDivIconHamburger><Icon name="hamburger" color={violet}/></HeadDivIconHamburger></>
				: <><HeadDivIconHamburger flexBasis={"100"} ><Icon name="cross" width={"10"} color={violet}/></HeadDivIconHamburger></>
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

            // <ASimple 
            //   burger={burger} 
            //   setBurger={setBurger} 
            //   onClick={(value) => !setBurger(value)}
            //   ></ASimple>
