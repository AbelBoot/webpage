import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { H4, A, SpanCV0 } from "../theme/SmallComp"
import {  ProjectText1, ProjectText2 } from "./Text"
import { WCContainer } from "../theme/Containers"
import { WCDiv1, WCDiv1_00, WCDiv1_01, WCDiv1_02, WCDiv1_03, WCDiv1_04 } from "../theme/WCStyle"

export const Welcome = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	return( <WCContainer>
			{locale === "en" && 
			<h2>
              <WCDiv1>
			  <WCDiv1_01>
			  </WCDiv1_01>
			  <WCDiv1_02>
			  <H4 marginTop="1.5">{ProjectText1[0]}</H4>
			  </WCDiv1_02>
			  <WCDiv1_03>
              <A 
                target="_blank" 
                href="/documents/Resume.pdf"
                lineHeight="3.5"
                ><SpanCV0>CV</SpanCV0></A>
              </WCDiv1_03>
              <WCDiv1_04>
              <H4 marginTop="1.5">{ProjectText2[0]}</H4>
			  </WCDiv1_04>
			  </WCDiv1>
			</h2>
			}
			</WCContainer>
		)
}