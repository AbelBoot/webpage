import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { H5, A } from "../theme/SmallComp"
import { PChem1 } from "./PChem1"
import { PChem2 } from "./PChem2"
import { PChem3 } from "./PChem3"
import Tabs from "./Tabs"
import { Icon } from "./Icons"
import { PCContainer } from "../theme/Containers"
import { PCDIVCONT, PCDIV1_1, PCDIV1_2, PCDIV1_2_00, PCDIV1_2_01, PCDIV1_2_02, PCDIV1_2_03 } from "../theme/PChemStyle"

export const PChem = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	return( <PCContainer>
			<PCDIVCONT>
			<PCDIV1_1>
			{locale === "en" && <H5>I have worked as a researcher in Computational Chemistry until 2015. Computational chemistry is a branch of chemistry that applies some principles of theoretical chemistry to real-world applications. Understanding reaction mechanisms at a molecular level is one of these applications. Below are some of the topics I worked on, mostly in the field of homogeneous catalysis, and the links to the related papers I co-authored.</H5>}
			{locale === "fr" && <H5>J'ai travaillé comme chercheur en chimie computationnelle jusqu'en 2015. La chimie computationnelle est une branche de la chimie qui applique certains principes de la chimie théorique à des problèmes réels. Un de ses buts est, entre autres, de déterminer des mécanismes réactionnels au niveau moléculaire. Vous trouverez ci-dessous quelques-uns des sujets sur lesquels j'ai pu travailler, principalement dans le domaine de la catalyse homogène. Les liens vers quelques articles que j'ai eu la chance de co-rédiger sont également disponibles.</H5>}		
			{locale === "sp" && <H5>Trabajé como investigador en química computacional hasta 2015. La química computacional es un ramo de la química que aplica ciertos principios de la química teórica a problemas reales. Uno de sus objetivos es, entre otras cosas, determinar mecanismos de reacción a nivel molecular. A continuación se pueden ver algunos de los temas en los que pude trabajar, principalmente en el campo de la catálisis homogénea. También hay enlaces a algunos artículos de los cuales soy coautor.</H5>}	
			{locale === "pt" && <H5>Trabalhei como pesquisador em química computacional até 2015. A química computacional é um ramo da química que aplica certos princípios da química teórica a problemas reais. Um dos seus objetivos é determinar mecanismos de reação a nível molecular. Abaixo estão alguns dos tópicos nos quais pude trabalhar, principalmente na catálise homogênea.</H5>}	
			</PCDIV1_1>
			<PCDIV1_2>
			<PCDIV1_2_00>
			<PCDIV1_2_01>
         	{locale === "en" && <H5>For a full list of my publications, you can check Google Scholars: </H5>}
			{locale === "fr" && <H5>Pour une liste complète, consultez Google Scholars: </H5>}		
			{locale === "sp" && <H5>Para una lista completa, aquí esta el enlace a Google Scholars: </H5>}	
			{locale === "pt" && <H5>Para uma lista completa, aquí esta el link a Google Scholars: </H5>}	
			</PCDIV1_2_01>
			<PCDIV1_2_02>
			<A target="_blank" href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=abel+locati&btnG=" >
				<Icon name="googleScholars" width="20" height="20" color="blue"/>
			</A>
			</PCDIV1_2_02>
			<PCDIV1_2_03>
            {locale === "en" && 
			<><H5>or look at my </H5>
			<A
			  paddingTop="2"
			  target="_blank" 
			  href="https://www.tdx.cat/bitstream/handle/10803/79120/thesis_AbelLocati.pdf?sequence=1&isAllowed=y"
			>Ph.D. thesis.</A>
			</>
			}
			{locale === "fr" && 
			<><H5>ou jetez un coup d'œil à ma </H5>
			<A
			  paddingTop="2"
			  target="_blank" 
			  href="https://www.tdx.cat/bitstream/handle/10803/79120/thesis_AbelLocati.pdf?sequence=1&isAllowed=y"
			>thèse.</A>
			</>
			}
			{locale === "sp" && 
			<><H5>o consulte mi </H5>
			<A
			  paddingTop="2"
			  target="_blank" 
			  href="https://www.tdx.cat/bitstream/handle/10803/79120/thesis_AbelLocati.pdf?sequence=1&isAllowed=y"
			>tesis doctoral.</A>
			</>
			}
			{locale === "pt" && 
			<><H5>o olha o meu </H5>
			<A
			  paddingTop="2"
			  target="_blank" 
			  href="https://www.tdx.cat/bitstream/handle/10803/79120/thesis_AbelLocati.pdf?sequence=1&isAllowed=y"
			>tese doutoral.</A>
			</>
			}		
			</PCDIV1_2_03>
			</PCDIV1_2_00>
			</PCDIV1_2>
			</PCDIVCONT>

        {locale === "en" && 
        	<Tabs alignItems="center">
				<div label="Benzodiazepines and Ring Openings">
				  <PChem1 />
				</div>
				<div label="Molecularly Imprinted Polymers">
				  <PChem2 />
				</div>
				<div label="C-H Bond Activation, C-C Bond Cleavage">
				  <PChem3 />
				</div>
			</ Tabs>
        }
		{locale === "fr" && 
			<Tabs alignItems="center">
				<div label="Benzodiazépines et Ouvertures de Cycles">
				  <PChem1 />
				</div>
				<div label="Polymères à empreinte moléculaire">
				  <PChem2 />
				</div>
				<div label="Activation de liaisons C-H, Clivage de liaisons C-C">
				  <PChem3 />
				</div>
			</ Tabs>
    	}
    			
		{locale === "sp" && 
			<Tabs alignItems="center">
				<div label="Benzodiazepinas y apertura de anillos">
				  <PChem1 />
				</div>
				<div label="Polímeros de impresión molecular">
				  <PChem2 />
				</div>
				<div label="Activación de enlace C-H, Ruptura de enlaces C-C">
				  <PChem3 />
				</div>
			</ Tabs>
 	    }	
		{locale === "pt" && 
			<Tabs alignItems="center">
				<div label="Benzodiazepinas e abertura de anel">
				  <PChem1 />
				</div>
				<div label="Polímeros com impressão molecular">
				  <PChem2 />
				</div>
				<div label="Ativação de ligação C-H, Ruptura de ligação C-C">
				  <PChem3 />
				</div>
			</ Tabs>
	    }	
	

				</PCContainer>
	    )
}