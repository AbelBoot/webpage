import React, { useContext } from "react"
import { LocaleContext } from "../custom/LocaleContext"
import { Image, H5, A } from "../theme/SmallComp"
import { Icon } from "./Icons"
import { violet } from "../theme/variables"
import { PCDIVInt1, PCDIVHORIZ_1, PCDIVHORIZ_2, PCDIVQ, PCDIVQ_1, PCDIVQ_2, PCDIVQ_3 } from "../theme/PChemStyle"

export const PChem3 = () => {
	const { locale, updateLocale } = useContext(LocaleContext)
	return( <PCDIVInt1 locale={locale}>
			<PCDIVHORIZ_1 smallHeight="15">
			<Image img={"NbReaction"} 
					bottom="2" 
					right="5"
					minHeight="15"
					justify
					/>
			</PCDIVHORIZ_1> 
			<PCDIVHORIZ_2>
			{locale === "en" && <H5 marginBottom="3em">Activation of Carbon-Hydrogen bonds has been a hot topic in chemistry for the last decades. Functionalizing small alkanes in large-scale reactions would allow easy implementations of hydrogen storage, among other environmental technologies. In the reaction depicted above, a C-H bond of a molecule of benzene is functionalized using a Niobium complex. These complexes have been extensively studied in the papers below.</H5>}
			{locale === "fr" && <H5 marginBottom="3em">En raison de la nature inerte de la liaison carbone-hydrogène, son activation nécessite souvent des conditions difficiles. Être capable de fonctionnaliser de petites molécules telles que le méthane de cette manière est un immense défi pour la chimie. Le réussir pour des réactions applicables à grande échelle ouvrirait les portes à des applications cruciales tel que le stockage de l’hydrogène. Ci-dessous, on peut voir une réaction qui implique un complexe de Niobium qui fonctionnalise avec succès une liaison C-H d'un complexe alkyle, et ce dans des conditions douces.</H5>}		
			{locale === "sp" && <H5 marginBottom="3em">Debido a la natureza inerte del enlace carbono-hidrógeno, activarlo a veces requiere condiciones muy especificas. Poder funcionalizar moléculas pequeñas como el metano, usando estos enlaces, es un desafío muy grande. Tener éxito en hacerlo con reacciones a gran escala abriría las puertas a aplicaciones como el almacenamiento de hidrógeno. A continuación se puede ver una reacción que involucra un complejo de Niobio que funcionaliza con éxito un enlace C-H de un complejo de alquilo en condiciones suaves.</H5>}	
			{locale === "pt" && <H5 marginBottom="3em">Devido à natureza inerte da ligação carbono-hidrogênio, ativá-lo às vezes exige condições adversas. Ser capaz de funcionalizar pequenos módulos como o metano usando essas ligações é um desafio. O sucesso em reações em larga escala abriria as portas para aplicações como armazenamento de hidrogênio. Abaixo, vemos uma reação envolvendo um átomo de nióbio que funcionaliza com êxito uma ligação C-H de um complexo alquil em condições amenas.</H5>}
			</PCDIVHORIZ_2>
				 
			<PCDIVQ>
			<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>C−C Coupling Constants, JCC, Are Reliable Probes for α-C−C Agostic Structures.</H5>
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
					>C−H Bond Activation of Benzene by Unsaturated η2-Cyclopropene and η2-Benzyne Complexes of Niobium.</H5>
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
					>Aromatic versus Benzylic CH Bond Activation of Alkylaromatics by a Transient η2-Cyclopropene Complex.</H5>
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
					maginBottom="30"
					textAlign="right">2011, 30, 15, 3999-4007, DOI: 10.1021/om200199e</H5>
			</PCDIVQ_3>

			<PCDIVQ_1> 
				  <H5 
					textAlign="right"
					lineHeight="1.2"
					fontFamily="Arial Narrow"
					>β-H abstraction/1, 3-CH bond addition as a mechanism for the activation of CH bonds at early transition metal centers.</H5>
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
	)
}

