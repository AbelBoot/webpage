import React, { useContext } from "react"
import { LocaleContext } from "./context/LocaleContext"
import { ProjectTextD1, ProjectTextC1 } from "./components/Text"
import { PCoTitle1, PCoTitle2, PCoTitle3 } from "./components/Text"
import { PCQuote, ProjectsChem0, ProjectsChem1, ProjectsChem2, ProjectsChem3, ProjectsChem4, ProjectsChem5 } from "./components/Text"
import { Welcome } from "./components/Welcome"
import Tabs from "./components/Tabs"
import { violet } from "./theme/variables"
import { H5, A, Span } from "./theme/SmallComp"
import { Icon } from "./components/Icons"
import { Videos } from "./components/Videos"
import { ProjectContainer, PDContainer, PCoContainer, ProjectChemistryContainer } from "./theme/Containers"
import { PCDivSubCont_1, PCDivSub1_1, PCDivSub1_2, PCDivSub1_2_00, PCDivSub1_2_01, PCDivSub1_2_02, PCDivSub1_2_03, PCDivSubInt1, PCDivSubVert_1, PCDivSubVert_2, PCDivSubHoriz_1, PCDivSubHoriz_2, PCDivSubCite, PCDivSubCite_1, PCDivSubCite_2, PCDivSubCite_3 } from "./theme/PChemStyle"
import { PCoDivSub1, PCoDivSub2_00, PCoDivSub2_01, PCoDivSub2_01_1, PCoDivSub2_01_2, PCoDivSub2_01_3, PCoDivSub2_01_4, PCoDivSub2_02, PCoDivSub2_02_1, PCoDivSub2_02_2, PCoDivSub2_02_3, PCoDivSub2_02_4, PCoDivSub2_03_1, PCoDivSub2_03_2, PCoDivSub2_03_3, PCoDivSub2_03_4, PCoDivSub2_03_5, PCoDivSub2_03_6, PCoDivSub2_03, PCoDivSub3 } from "./theme/PCodingStyle"
import { PDDiv1, PDDiv2_00, PDDiv2_01, PDDiv2_02, PDDiv2_03, PDDiv2_04, PDDiv2_05, PDDiv3, PDDiv4 } from "./theme/PDronesStyle"
import { Image } from "./theme/GlobalStyle"

