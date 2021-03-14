import styled  from "styled-components"
import { css, keyframes }  from "styled-components"
import { pink, grey, violet } from "./variables"

const textStyles = css`
 text-align: justify;
 margin: 5px;
`
//font-size: ${props => props.fontSize}px;

export const H5 = styled.h5`
${textStyles}
${(props) => props.textAlign && `
    text-align: ${props.textAlign};
    `
  }
${(props) => props.fontStyle && `
    font-style: ${props.fontStyle};
    `
  }
${(props) => props.fontSize && `
    font-size: ${props.fontSize}em;
    `
  }
${(props) => props.fontFamily && `
    font-family: ${props.fontFamily};
    `
}
${(props) => props.fontWeight && `
    font-weight: ${props.fontWeight};
    `
  }
${(props) => props.marginBottom && `
    margin-bottom: ${props.marginBottom}px;
    `
  }
${(props) => props.marginTop && `
    margin-top: ${props.marginTop}px;
    `
  }
${(props) => props.lineHeight && `
    line-height: ${props.lineHeight};
    `
  }
${(props) => props.color && `
    color: ${props.color};
    `
}
`

export const H4 = styled.h4`
${textStyles};
font-size: .9em;
${(props) => props.marginTop && `
    margin-top: ${props.marginTop}em;
    `
}
${(props) => props.marginBottom && `
    margin-bottom: ${props.marginBottom}em;
    `
}
${(props) => props.color && `
    color: ${props.color};
    `
}
`

export const H2 = styled.h2`
    ${textStyles}
    font-size: 1.5em;
    margin-top: 1em;
`

export const H1 = styled.div`
    font-size: 3em;
    color: ${violet};
    opacity: 0.8;
`



export const Span = styled.span`
  display: inline;
  background-color: ${pink};
  border-radius: 5px 20px 5px;
  padding: 6px 10px 6px 10px;
`

const reactSpanAnimation = keyframes`
  0%{ opacity: 0;}
  50%{ opacity: .5;}
  100%{ opacity: 1;}
`

export const SpanCV = styled.span`
  display: flex;
  wrap: no-wrap;
  margin-left: .2em;
  color: white;
  background-color: ${violet};
  border-radius: 5px 20px 5px;
  padding: 6px 10px 6px 10px; 
`
  // ${(props) => props.minWidth && css `
  //   min-width: ${props.minWidth}px;
  // ` }

export const SpanCVInline = styled.span`
  margin-left: .2em;
  color: white;
  background-color: ${violet};
  border-radius: 5px 20px 5px;
  padding: 6px 10px 6px 10px;
`
//display: inline;

const reactAnimation = keyframes`
  0%{ opacity: 0;}
  50%{ opacity: .5;}
  100%{ opacity: 1;}
`

//padding: 6px 10px 6px 10px;
export const SpanTab = styled.span`
  display: inline;
  border-radius: 5px 20px 5px;
  
`

export const TabContainer = styled.div`
  display: flex;
  
`

//flexBasis and flexDirection are coming 
// from Tabs and allow horizontal tabs 
//on small screens.
export const OlTabs = styled.ol`  
  display: flex;
  ${(props) => props.maxWidth && css `
    max-width: 30px;
    ` }
  ${({justifyContent}) => justifyContent && css`
    justify-content: ${justifyContent};
  `};

  ${({flexDirection}) => flexDirection && css`
    flex-direction: ${flexDirection};
  `};
  ${({flexBasis}) => flexBasis && css`
    flex-basis: ${flexBasis}%;
  `};
  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `};
  list-style: none;
  margin: 1px;
  padding: 0.2rem 0.2rem;
`

export const ListTab = styled.li`
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `};
  ${({column}) => column && css`
    flex-direction: ${column};
  `};
  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `};
  
  background-color: ${props => 
    props.selected
      ? violet
      : pink};
  border-radius: 5px 20px 5px;
  color: ${props => 
    props.selected
      ? "white"
      : grey};
  font-weight: bold;
  padding: 6px 10px 6px 10px;
  margin: .8em;
  &:hover {
    cursor: pointer;
  }
`
// flex: 0 1 auto; display: block;

export const LiActive = styled.li`
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;

`

 export const Button = styled.button`
 background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  
 `



export const DivArrow = styled.div`
  margin-top:4em;
  margin-right: 2.7em;
`

 export const A = styled.a`
  color: ${violet};
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  position: relative;

  padding: 6px 10px 1px 10px;
  ${(props) => props.paddingTop && `
    padding-top: ${props.paddingTop}px;
    `
  }
  &:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20%;
    min-width: 100%;
    background-color: ${pink};
      ${(props) => props.backgroundColor && `
    background-color: ${props.backgroundColor};
     `
    }
    z-index: -1;
    transition: height .2s, background-color .2s;
  }

  &:hover:after {
    height: 60%;
    border-radius: 1px;
    background-color: ${pink};
  }

  &:after DivArrow {
    margin-bottom: 3em;
  }
  ${(props) => props.textAlign && `
    text-align: ${props.textAlign};
    `
  }
  ${(props) => props.lineHeight && `
    line-height: ${props.lineHeight}em;
    `
  }
 `

 export const ASimple = styled.a`
  color: ${violet};
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  position: relative;

  padding: 6px 10px 1px 10px;
  ${(props) => props.paddingTop && `
    padding-top: ${props.paddingTop}px;
    `
  }
  &:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20%;
    min-width: 100%;
    
      ${(props) => props.backgroundColor && `
    background-color: ${props.backgroundColor};
     `
    }
    z-index: -1;
    
  }



  &:after DivArrow {
    margin-bottom: 3em;
  }
  ${(props) => props.textAlign && `
    text-align: ${props.textAlign};
    `
  }
  ${(props) => props.lineHeight && `
    line-height: ${props.lineHeight}em;
    `
  }
 `

export const Image = styled.img.attrs(props => ({
  src: `${props.img}.png`,// || Myimg,
}))`
  bottom: ${props => props.bottom}vw;
  right: ${props => props.right}vw;
    max-width: ${props => props.maxWidth}%;
    height: ${props => props.height}vw; 
  
  background-size: contain;
  background-repeat: no-repeat;

`


const rotation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

export const SpinnerAnim = styled.div`
  animation: ${rotation} 1s linear infinite;
  transform: translateZ(0);
  border-top: .083em solid ${violet};
  border-right: .083em solid ${violet};
  border-bottom: .083em solid ${violet};
  border-left: .166em solid ${pink};
  background: transparent;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  align-self: center;
`
















