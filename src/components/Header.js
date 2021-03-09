import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { SpanCV } from "../theme/SmallComp"
import { Emoji } from "./Emoji"
import {useValidation} from "./FormValidation"
import { HeaderContainer } from "../theme/Containers"
import { HeaderLink, HeadDiv0, HeadDiv1} from "../theme/HeaderStyle"

export const Header = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	let { errors, success  } = useValidation()

    const clearForm = () => {
console.log("clearing form")
    	//success = false
    }

		return (
			<>
			<HeaderContainer>
			<HeadDiv0><SpanCV>Abel Locati</SpanCV></HeadDiv0>
			<HeaderLink onClick={clearForm} to="/" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1> Projects </HeadDiv1></HeaderLink>
			<HeaderLink to="/contact" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1>  Contact </HeadDiv1></HeaderLink>			
			<HeadDiv1 onClick={updateLocale.bind(null, "fr")}><Emoji label="" symbol="🇫🇷" /></HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "en")}><Emoji label="" symbol="🇬🇧" /></HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "sp")}><Emoji label="" symbol="🇪🇸" /></HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "pt")}><Emoji label="" symbol="🇵🇹" /></HeadDiv1>
			</HeaderContainer>
			</>
			)
}