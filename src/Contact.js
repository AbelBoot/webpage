import React, { useContext } from 'react'
import { LocaleContext } from "./context/LocaleContext"
import { Form } from "./components/Form"
//import { ContactText1, ContactText2 } from "./components/Text"
import { ContactContainer } from "./theme/Containers"
import { CONTACTDIV1, CONTACTDIV2, CONTACTDIV3_00, CONTACTDIV3_01, CONTACTDIV3_02, CONTACTDIV3_03, CONTACTDIV3_04, CONTACTDIV3_05, CONTACTDIV3_06 } from "./theme/ContactStyle"
import { A, SpanCV } from "./theme/SmallComp"
import { violet } from "./theme/variables"
import { Icon } from "./components/Icons"

function Contact() {
    const { locale } = useContext(LocaleContext)
  return (
    <>

    {locale === "en" && <h2>Contacts</h2>}
    {locale === "fr" && <h2>Contacts</h2>}
    {locale === "sp" && <h2>Contactos</h2>}
    {locale === "pt" && <h2>Contactos</h2>}
    
       <ContactContainer>

            <CONTACTDIV1>
            {locale === "en" && <><h5>You can contact me using this web form, or by email.</h5><h5>You can also check my profile on the social media platforms listed below.</h5></>}
            {locale === "fr" && <h5>Ci-dessous, vous trouverez quelques moyens pour me contacter. Vous pouvez également télécharger mon CV en format traditionnel.</h5>}     
            {locale === "sp" && <h5>A continuación encontraran algunas formas de contactarme, y también puede descargar un currículum tradicional.</h5>} 
            {locale === "pt" && <h5>Abaixo estão algumas maneiras pelas quais você pode entrar em contato comigo e também pode baixar um currículo antiquado.</h5>}
            </CONTACTDIV1>
            <CONTACTDIV2>
            <Form />
            </CONTACTDIV2>
            <CONTACTDIV3_00>
    <CONTACTDIV3_01>
    <A target="_blank" href="https://www.youtube.com/playlist?list=PLeFZ7j0suec_Z0_QH34AXxOHHvRzL7dht">
        <Icon name="youtube" color={violet}/>
    </A>
    </CONTACTDIV3_01>
    <CONTACTDIV3_02>
    <A target="_blank" href="https://www.linkedin.com/in/abel-locati-3912056b">
        <Icon name="linkedin" color={violet}/>
    </A>
    </CONTACTDIV3_02>
    <CONTACTDIV3_03>
    <A target="_blank" href="">
        <Icon name="mail" color={violet}/>
    </A>
    </CONTACTDIV3_03>
    <CONTACTDIV3_04>
    <A target="_blank" href="https://www.facebook.com/abel.locati">
        <Icon name="facebook2" color={violet}/>
    </A>
    </CONTACTDIV3_04>
    <CONTACTDIV3_05>
    <A target="_blank" href="https://github.com/AbelBoot">
        <Icon name="github" color={violet}/>
    </A>
    </CONTACTDIV3_05>
    <CONTACTDIV3_06>
        {locale === "en" && 
          <A target="_blank" href="Resume.pdf">
          <Icon name="resume" color={violet}/>
          <SpanCV>CV</SpanCV></A>}
        {locale === "fr" &&
            <A target="_blank" href="Resume.pdf">
            <Icon name="resume" color={violet}/>
            <SpanCV>Resume</SpanCV></A>}      
        {locale === "sp" && 
            <A target="_blank" href="Resume.pdf">
            <Icon name="resume" color={violet}/>
            <SpanCV>Curriculum</SpanCV></A>}   
        {locale === "pt" && 
            <A target="_blank" href="Resume.pdf">
            <Icon name="resume" color={violet}/>
            <SpanCV>Curriculum</SpanCV></A>}
    </CONTACTDIV3_06>
            </CONTACTDIV3_00>

            </ContactContainer>
    </>
  );
}

export default Contact;

