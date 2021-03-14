import React, { useContext } from "react"
import { useSize } from "../../custom/Size"
import { LocaleContext } from "../../custom/LocaleContext"
import { HamburgerMenuContainer } from "../../theme/Containers"
import { A, SpanCV } from "../../theme/SmallComp"
import { Emoji } from "../Emoji"
import { violet } from "../../theme/variables"
import { HeadDivLinkHamburger, HeaderLinkHamburger, HeadDiv0, HeadDiv1Hamburger, HeadDivEmojiHamburger, HeadDiv2Hamburger } from "../../theme/HeaderStyle"

export const Hamburger = ({burger}) => {
	const { locale, updateLocale } = useContext(LocaleContext)
	const widthS = useSize()

	return (
		<>
        <HamburgerMenuContainer burger={burger}>
           <HeadDivLinkHamburger>
           <HeaderLinkHamburger to="/" style={{textDecoration: "none"}}><HeadDiv1Hamburger> Projects </HeadDiv1Hamburger></HeaderLinkHamburger>
	       <HeaderLinkHamburger to="/contact" style={{textDecoration: "none"}}><HeadDiv1Hamburger>  Contact </HeadDiv1Hamburger></HeaderLinkHamburger>			
	       </HeadDivLinkHamburger>
	       <HeadDivEmojiHamburger>
           <HeadDiv2Hamburger onClick={updateLocale.bind(null, "fr")}><Emoji label="" symbol="🇫🇷" /></HeadDiv2Hamburger>
	       <HeadDiv2Hamburger onClick={updateLocale.bind(null, "en")}><Emoji label="" symbol="🇬🇧" /></HeadDiv2Hamburger>
	       <HeadDiv2Hamburger onClick={updateLocale.bind(null, "sp")}><Emoji label="" symbol="🇪🇸" /></HeadDiv2Hamburger>
	       <HeadDiv2Hamburger onClick={updateLocale.bind(null, "pt")} style={{paddingRight: "1em"}}><Emoji label="" symbol="🇵🇹" /></HeadDiv2Hamburger>
	       </HeadDivEmojiHamburger >
	    </HamburgerMenuContainer>
	    </>
		)
} 
		
		
        
		
		
		
			