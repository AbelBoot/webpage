import React, { useContext } from "react"
import { useSize } from "../custom/Size"
import { LocaleContext } from "../custom/LocaleContext"
import { SpanCV } from "../theme/SmallComp"
import { SmHeader } from "./Small/SmHeader"
import { BgHeader } from "./Small/BgHeader"
import { Emoji } from "./Emoji"
import {useValidation} from "./FormValidation"
import { HeaderContainer } from "../theme/Containers"
import { HeaderLink, HeadDiv0, HeadDiv1} from "../theme/HeaderStyle"

export const Header = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	let { errors, success  } = useValidation()
    const widthS = useSize()
    const clearForm = () => {
console.log("clearing form")
    	//success = false
    }
    console.log("widthS", widthS)
    
		return (
			<>
			<HeaderContainer>
			{widthS < 520 ? <SmHeader /> : <BgHeader />}
			</HeaderContainer>
			</>
			)
}
