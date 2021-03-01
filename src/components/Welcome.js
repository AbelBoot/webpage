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
			  {locale === "en" && <H4 marginTop="1.5">Welcome to my website and extended</H4>}
			  {locale === "fr" && <H4 marginTop="1.5">Bienvenue sur ma page web personnelle!</H4>}
			  {locale === "sp" && <H4 marginTop="1.5">¡Bienvenido a mi página web!</H4>}
			  {locale === "pt" && <H4 marginTop="1.5">Bem-vindo ao meu site!</H4>}
			  </WCDIV1_02>
			  <WCDIV1_03>
              <A 
                target="_blank" 
                href="Resume.pdf"
                lineHeight="3.5"
                ><SpanCV0>CV</SpanCV0></A>
              </WCDIV1_03>
              <WCDIV1_04>
              {locale === "en" && <H4 marginTop="1.5">I am seeking for a web development job opportunity in roles related to JavaScript and React.</H4>}
              {locale === "fr" && <H4 marginTop="1.5">Cette page se veut être une sorte de CV “plus”, afin de pouvoir trouver un job dans le domaine de la programmation.</H4>}
              {locale === "sp" && <H4 marginTop="1.5">Esta pagina está destinada a ser una especie de currículum extendido, que me ayudaría a conseguir un trabajo de desarrollador web.</H4>}
              {locale === "pt" && <H4 marginTop="1.5">Esta pequena página pretende ser algum tipo de currículo estendido, que me ajudaria a conseguir um emprego em programaçao.</H4>}
			  </WCDIV1_04>
			  </WCDIV1>
			</h2>
			</WCContainer>
		)
}