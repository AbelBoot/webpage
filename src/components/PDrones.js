import React, { useContext } from "react"
import { LocaleContext } from "../custom/LocaleContext"
import { H5, A } from "../theme/SmallComp"
import { Icon } from "./Icons"
import { violet } from "../theme/variables"
import { Videos } from "./Videos"
import { PDContainer } from "../theme/Containers"
import { PDDIV1, PDDIV2_00, PDDIV2_01, PDDIV2_02, PDDIV2_03, PDDIV2_04, PDDIV2_05, PDDIV3, PDDIV4 } from "../theme/PDronesStyle"


export const PDrones = ({wid}) => {
	const { locale, updateLocale } = useContext(LocaleContext)
	console.log("widddd", wid)
	return(
				<PDContainer wid={wid}>
				<PDDIV1>
				{locale === "en" && <H5>In the Youtube videos below, you can find a full tutorial on how to control a Tello DJI drone using gesture recognition, without using the official app. The principle is the following: you perform movements in front of the webcam of your laptop, and the drone responds accordingly. Depending on the location of the movement and its intensity, a command is sent through the UDP protocol to the drone. Node.js is used for the back-end, and React.js for the front-end. Manipulation of the pixel data from the video stream is made possible by a canvas html element. You can check the repository here: https://github.com/AbelBoot/Drone-Gesture-Recognition, or clicking on the GitHub icon below.</H5>}
				{locale === "fr" && <H5>Sur ma chaîne Youtube, vous pourrez trouver un tutoriel complet sur comment contrôler un drone Tello DJI par reconnaissance gestuelle, sans utiliser l'application officielle. Le principe est le suivant: vous effectuez des mouvements devant la webcam de votre ordinateur portable, et le drone répond en fonction. Selon l’endroit où vous bougez et l’ intensité du mouvement, une commande est envoyée via le protocole UDP. Node.js est utilisé pour le back-end, et React.js pour le front-end. La manipulation des données de pixels du flux vidéo est faite grâce à une balise canvas html. Vous pouvez consulter le code ici: https://github.com/AbelBoot/Drone-Gesture-Recognition, ou en cliquant sur l'icône GitHub ci-dessous.</H5>}
				{locale === "sp" && <H5>En los videos Youtube a continuación, podrá encontrar un tutorial completo sobre cómo controlar un drone Tello DJI usando reconocimiento de gestos. El principio es el siguiente: realiza movimientos frente a la cámara web de su ordenador portátil, y el drone responde. Dependiendo de la ubicación del movimiento y su intensidad, se envía un comando a través del protocolo UDP al drone. Node.js se usa para el back-end, y React.js para el front-end. La manipulación de los píxeles del streaming vídeo se hace gracias a un elemento canvas html. Puede consultar el repositorio aquí: https://github.com/AbelBoot/Drone-Gesture-Recognition, o haciendo clic en el icono de GitHub.</H5>}
				{locale === "pt" && <H5>Nos vídeos Youtube abaixo, você pode encontrar um tutorial completo sobre como controlar um drone Tello DJI, usando o reconhecimento de gestos. O princípio é o seguinte: você realiza movimentos na frente da webcam do seu laptop, e o drone responde. Dependendo da localização do movimento e da sua intensidade, um comando é enviado através do protocolo UDP. Node.js é usado para o back-end, e React.js para o front-end. A manipulação dos dados de pixel do vídeo é possível com um elemento html canvas. Pode ver o repositório aqui: https://github.com/AbelBoot/Drone-Gesture-Recognition ou clicando no ícone GitHub.</H5>}
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