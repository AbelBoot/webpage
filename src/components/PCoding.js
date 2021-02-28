import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { H5, A, Span } from "../theme/SmallComp"
import { Icon } from "./Icons"
import { violet } from "../theme/variables"
import {  ProjectTextC1, PCoTitle1, PCoTitle2, PCoTitle3 } from "./Text"
import { PCoContainer } from "../theme/Containers"
import { PCODIV1, PCODIV2_00, PCODIV2_01, PCODIV2_01_1, PCODIV2_01_2, PCODIV2_01_3, PCODIV2_01_4, PCODIV2_02, PCODIV2_02_1, PCODIV2_02_2, PCODIV2_02_3, PCODIV2_02_4, PCODIV2_03_1, PCODIV2_03_2, PCODIV2_03_3, PCODIV2_03_4, PCODIV2_03_5, PCODIV2_03_6, PCODIV2_03, PCODIV3 } from "../theme/PCodingStyle"

export const PCoding = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	return(
                <PCoContainer>
				<PCODIV1>
				{locale === "en" && <H5>{ProjectTextC1[0]}</H5>}
				{locale === "fr" && <H5>{ProjectTextC1[1]}</H5>}
				{locale === "sp" && <H5>{ProjectTextC1[2]}</H5>}
				{locale === "pt" && <H5>{ProjectTextC1[3]}</H5>}
				</PCODIV1>
				<PCODIV2_00>
				<PCODIV2_01>
				<PCODIV2_01_1>
				{locale === "en" && <H5><Span>{PCoTitle1[0]}</Span></H5>}
				{locale === "fr" && <H5><Span>{PCoTitle1[1]}</Span></H5>}
				{locale === "sp" && <H5><Span>{PCoTitle1[2]}</Span></H5>}
				{locale === "pt" && <H5><Span>{PCoTitle1[3]}</Span></H5>}
				</PCODIV2_01_1>
				<PCODIV2_01_2>
				<A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="javascript" color={violet}/>
				</A>
				</PCODIV2_01_2>
				<PCODIV2_01_3>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="typescript" color={violet}/>
				</A>
				</PCODIV2_01_3>
				<PCODIV2_01_4>
				<A target="_blank" href="https://github.com/mitchzer/ADRENABID">
				<Icon name="ruby" width={"22"} color={violet}/>
				</A>
				</PCODIV2_01_4>
				<PCODIV2_01_4>
				
				</PCODIV2_01_4>
				</PCODIV2_01>
				<PCODIV2_02>
				<PCODIV2_02_1>
				{locale === "en" && <H5><Span>{PCoTitle2[0]}</Span></H5>}
				{locale === "fr" && <H5><Span>{PCoTitle2[1]}</Span></H5>}
				{locale === "sp" && <H5><Span>{PCoTitle2[2]}</Span></H5>}
				{locale === "pt" && <H5><Span>{PCoTitle2[3]}</Span></H5>}
				</PCODIV2_02_1>
			    <PCODIV2_02_2>
			    <A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="reactAnim" width={"70"} color={violet}/>
				</A>
				</PCODIV2_02_2>
				<PCODIV2_02_3>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="nestjs" width={"70"} color={violet}/>
				</A>
				</PCODIV2_02_3>
				<PCODIV2_02_4>
				<A target="_blank" href="https://github.com/mitchzer/ADRENABID">
				<Icon name="rails" width={"70"} color={violet}/>
				</A>
				</PCODIV2_02_4>
				</PCODIV2_02>
				<PCODIV2_03>
				<PCODIV2_03_1>
				{locale === "en" && <H5><Span>{PCoTitle3[0]}</Span></H5>}
				{locale === "fr" && <H5><Span>{PCoTitle3[1]}</Span></H5>}
				{locale === "sp" && <H5><Span>{PCoTitle3[2]}</Span></H5>}
				{locale === "pt" && <H5><Span>{PCoTitle3[3]}</Span></H5>}
				</PCODIV2_03_1>
				<PCODIV2_03_2>
				<A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="nodejs" width={"70"} color={violet}/>
				</A>
				</PCODIV2_03_2>
				<PCODIV2_03_3>
				<Icon name="github" color={violet}/>
				</PCODIV2_03_3>
				<PCODIV2_03_4>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="postgresql" color={violet}/>
				</A>
				</PCODIV2_03_4>
				<PCODIV2_03_5>
				<Icon name="html" color={violet}/>
				</PCODIV2_03_5>
			    <PCODIV2_03_6>
				<Icon name="css" color={violet}/>
				</PCODIV2_03_6>
				</PCODIV2_03>
				</PCODIV2_00>
				<PCODIV3>

				</PCODIV3>
				</PCoContainer>
		)
}