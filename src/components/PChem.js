import React, { useContext } from "react"
import { LocaleContext } from "../context/LocaleContext"
import { H5, A } from "../theme/SmallComp"
import Tabs from "./Tabs"
import { Image } from "../theme/GlobalStyle"
import { Icon } from "./Icons"
import { violet } from "../theme/variables"
import { PCQuote, ProjectsChem0, ProjectsChem4, ProjectsChem5, ProjectsChem2, ProjectsChem1, ProjectsChem3 } from "./Text"
import { PCContainer } from "../theme/Containers"
import { PCDIVCONT, PCDIV1_1, PCDIV1_2, PCDIV1_2_00, PCDIV1_2_01, PCDIV1_2_02, PCDIV1_2_03, PCDIVInt1, PCDIVVERT_1, PCDIVVERT_2, PCDIVHORIZ_1, PCDIVHORIZ_2, PCDIVQ, PCDIVQ_1, PCDIVQ_2, PCDIVQ_3 } from "../theme/PChemStyle"

export const PChem = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	return( <PCContainer>
			<PCDIVCONT>
			<PCDIV1_1>
			{locale === "en" && <H5>{ProjectsChem0[0]}</H5>}
			{locale === "fr" && <H5>{ProjectsChem0[1]}</H5>}		
			{locale === "sp" && <H5>{ProjectsChem0[2]}</H5>}	
			{locale === "pt" && <H5>{ProjectsChem0[3]}</H5>}	
			</PCDIV1_1>
			<PCDIV1_2>
			<PCDIV1_2_00>
			<PCDIV1_2_01>
			{locale === "en" && <H5>{ProjectsChem4[0]}</H5>}
			{locale === "fr" && <H5>{ProjectsChem4[1]}</H5>}		
			{locale === "sp" && <H5>{ProjectsChem4[2]}</H5>}	
			{locale === "pt" && <H5>{ProjectsChem4[3]}</H5>}	
			</PCDIV1_2_01>
			<PCDIV1_2_02>
			<A target="_blank" href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=abel+locati&btnG=" >
				<Icon name="googleScholars" width="20" height="20" color="blue"/>
			</A>
			</PCDIV1_2_02>
			<PCDIV1_2_03>
			{locale === "en" && 
			<><H5>{ProjectsChem5[0]}</H5>
			<A
			  paddingTop="2"
			  target="_blank" 
			  href="https://www.tdx.cat/bitstream/handle/10803/79120/thesis_AbelLocati.pdf?sequence=1&isAllowed=y"
			>Ph.D. thesis.</A>
			</>
			}
			{locale === "fr" && 
			<><H5>{ProjectsChem5[1]}</H5>
			<A
			  paddingTop="2"
			  target="_blank" 
			  href="https://www.tdx.cat/bitstream/handle/10803/79120/thesis_AbelLocati.pdf?sequence=1&isAllowed=y"
			>thèse.</A>
			</>
			}
			{locale === "sp" && 
			<><H5>{ProjectsChem5[2]}</H5>
			<A
			  paddingTop="2"
			  target="_blank" 
			  href="https://www.tdx.cat/bitstream/handle/10803/79120/thesis_AbelLocati.pdf?sequence=1&isAllowed=y"
			>doctorado.</A>
			</>
			}
			{locale === "pt" && 
			<><H5>{ProjectsChem5[3]}</H5>
			<A
			  paddingTop="2"
			  target="_blank" 
			  href="https://www.tdx.cat/bitstream/handle/10803/79120/thesis_AbelLocati.pdf?sequence=1&isAllowed=y"
			>doutoramento.</A>
			</>
			}		
			</PCDIV1_2_03>
			</PCDIV1_2_00>
			</PCDIV1_2>
			</PCDIVCONT>


				<Tabs alignItems="center">


			

				<div label="Benzodiazepines and Ring Openings.">
				<PCDIVInt1>

				<PCDIVVERT_1 paddingRight="3" paddingLeft="1">
                {locale === "en" && <H5 marginBottom="3em">{ProjectsChem2[0]}</H5>}
			{locale === "fr" && <H5 marginBottom="3em">{ProjectsChem2[1]}</H5>}		
			{locale === "sp" && <H5 marginBottom="3em">{ProjectsChem2[2]}</H5>}	
			{locale === "pt" && <H5 marginBottom="3em">{ProjectsChem2[3]}</H5>}
			</PCDIVVERT_1> 
				<PCDIVVERT_2>
                    <Image img={"dibenzoTS"} 
					bottom="2" 
					right="5"
					height="25"/>
				</PCDIVVERT_2>

				<PCDIVQ>
				<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[1]}</H5>
				</PCDIVQ_1> 
				<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.rsc.org/en/content/articlelanding/2015/ra/c5ra19599c/unauth#!divAbstract"
				  textAlign="right"
				  lineHeight="1.2"
				>RSC Advances
				</A>
				<A target="_blank" href="">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDIVQ_2>
				<PCDIVQ_3>
				<H5 
				  marginBottom="30"
				  textAlign="right">2015, 5, 99990-99999, DOI: 10.1039/C5RA19599C</H5>
				</PCDIVQ_3>
				<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[2]}</H5>
				</PCDIVQ_1> 
				<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/10.1021/ja412547r"
				  textAlign="right"
				  lineHeight="1.2"
				>J. Am. Chem. Soc.
				</A>
				<A target="_blank" href="">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDIVQ_2>
				<PCDIVQ_3>
				<H5
				  marginBottom="30" 
				  textAlign="right">2014, 136, 14, 5342-5350, DOI: 10.1021/ja412547r</H5>
				</PCDIVQ_3>	
				</PCDIVQ>

				</PCDIVInt1> 
				</div>



				<div label="Molecularly Imprinted Polymers">
				<PCDIVInt1>
				<PCDIVVERT_1 paddingRight="10" paddingLeft="4">
				  <Image img={"DeltamethrinVERTicalBig"} 
					bottom="2" 
					right="5"
					maxWidth="100"
					height="40"/>
				</PCDIVVERT_1> 
				<PCDIVVERT_2>
			{locale === "en" && <H5 marginBottom="5em">{ProjectsChem1[0]}</H5>}
			{locale === "fr" && <H5 marginBottom="5em">{ProjectsChem1[1]}</H5>}		
			{locale === "sp" && <H5 marginBottom="5em">{ProjectsChem1[2]}</H5>}	
			{locale === "pt" && <H5 marginBottom="5em">{ProjectsChem1[3]}</H5>}
				</PCDIVVERT_2>
				<PCDIVQ>
				<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[0]}</H5>
				</PCDIVQ_1> 
				<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://www.sciencedirect.com/science/article/abs/pii/S0021967315009760"
				  textAlign="right"
				  lineHeight="1.2"
				>
				Journal of Chromatography A
				</A>
				<A target="_blank" href="JChrA2015.pdf">
				   <Icon name="download" color={violet}/>
				</A>
				  <H5 textAlign="right">2015, 1409, 1, DOI: 10.1016/j.chroma.2015.07.025</H5>
				</PCDIVQ_2>
				<PCDIVQ_3>
				</PCDIVQ_3>
				</PCDIVQ>
				</PCDIVInt1> 
				</div>


				<div label="C-H Bond Activation, C-C Bond Cleavage">
				<PCDIVInt1>
				
				<PCDIVHORIZ_1>
				<Image img={"NbReaction"} 
					bottom="2" 
					right="5"
					height="20"/>
				</PCDIVHORIZ_1> 
				<PCDIVHORIZ_2>
			{locale === "en" && <H5 marginBottom="3em">{ProjectsChem3[0]}</H5>}
			{locale === "fr" && <H5 marginBottom="3em">{ProjectsChem3[1]}</H5>}		
			{locale === "sp" && <H5 marginBottom="3em">{ProjectsChem3[2]}</H5>}	
			{locale === "pt" && <H5 marginBottom="3em">{ProjectsChem3[3]}</H5>}
				</PCDIVHORIZ_2>
				 
				<PCDIVQ> 

				<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[4]}</H5>
				</PCDIVQ_1> 
				<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/abs/10.1021/om800999a"
				  textAlign="right"
				  lineHeight="1.2"
				  >Organometallics
				</A>
			   
				<A target="_blank" href="OM2009.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDIVQ_2>
				<PCDIVQ_3>
				  <H5 
				  marginBottom="30"
				  textAlign="right">2009, 28, 4, 940-943, DOI: 10.1021/om800999a</H5>
				</PCDIVQ_3>

				<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[3]}</H5>
				</PCDIVQ_1> 
				<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/abs/10.1021/ja1061505"
				  textAlign="right"
				  lineHeight="1.2"
				  >J. Am. Chem. Soc.
				</A>
			   
				<A target="_blank" href="JACS2010.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDIVQ_2>
				<PCDIVQ_3>
				  <H5 
				  marginBottom="30"
				  textAlign="right">2010, 132, 40, 14239-14250, DOI: 10.1021/ja1061505</H5>
				</PCDIVQ_3>

				<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[5]}</H5>
				</PCDIVQ_1> 
				<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/abs/10.1021/om200199e"
				  textAlign="right"
				  lineHeight="1.2"
				  >Organometallics
				</A>
			   
				<A target="_blank" href="OM2011.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDIVQ_2>
				<PCDIVQ_3>
				  <H5 
					marginBottom="30"
					textAlign="right">2011, 30, 15, 3999-4007, DOI: 10.1021/om200199e</H5>
				</PCDIVQ_3>

				<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[6]}</H5>
				</PCDIVQ_1> 
				<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/abs/10.1021/om501056b"
				  textAlign="right"
				  lineHeight="1.2"
				  >Organometallics
				</A>
			   
				<A target="_blank" href="OM2014.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDIVQ_2>
				<PCDIVQ_3>
				  <H5 
				  marginBottom="30"
				  textAlign="right">2014, 33, 24, 7270-7278, DOI: 10.1021/om501056b</H5>
				</PCDIVQ_3>

				</PCDIVQ>

				</PCDIVInt1> 

				</div>

				</ Tabs>
				</PCContainer>
	    )
}