//for chemistry tab <Tabs alignItems="center">
//{ProjectText3[0]}
export const Projects = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
		return (
			<>
            <Welcome />

			<ProjectContainer>
			<Tabs maxWidth="30px" dir={window.innerWidth < 767 
				? "row" : "column" }>

				<div label="Drones">
				<PDContainer>
				<PDDiv1>
				{locale === "en" && <H5>{ProjectTextD1[0]}</H5>}
				{locale === "fr" && <H5>{ProjectTextD1[1]}</H5>}
				{locale === "sp" && <H5>{ProjectTextD1[2]}</H5>}
				{locale === "pt" && <H5>{ProjectTextD1[3]}</H5>}
				</PDDiv1>
				<PDDiv2_00>
				<PDDiv2_01>
				<A target="_blank" href="https://www.youtube.com/channel/UCdMFQcy_G59uAsgWyYWZTtA"><Icon name="youtube" color={violet}/></A>
				</PDDiv2_01>
				<PDDiv2_02>
				<Icon name="javascript" color={violet}/>
				</PDDiv2_02>
				<PDDiv2_03>
				<Icon name="reactAnim" width={"70"} color={violet}/>
				</PDDiv2_03>
				<PDDiv2_04>
				<Icon name="nodejs" width={"70"} color={violet}/>
				</PDDiv2_04>
				<PDDiv2_05>
				<A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition"><Icon name="github" color={violet}/></A>
				</PDDiv2_05>
				</PDDiv2_00>
				<PDDiv3>
				<Videos />
				</PDDiv3>
				<PDDiv4>
				</PDDiv4>
				</PDContainer>
				</div>

				<div label="Coding">
				<PCoContainer>
				<PCoDivSub1>
				{locale === "en" && <H5>{ProjectTextC1[0]}</H5>}
				{locale === "fr" && <H5>{ProjectTextC1[1]}</H5>}
				{locale === "sp" && <H5>{ProjectTextC1[2]}</H5>}
				{locale === "pt" && <H5>{ProjectTextC1[3]}</H5>}
				</PCoDivSub1>
				<PCoDivSub2_00>
				<PCoDivSub2_01>
				<PCoDivSub2_01_1>
				{locale === "en" && <H5><Span>{PCoTitle1[0]}</Span></H5>}
				{locale === "fr" && <H5><Span>{PCoTitle1[1]}</Span></H5>}
				{locale === "sp" && <H5><Span>{PCoTitle1[2]}</Span></H5>}
				{locale === "pt" && <H5><Span>{PCoTitle1[3]}</Span></H5>}
				</PCoDivSub2_01_1>
				<PCoDivSub2_01_2>
				<A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="javascript" color={violet}/>
				</A>
				</PCoDivSub2_01_2>
				<PCoDivSub2_01_3>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="typescript" color={violet}/>
				</A>
				</PCoDivSub2_01_3>
				<PCoDivSub2_01_4>
				<A target="_blank" href="https://github.com/mitchzer/ADRENABID">
				<Icon name="ruby" width={"22"} color={violet}/>
				</A>
				</PCoDivSub2_01_4>
				<PCoDivSub2_01_4>
				
				</PCoDivSub2_01_4>
				</PCoDivSub2_01>
				<PCoDivSub2_02>
				<PCoDivSub2_02_1>
				{locale === "en" && <H5><Span>{PCoTitle2[0]}</Span></H5>}
				{locale === "fr" && <H5><Span>{PCoTitle2[1]}</Span></H5>}
				{locale === "sp" && <H5><Span>{PCoTitle2[2]}</Span></H5>}
				{locale === "pt" && <H5><Span>{PCoTitle2[3]}</Span></H5>}
				</PCoDivSub2_02_1>
			    <PCoDivSub2_02_2>
			    <A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="reactAnim" width={"70"} color={violet}/>
				</A>
				</PCoDivSub2_02_2>
				<PCoDivSub2_02_3>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="nestjs" width={"70"} color={violet}/>
				</A>
				</PCoDivSub2_02_3>
				<PCoDivSub2_02_4>
				<A target="_blank" href="https://github.com/mitchzer/ADRENABID">
				<Icon name="rails" width={"70"} color={violet}/>
				</A>
				</PCoDivSub2_02_4>
				</PCoDivSub2_02>
				<PCoDivSub2_03>
				<PCoDivSub2_03_1>
				{locale === "en" && <H5><Span>{PCoTitle3[0]}</Span></H5>}
				{locale === "fr" && <H5><Span>{PCoTitle3[1]}</Span></H5>}
				{locale === "sp" && <H5><Span>{PCoTitle3[2]}</Span></H5>}
				{locale === "pt" && <H5><Span>{PCoTitle3[3]}</Span></H5>}
				</PCoDivSub2_03_1>
				<PCoDivSub2_03_2>
				<A target="_blank" href="https://github.com/AbelBoot/Drone-Gesture-Recognition" >
				<Icon name="nodejs" width={"70"} color={violet}/>
				</A>
				</PCoDivSub2_03_2>
				<PCoDivSub2_03_3>
				<Icon name="github" color={violet}/>
				</PCoDivSub2_03_3>
				<PCoDivSub2_03_4>
				<A target="_blank" href="https://github.com/AbelBoot/SimpleApp-Nestjs">
				<Icon name="postgresql" color={violet}/>
				</A>
				</PCoDivSub2_03_4>
				<PCoDivSub2_03_5>
				<Icon name="html" color={violet}/>
				</PCoDivSub2_03_5>
			    <PCoDivSub2_03_6>
				<Icon name="css" color={violet}/>
				</PCoDivSub2_03_6>
				</PCoDivSub2_03>
				</PCoDivSub2_00>
				<PCoDivSub3>

				</PCoDivSub3>
				</PCoContainer>
				</div>
				

				
		<div label="Chemistry">
		        <ProjectChemistryContainer>

			<PCDivSubCont_1>
			<PCDivSub1_1>
			{locale === "en" && <H5>{ProjectsChem0[0]}</H5>}
			{locale === "fr" && <H5>{ProjectsChem0[1]}</H5>}		
			{locale === "sp" && <H5>{ProjectsChem0[2]}</H5>}	
			{locale === "pt" && <H5>{ProjectsChem0[3]}</H5>}	
			</PCDivSub1_1>
			<PCDivSub1_2>
			<PCDivSub1_2_00>
			<PCDivSub1_2_01>
			{locale === "en" && <H5>{ProjectsChem4[0]}</H5>}
			{locale === "fr" && <H5>{ProjectsChem4[1]}</H5>}		
			{locale === "sp" && <H5>{ProjectsChem4[2]}</H5>}	
			{locale === "pt" && <H5>{ProjectsChem4[3]}</H5>}	
			</PCDivSub1_2_01>
			<PCDivSub1_2_02>
			<A target="_blank" href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=abel+locati&btnG=" >
				<Icon name="googleScholars" width="20" height="20" color="blue"/>
			</A>
			</PCDivSub1_2_02>
			<PCDivSub1_2_03>
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
			>these.</A>
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
			</PCDivSub1_2_03>
			</PCDivSub1_2_00>
			</PCDivSub1_2>
			</PCDivSubCont_1>


				<Tabs alignItems="center">

				<div label="Molecularly Imprinted Polymers">
				<PCDivSubInt1>
				<PCDivSubVert_1 paddingRight="10" paddingLeft="4">
				
				  <Image img={"DeltamethrinVerticalBig"} 
					bottom="2" 
					right="5"
					maxWidth="100"
					height="40"/>
				</PCDivSubVert_1> 
				<PCDivSubVert_2>
			{locale === "en" && <H5 marginBottom="5em">{ProjectsChem1[0]}</H5>}
			{locale === "fr" && <H5 marginBottom="5em">{ProjectsChem1[1]}</H5>}		
			{locale === "sp" && <H5 marginBottom="5em">{ProjectsChem1[2]}</H5>}	
			{locale === "pt" && <H5 marginBottom="5em">{ProjectsChem1[3]}</H5>}
				</PCDivSubVert_2>
				

				<PCDivSubCite>
				<PCDivSubCite_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[0]}</H5>
				</PCDivSubCite_1> 
				<PCDivSubCite_2> 
				<A 
				  target="_blank" 
				  href="https://www.sciencedirect.com/science/article/abs/pii/S0021967315009760"
				  textAlign="right"
				  lineHeight="1.2"
				>
				Journal of Chromatography A
				</A>
				<A target="_blank" href="/papers/JChrA2015.pdf">
				   <Icon name="download" color={violet}/>
				</A>
				  <H5 textAlign="right">2015, 1409, 1, DOI: 10.1016/j.chroma.2015.07.025</H5>
				</PCDivSubCite_2>
				<PCDivSubCite_3>
				</PCDivSubCite_3>
				</PCDivSubCite>

				</PCDivSubInt1> 
				</div>
			

				<div label="Benzodiazepines and Ring Openings.">
				<PCDivSubInt1>

				<PCDivSubVert_1 paddingRight="3" paddingLeft="1">
                {locale === "en" && <H5 marginBottom="3em">{ProjectsChem2[0]}</H5>}
			{locale === "fr" && <H5 marginBottom="3em">{ProjectsChem2[1]}</H5>}		
			{locale === "sp" && <H5 marginBottom="3em">{ProjectsChem2[2]}</H5>}	
			{locale === "pt" && <H5 marginBottom="3em">{ProjectsChem2[3]}</H5>}
			</PCDivSubVert_1> 
				<PCDivSubVert_2>

							<Image img={"dibenzoTS"} 
					bottom="2" 
					right="5"
					height="25"/>
				
				</PCDivSubVert_2>

				<PCDivSubCite>
				<PCDivSubCite_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[1]}</H5>
				</PCDivSubCite_1> 
				<PCDivSubCite_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.rsc.org/en/content/articlelanding/2015/ra/c5ra19599c/unauth#!divAbstract"
				  textAlign="right"
				  lineHeight="1.2"
				>RSC Advances
				</A>
				<A target="_blank" href="/papers/Dibenzodiazepines.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDivSubCite_2>
				<PCDivSubCite_3>
				<H5 
				  marginBottom="30"
				  textAlign="right">2015, 5, 99990-99999, DOI: 10.1039/C5RA19599C</H5>
				</PCDivSubCite_3>
				<PCDivSubCite_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[2]}</H5>
				</PCDivSubCite_1> 
				<PCDivSubCite_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/10.1021/ja412547r"
				  textAlign="right"
				  lineHeight="1.2"
				>J. Am. Chem. Soc.
				</A>
				<A target="_blank" href="papers/Dibenzodiazepines.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDivSubCite_2>
				<PCDivSubCite_3>
				<H5
				  marginBottom="30" 
				  textAlign="right">2014, 136, 14, 5342-5350, DOI: 10.1021/ja412547r</H5>
				</PCDivSubCite_3>	
				</PCDivSubCite>

				</PCDivSubInt1> 
				</div>

				<div label="C-H Bond Activation, C-C Bond Cleavage">
				<PCDivSubInt1>
				
				<PCDivSubHoriz_1>
				<Image img={"NbReaction"} 
					bottom="2" 
					right="5"
					height="20"/>
				</PCDivSubHoriz_1> 
				<PCDivSubHoriz_2>
			{locale === "en" && <H5 marginBottom="3em">{ProjectsChem3[0]}</H5>}
			{locale === "fr" && <H5 marginBottom="3em">{ProjectsChem3[1]}</H5>}		
			{locale === "sp" && <H5 marginBottom="3em">{ProjectsChem3[2]}</H5>}	
			{locale === "pt" && <H5 marginBottom="3em">{ProjectsChem3[3]}</H5>}
				</PCDivSubHoriz_2>
				 
				<PCDivSubCite> 

				<PCDivSubCite_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[4]}</H5>
				</PCDivSubCite_1> 
				<PCDivSubCite_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/abs/10.1021/om800999a"
				  textAlign="right"
				  lineHeight="1.2"
				  >Organometallics
				</A>
			   
				<A target="_blank" href="/papers/OM2009.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDivSubCite_2>
				<PCDivSubCite_3>
				  <H5 
				  marginBottom="30"
				  textAlign="right">2009, 28, 4, 940-943, DOI: 10.1021/om800999a</H5>
				</PCDivSubCite_3>

				<PCDivSubCite_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[3]}</H5>
				</PCDivSubCite_1> 
				<PCDivSubCite_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/abs/10.1021/ja1061505"
				  textAlign="right"
				  lineHeight="1.2"
				  >J. Am. Chem. Soc.
				</A>
			   
				<A target="_blank" href="/papers/JACS2010.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDivSubCite_2>
				<PCDivSubCite_3>
				  <H5 
				  marginBottom="30"
				  textAlign="right">2010, 132, 40, 14239-14250, DOI: 10.1021/ja1061505</H5>
				</PCDivSubCite_3>

				<PCDivSubCite_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[5]}</H5>
				</PCDivSubCite_1> 
				<PCDivSubCite_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/abs/10.1021/om200199e"
				  textAlign="right"
				  lineHeight="1.2"
				  >Organometallics
				</A>
			   
				<A target="_blank" href="/papers/OM2011.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDivSubCite_2>
				<PCDivSubCite_3>
				  <H5 
					marginBottom="30"
					textAlign="right">2011, 30, 15, 3999-4007, DOI: 10.1021/om200199e</H5>
				</PCDivSubCite_3>

				<PCDivSubCite_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>{PCQuote[6]}</H5>
				</PCDivSubCite_1> 
				<PCDivSubCite_2> 
				<A 
				  target="_blank" 
				  href="https://https://pubs.acs.org/doi/abs/10.1021/om501056b"
				  textAlign="right"
				  lineHeight="1.2"
				  >Organometallics
				</A>
			   
				<A target="_blank" href="/papers/OM2014.pdf">
				  <Icon name="download" color={violet}/>
				</A>
				</PCDivSubCite_2>
				<PCDivSubCite_3>
				  <H5 
				  marginBottom="30"
				  textAlign="right">2014, 33, 24, 7270-7278, DOI: 10.1021/om501056b</H5>
				</PCDivSubCite_3>

				</PCDivSubCite>

				</PCDivSubInt1> 

				</div>

				</ Tabs>
				</ProjectChemistryContainer>
				</div>
				
			</Tabs>
			</ProjectContainer>
			
			 </>   
			)
}

