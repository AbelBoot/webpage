import React, { useContext } from 'react'
import { LocaleContext } from "./custom/LocaleContext"
import { Form } from "./components/Form"
//import { ContactText1, ContactText2 } from "./components/Text"
import { ContactContainer } from "./theme/Containers"
import { CONTACTDIV0, CONTACTDIV1, CONTACTDIV2, CONTACTDIV3_00, CONTACTDIV3_01, CONTACTDIV3_02, CONTACTDIV3_03, CONTACTDIV3_04, CONTACTDIV3_05, CONTACTDIV3_06 } from "./theme/ContactStyle"
import { H2, A, SpanCV, SpanCVInline } from "./theme/SmallComp"
import { violet } from "./theme/variables"
import { Icon } from "./components/Icons"

function Contact() {
    const { locale } = useContext(LocaleContext)
  return (
    <>

    {locale === "en" && <H2>Contacts</H2>}
    {locale === "fr" && <H2>Contacts</H2>}
    {locale === "sp" && <H2>Contactos</H2>}
    {locale === "pt" && <H2>Contactos</H2>}
    
       <ContactContainer>
        <CONTACTDIV0>
            <CONTACTDIV1>
            {locale === "en" && <><h5>You can contact me using this web form, or by email.</h5><h5>You can also check my profile on the social media platforms listed below.</h5></>}
            {locale === "fr" && <><h5>Ci-dessous, vous trouverez quelques moyens pour me contacter.</h5><h5>Vous pouvez également télécharger mon CV en format traditionnel.</h5></>}     
            {locale === "sp" && <><h5>A continuación encontraran algunas formas de contactarme.</h5><h5>También puede descargar un currículum tradicional.</h5></>} 
            {locale === "pt" && <><h5>Entre em contato comigo utilizando o formulário web, o clicando nos links abaixo.</h5><h5>Também pode baixar um currículo estándar.</h5></>}
            </CONTACTDIV1>
            <CONTACTDIV2>
            <Form />
            </CONTACTDIV2>
        </CONTACTDIV0>
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
          <SpanCVInline>CV</SpanCVInline></A>}
        {locale === "fr" &&
            <A target="_blank" href="Resume.pdf">
            <Icon name="resume" color={violet}/>
            <SpanCVInline>Resume</SpanCVInline></A>}      
        {locale === "sp" && 
            <A target="_blank" href="Resume.pdf">
            <Icon name="resume" color={violet}/>
            <SpanCVInline>Curriculum</SpanCVInline></A>}   
        {locale === "pt" && 
            <A target="_blank" href="Resume.pdf">
            <Icon name="resume" color={violet}/>
            <SpanCVInline>Curriculum</SpanCVInline></A>}
    </CONTACTDIV3_06>
            </CONTACTDIV3_00>

            </ContactContainer>
    </>
  );
}

export default Contact;

