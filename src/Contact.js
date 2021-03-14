import React, { useContext } from 'react'
import { LocaleContext } from "./custom/LocaleContext"
import { useSize } from "./custom/Size"
import { Form } from "./components/Form"
import { ContactContainer } from "./theme/Containers"
import { CONTACTDIV0, CONTACTDIV1, CONTACTDIV2, CONTACTDIV0_Sm, CONTACTDIV1_Sm, CONTACTDIV2_Sm, CONTACTDIV3_00, CONTACTDIV3_01, CONTACTDIV3_02, CONTACTDIV3_03, CONTACTDIV3_04, CONTACTDIV3_05, CONTACTDIV3_06 } from "./theme/ContactStyle"
import { H2, H5, A, SpanCV, SpanCVInline } from "./theme/SmallComp"
import { violet } from "./theme/variables"
import { Icon } from "./components/Icons"

function Contact() {
    const { locale } = useContext(LocaleContext)
    const widthS = useSize()
    let iconsProps = {
      flexWrap: "no-wrap"
    }
    // add wrap to the icons for small screen
    if (widthS < 500){
      iconsProps.flexWrap = "wrap"
    }
  return (
    <>

    {locale === "en" && <H2>Contacts</H2>}
    {locale === "fr" && <H2>Contacts</H2>}
    {locale === "sp" && <H2>Contactos</H2>}
    {locale === "pt" && <H2>Contactos</H2>}
     
       <ContactContainer>
        
            { widthS < 600 
                ? <>
                <CONTACTDIV0_Sm>
                   <CONTACTDIV1_Sm >
                   {locale === "en" && <><H5>You can contact me using this web form, or by email.</H5><H5>You can also check my profile on the social media platforms listed below.</H5></>}
                   {locale === "fr" && <><H5>Ci-dessous, vous trouverez quelques moyens pour me contacter.</H5><H5>Vous pouvez également télécharger mon CV en format traditionnel.</H5></>}     
                   {locale === "sp" && <><H5>A continuación encontraran algunas formas de contactarme.</H5><H5>También puede descargar un currículum tradicional.</H5></>} 
                   {locale === "pt" && <><H5>Entre em contato comigo utilizando o formulário web, o clicando nos links abaixo.</H5><H5>Também pode baixar um currículo estándar.</H5></>}
                   </CONTACTDIV1_Sm>
                   <CONTACTDIV2_Sm>
                   <Form />
                   </CONTACTDIV2_Sm>
                </CONTACTDIV0_Sm>
                </>
                : <>
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
                </>
            }
            <CONTACTDIV3_00 {...iconsProps}>
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

