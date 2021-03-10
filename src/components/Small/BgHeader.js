import React, { useContext } from "react"
import { useSize } from "../Size"
import { LocaleContext } from "../../context/LocaleContext"
import { A, SpanCV } from "../../theme/SmallComp"
import { Emoji } from "../Emoji"
import { Icon } from "../Icons"
import { violet } from "../../theme/variables"
import { HeaderLink, HeadDiv0, HeadDiv1, HeadDiv2 } from "../../theme/HeaderStyle"

export const BgHeader = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	const widthS = useSize()
		return (
			<>
			{widthS < 600 
                ?  <HeadDiv0><SpanCV>AL</SpanCV></HeadDiv0>
				:  <HeadDiv0><SpanCV>Abel Locati</SpanCV></HeadDiv0>
			}
			<HeaderLink to="/" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1> Projects </HeadDiv1></HeaderLink>
			<HeaderLink to="/contact" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1>  Contact </HeadDiv1></HeaderLink>			
            <HeadDiv2 onClick={updateLocale.bind(null, "fr")}><Emoji label="" symbol="🇫🇷" /></HeadDiv2>
			<HeadDiv2 onClick={updateLocale.bind(null, "en")}><Emoji label="" symbol="🇬🇧" /></HeadDiv2>
			<HeadDiv2 onClick={updateLocale.bind(null, "sp")}><Emoji label="" symbol="🇪🇸" /></HeadDiv2>
			<HeadDiv2 onClick={updateLocale.bind(null, "pt")} style={{paddingRight: "1em"}}><Emoji label="" symbol="🇵🇹" /></HeadDiv2>
			</>
			)
}
