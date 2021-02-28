import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { H4, A, SpanCV0 } from "../theme/SmallComp"
import {  ProjectText1, ProjectText2 } from "./Text"
import { WCContainer } from "../theme/Containers"
import { WCDIV1, WCDIV1_01, WCDIV1_02, WCDIV1_03, WCDIV1_04 } from "../theme/WCStyle"

export const Welcome = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	return( <WCContainer>
			
			<h2>
              <WCDIV1>
			  <WCDIV1_01>
			  </WCDIV1_01>
			  <WCDIV1_02>
			  {locale === "en" && <H4 marginTop="1.5">{ProjectText1[0]}</H4>}
			  {locale === "fr" && <H4 marginTop="1.5">{ProjectText1[1]}</H4>}
			  {locale === "sp" && <H4 marginTop="1.5">{ProjectText1[2]}</H4>}
			  {locale === "pt" && <H4 marginTop="1.5">{ProjectText1[3]}</H4>}
			  </WCDIV1_02>
			  <WCDIV1_03>
              <A 
                target="_blank" 
                href="Resume.pdf"
                lineHeight="3.5"
                ><SpanCV0>CV</SpanCV0></A>
              </WCDIV1_03>
              <WCDIV1_04>
              {locale === "en" && <H4 marginTop="1.5">{ProjectText2[0]}</H4>}
              {locale === "fr" && <H4 marginTop="1.5">{ProjectText2[1]}</H4>}
              {locale === "sp" && <H4 marginTop="1.5">{ProjectText2[2]}</H4>}
              {locale === "pt" && <H4 marginTop="1.5">{ProjectText2[3]}</H4>}
			  </WCDIV1_04>
			  </WCDIV1>
			</h2>
			</WCContainer>
		)
}