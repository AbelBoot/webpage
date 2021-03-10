import React, { useContext } from "react"
import { useSize } from "../Size"
import { LocaleContext } from "../../context/LocaleContext"
import { ASimple, SpanCV } from "../../theme/SmallComp"
import { Emoji } from "../Emoji"
import { Icon } from "../Icons"
import { violet } from "../../theme/variables"
//import { HeaderContainer } from "../../theme/Containers"
import { HeaderLink, HeadDiv0, HeadDiv1} from "../../theme/HeaderStyle"

export const SmHeader = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
    const widthS = useSize()
		return (
			<>
			<HeadDiv0><SpanCV>AL</SpanCV></HeadDiv0>
			{ widthS < 400 
				? null
				: <><HeaderLink  to="/" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1> Projects </HeadDiv1></HeaderLink>
			<HeaderLink to="/contact" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1>  Contact </HeadDiv1></HeaderLink></>
            }
            <HeadDiv1 marginBottom={.4}> 
            <ASimple target="_blank" href="" >
			<Icon name="hamburger"  color={violet}/>
			</ASimple>
			</HeadDiv1>
			</>
			)
}
