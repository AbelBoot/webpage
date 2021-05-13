import React, { useContext } from "react"
import { LocaleContext } from "../custom/LocaleContext"
import { useSize } from "../custom/Size"
import { Image, H5, A } from "../theme/SmallComp"
import { Icon } from "./Icons"
import { violet } from "../theme/variables"
import {  PCDIVInt1, PCDIVVERT_1, PCDIVVERT_2, PCDIVVERT_0_Sm, PCDIVVERT_1_Sm, PCDIVVERT_2_Sm, PCDIVQ, PCDIVQ_1, PCDIVQ_2, PCDIVQ_3 } from "../theme/PChemStyle"

export const PChem1 = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	const widthS = useSize()

		return( <PCDIVInt1>
		    { widthS < 600 
		    	? <>
				<PCDIVVERT_0_Sm>
      			  <PCDIVVERT_1_Sm paddingRight="3" paddingLeft="1" smallHeight="25">
                    <Image img={"dibenzoTS"} 
					bottom="2" 
					right="5"
					minHeight="25"
					justify
					/>
                  </PCDIVVERT_1_Sm> 
			      <PCDIVVERT_2_Sm>
                    {locale === "en" && <H5 marginBottom="3em">Benzodiazepines are a class of pharmaceutical drugs used to treat psychotic disorders. Examples of famous benzodiazepines are: alprazolam, clonazepam, and diazepam. Their mode of action mostly consists of binding various sites on the GABA-A receptors. Dibenzodiazepines (DBDA) are a sub-class of these pharmaceuticals, and include a diazepine ring fused with two benzene rings. Clozapine is one of the most significant ones, due to its presence on the WHO model list of essential medicines. In this paper, we report the first Palladium-catalyzed synthesis of dibenzodiazepines using o-bromoarylamines and o-bromoarylimines, under Buchwald-Hartwig amination conditions. In the picture, we can see a Nitrogen-Sulfur bond cleavage catalysed by a Palladium-based ligand.</H5>}
			        {locale === "fr" && <H5 marginBottom="3em">Les benzodiazépines sont une classe de médicaments importants pour quiconque un tant soit peu familier des maladies mentales dans le monde occidental. L'alprazolam, le clonazepam, le diazépam sont des exemples de benzodiazépines célèbres. Leur mode d'action consiste principalement à se lier à divers sites sur les récepteurs GABA de type A. Cela en fait d’intéressants candidats pour traiter des troubles psychotiques. Les dibenzodiazépines (DBDA) sont une sous-classe de ces composés pharmaceutiques et comprennent une diazépine fusionnée avec deux cycles de benzène. La clozapine en est probablement la plus importante, en raison de sa présence sur la liste modèle de l’ OMS des médicaments essentiels. Il existe encore peu de méthodes chimiques qui permettent la synthèse d’un squelette DBDA. Dans cet article, nous rapportons la première synthèse catalysée au palladium de dibenzodiazépines utilisant des o-bromoarylamines et des o-bromoarylimines, dans des conditions d'amination de Buchwald-Hartwig. Sur l'image, on peut voir un rupture de liaison azote-soufre catalysée par un ligand à base de palladium.</H5>}		
			        {locale === "sp" && <H5 marginBottom="3em">Las benzodiazepinas son una clase de medicamentos psicotrópicos en el mundo de las enfermedades mentales. Alprazolam, clonazepam, diazepam son ejemplos de estos medicamentos que se usan para tratar trastornos psicóticos. Tienen gran afinidad con los receptores GABA-A. Las dibenzodiazepinas (DBDA) son una sub-clase de estos farmacos e incluyen un anillo de diazepina unido a dos anillos de benceno. La clozapina es probablemente la más importante, debido a su presencia en la lista de medicamentos esenciales de la Organización Mundial de la Salud. Todavía existen pocos métodos químicos sintéticos para las DBDAs. Presentamos la primera síntesis catalizada por paladio de dibenzodiacepinas utilizando o-bromoarilaminas y o-bromoariliminas, en condiciones de aminación de Buchwald-Hartwig. En la imagen, se puede ver una rupture del enlace Nitrógeno-Azufre catalizada por un ligando a base de paladio.</H5>}	
			        {locale === "pt" && <H5 marginBottom="3em">Os benzodiazepínicos são uma classe de medicamentos farmacêuticos importantes para qualquer pessoa familiarizada com doenças mentais no mundo ocidental. Alprazolam, clonazepam, diazepam são exemplos de famosos benzodiazepínicos usados para tratar distúrbios psicóticos. Seu modo de ação consiste principalmente na ligação de vários locais aos receptores GABA-A. Os dibenzodiazepínicos (DBDA) são uma subclasse desses produtos farmacêuticos e incluem um anel de diazepina fundido com dois anéis de benzeno. A clozapina é provavelmente a mais importante, devido à sua presença na lista modelo de medicamentos essenciais da OMS. Poucos métodos químicos sintéticos estão disponíveis para o backbone DBDA. Nesse papel, relatamos a primeira síntese catalisada por paládio de dibenzodiazepinas usando o-bromoarilaminas e o-bromoariminas, sob condições de aminação de Buchwald-Hartwig. Na figura, podemos ver uma clivagem da ligação Nitrogênio-Enxofre catalisada por um ligante à base de paládio.</H5>}
		          </PCDIVVERT_2_Sm>
				  </PCDIVVERT_0_Sm>
		    	</>
		    	: <>
		    	  <PCDIVVERT_1 paddingRight="3" paddingLeft="1">
                    {locale === "en" && <H5 marginBottom="3em">Benzodiazepines are a class of pharmaceutical drugs used to treat psychotic disorders. Examples of famous benzodiazepines are: alprazolam, clonazepam, and diazepam. Their mode of action mostly consists of binding various sites on the GABA-A receptors. Dibenzodiazepines (DBDA) are a sub-class of these pharmaceuticals, and include a diazepine ring fused with two benzene rings. Clozapine is one of the most significant ones, due to its presence on the WHO model list of essential medicines. In this paper, we report the first Palladium-catalyzed synthesis of dibenzodiazepines using o-bromoarylamines and o-bromoarylimines, under Buchwald-Hartwig amination conditions. In the picture, we can see a Nitrogen-Sulfur bond cleavage catalysed by a Palladium-based ligand.</H5>}
			        {locale === "fr" && <H5 marginBottom="3em">Les benzodiazépines sont une classe de médicaments importants pour quiconque un tant soit peu familier des maladies mentales dans le monde occidental. L'alprazolam, le clonazepam, le diazépam sont des exemples de benzodiazépines célèbres. Leur mode d'action consiste principalement à se lier à divers sites sur les récepteurs GABA de type A. Cela en fait d’intéressants candidats pour traiter des troubles psychotiques. Les dibenzodiazépines (DBDA) sont une sous-classe de ces composés pharmaceutiques et comprennent une diazépine fusionnée avec deux cycles de benzène. La clozapine en est probablement la plus importante, en raison de sa présence sur la liste modèle de l’ OMS des médicaments essentiels. Il existe encore peu de méthodes chimiques qui permettent la synthèse d’un squelette DBDA. Dans cet article, nous rapportons la première synthèse catalysée au palladium de dibenzodiazépines utilisant des o-bromoarylamines et des o-bromoarylimines, dans des conditions d'amination de Buchwald-Hartwig. Sur l'image, on peut voir un rupture de liaison azote-soufre catalysée par un ligand à base de palladium.</H5>}		
			        {locale === "sp" && <H5 marginBottom="3em">Las benzodiazepinas son una clase de medicamentos psicotrópicos en el mundo de las enfermedades mentales. Alprazolam, clonazepam, diazepam son ejemplos de estos medicamentos que se usan para tratar trastornos psicóticos. Tienen gran afinidad con los receptores GABA-A. Las dibenzodiazepinas (DBDA) son una sub-clase de estos farmacos e incluyen un anillo de diazepina unido a dos anillos de benceno. La clozapina es probablemente la más importante, debido a su presencia en la lista de medicamentos esenciales de la Organización Mundial de la Salud. Todavía existen pocos métodos químicos sintéticos para las DBDAs. Presentamos la primera síntesis catalizada por paladio de dibenzodiacepinas utilizando o-bromoarilaminas y o-bromoariliminas, en condiciones de aminación de Buchwald-Hartwig. En la imagen, se puede ver una rupture del enlace Nitrógeno-Azufre catalizada por un ligando a base de paladio.</H5>}	
			        {locale === "pt" && <H5 marginBottom="3em">Os benzodiazepínicos são uma classe de medicamentos farmacêuticos importantes para qualquer pessoa familiarizada com doenças mentais no mundo ocidental. Alprazolam, clonazepam, diazepam são exemplos de famosos benzodiazepínicos usados para tratar distúrbios psicóticos. Seu modo de ação consiste principalmente na ligação de vários locais aos receptores GABA-A. Os dibenzodiazepínicos (DBDA) são uma subclasse desses produtos farmacêuticos e incluem um anel de diazepina fundido com dois anéis de benzeno. A clozapina é provavelmente a mais importante, devido à sua presença na lista modelo de medicamentos essenciais da OMS. Poucos métodos químicos sintéticos estão disponíveis para o backbone DBDA. Nesse papel, relatamos a primeira síntese catalisada por paládio de dibenzodiazepinas usando o-bromoarilaminas e o-bromoariminas, sob condições de aminação de Buchwald-Hartwig. Na figura, podemos ver uma clivagem da ligação Nitrogênio-Enxofre catalisada por um ligante à base de paládio.</H5>}
			      </PCDIVVERT_1> 
			      <PCDIVVERT_2>
                  <Image img={"dibenzoTS"} 
					bottom="2" 
					right="5"
					minHeight="40"/>
		          </PCDIVVERT_2>
                </>
            }
			<PCDIVQ>
			<PCDIVQ_1> 
				<H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>A catalytic route to dibenzodiazepines involving Buchwald–Hartwig coupling: reaction scope and mechanistic consideration.</H5>
			</PCDIVQ_1> 
			<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.rsc.org/en/content/articlelanding/2015/ra/c5ra19599c/unauth#!divAbstract"
				  textAlign="right"
				  lineHeight="1.2"
				>RSC Advances
				</A>
				<A target="_blank" href="RSCAdv2013.pdf">
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
					>Chemo-, regio-, and stereoselective silver-catalyzed aziridination of dienes: Scope, mechanistic studies, and ring-opening reactions.</H5>
			</PCDIVQ_1> 
			<PCDIVQ_2> 
				<A 
				  target="_blank" 
				  href="https://pubs.acs.org/doi/10.1021/ja412547r"
				  textAlign="right"
				  lineHeight="1.2"
				>J. Am. Chem. Soc.
				</A>
				<A target="_blank" href="JACS2014.pdf">
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
	)
}