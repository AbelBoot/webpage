import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { H5, A } from "../theme/SmallComp"
import { Icon } from "./Icons"
import { violet } from "../theme/variables"
import { ProjectTextD1 } from "./Text"
import { Videos } from "./Videos"
import { PDContainer } from "../theme/Containers"
import { PDDIV1, PDDIV2_00, PDDIV2_01, PDDIV2_02, PDDIV2_03, PDDIV2_04, PDDIV2_05, PDDIV3, PDDIV4 } from "../theme/PDronesStyle"


export const PDrones = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	return(
				<PDContainer>
				<PDDIV1>
				{locale === "en" && <H5>{ProjectTextD1[0]}</H5>}
				{locale === "fr" && <H5>{ProjectTextD1[1]}</H5>}
				{locale === "sp" && <H5>{ProjectTextD1[2]}</H5>}
				{locale === "pt" && <H5>{ProjectTextD1[3]}</H5>}
				</PDDIV1>
				<PDDIV2_00>
				<PDDIV2_01>
				<A target="_blank" href="https://www.youtube.com/channel/UCdMFQcy_G59uAsgWyYWZTtA"><Icon name="youtube" color={violet}/></A>
				</PDDIV2_01>
				<PDDIV2_02>
				<Icon name="javascript" color={violet}/>
				</PDDIV2_02>
				<PDDIV2_03>
				<Icon name="reactAnim" width={"70"} color={violet}/>
				</PDDIV2_03>
				<PDDIV2_04>
				<Icon name="nodejs" width={"70"} color={violet}/>
				</PDDIV2_04>
				<PDDIV2_05>
				<A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition"><Icon name="github" color={violet}/></A>
				</PDDIV2_05>
				</PDDIV2_00>
				<PDDIV3>
				<Videos />
				</PDDIV3>
				<PDDIV4>
				</PDDIV4>
				</PDContainer>
			)
}