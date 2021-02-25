import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { SpanCV } from "../theme/SmallComp"
import { HeaderContainer } from "../theme/Containers"
import { HeaderLink, HeadDiv0, HeadDiv1} from "../theme/HeaderStyle"
import { HeaderText } from "../components/Text"


export const Header = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			<>
			<HeaderContainer>
			<HeadDiv0><SpanCV>{HeaderText[0]}</SpanCV></HeadDiv0>
			<HeaderLink to="/" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1> Projects </HeadDiv1></HeaderLink>
			<HeaderLink to="/contact" style={{textDecoration: "none", marginTop: "4px"}}><HeadDiv1>  Contact </HeadDiv1></HeaderLink>			
			<HeadDiv1 onClick={updateLocale.bind(null, "fr")}>🇫🇷</HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "en")}>🇬🇧</HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "sp")}>🇪🇸</HeadDiv1>
			<HeadDiv1 onClick={updateLocale.bind(null, "pt")}>🇵🇹</HeadDiv1>
			</HeaderContainer>
			</>
			)
}
//<BigDiv></BigDiv>
//<button onClick={localeVal.updateLocale}>Change language</button>	
// onClick={value.updateLocale.bind("french")}
//data-lang={"fr"}
// <HeaderLink to="/about" style={{textDecoration: "none", marginTop: "4px"}}><Div> About Me </Div></HeaderLink>