import React, { useContext } from 'react'
import { LocaleContext } from "./context/LocaleContext"
import "./Landing.css"
//import { AboutMe } from "./AboutMe"
import { Form } from "./components/Form"
import { ContactText2, ContactText3 } from "./components/Text"
import { ContactContainer } from "./theme/Containers"
import { ContactDiv1, ContactDiv2, ContactDiv3_00, ContactDiv3_01, ContactDiv3_02, ContactDiv3_03, ContactDiv3_04, ContactDiv3_05, ContactDiv3_06 } from "./theme/ContactStyle"
iSpanCV } from "./theme/SmallComp"
import { violet } from "./theme/variables"
import { Icon } from "./components/Icons"

function Contact() {
    const { locale } = useContext(LocaleContext)
  return (
    <>

    {locale === "en" && <h2>{ContactText3[0]}</h2>}
    {locale === "fr" && <h2>{ContactText3[1]}</h2>}
    {locale === "sp" && <h2>{ContactText3[2]}</h2>}
    {locale === "pt" && <h2>{ContactText3[3]}</h2>}
    
       <ContactContainer>
            <ContactDiv1>

            {locale === "en" && <h5>{ContactText2[0]}</h5>}
            {locale === "fr" && <h5>{ContactText2[1]}</h5>}     
            {locale === "sp" && <h5>{ContactText2[2]}</h5>} 
            {locale === "pt" && <h5>{ContactText2[3]}</h5>}
            </ContactDiv1>
            <ContactDiv2>
            <Form />
            </ContactDiv2>
            <ContactDiv3_00>
    <ContactDiv3_01>
    <A target="_blank" href="https://www.youtube.com/playlist?list=PLeFZ7j0suec_Z0_QH34AXxOHHvRzL7dht">
        <Icon name="youtube" color={violet}/>
    </A>
    </ContactDiv3_01>
    <ContactDiv3_02>
    <A target="_blank" href="https://www.linkedin.com/in/abel-locati-3912056b">
        <Icon name="linkedin" color={violet}/>
    </A>
    </ContactDiv3_02>
    <ContactDiv3_03>
    <A target="_blank" href="">
        <Icon name="mail" color={violet}/>
    </A>
    </ContactDiv3_03>
    <ContactDiv3_04>
    <A target="_blank" href="https://www.facebook.com/abel.locati">
        <Icon name="facebook2" color={violet}/>
    </A>
    </ContactDiv3_04>
    <ContactDiv3_05>
    <A target="_blank" href="https://github.com/AbelBoot">
        <Icon name="github" color={violet}/>
    </A>
    </ContactDiv3_05>
    <ContactDiv3_06>
                {locale === "en" && 
            <A target="_blank" href="Resume.pdf"><Icon name="resume" color={violet}/><SpanCV>CV</SpanCV></A>}
            {locale === "fr" &&
            <A target="_blank" href="Resume.pdf"><Icon name="resume" color={violet}/><SpanCV>Resume</SpanCV></A>}      
            {locale === "sp" && 
            <A target="_blank" href="Resume.pdf"><Icon name="resume" color={violet}/><SpanCV>Curriculum</SpanCV></A>}   
            {locale === "pt" && 
            <A target="_blank" href="Resume.pdf"><Icon name="resume" color={violet}/><SpanCV>Curriculum</SpanCV></A>}
    </ContactDiv3_06>

    </ContactDiv3_00>
            </ContactContainer>
 
    
    

    </>
  );
}

export default Contact;

    // {locale === "en" && <h2><Span>{ContactText[0]}</Span></h2>}
    // {locale === "fr" && <h2><Span>{ContactText[1]}</Span></h2>}
    // {locale === "sp" && <h2><Span>{ContactText[2]}</Span></h2>}
    // {locale === "pt" && <h2><Span>{ContactText[3]}</Span></h2>}
    
    // {locale === "en" && <H4 marginTop="3">{ContactText1[0]}</H4>}
    // {locale === "fr" && <H4 marginTop="3">{ContactText1[1]}</H4>}
    // {locale === "sp" && <H4 marginTop="3">{ContactText1[2]}</H4>}
    // {locale === "pt" && <H4 marginTop="3">{ContactText1[3]}</H4>}
    

