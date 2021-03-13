import styled  from "styled-components"
import { css }  from "styled-components"
import { pink, violet } from "./variables"

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;

`
  // ${({burger}) => !burger && css`
  //   box-shadow: none;
  // `};
  //box-shadow: 0px 4px 15px 0px ${pink};
export const HamburgerContainer = styled.div`

  display:flex;
  justify-content: center; 
  width: 100%;
  background: transparent;
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `};
  flex-wrap: wrap;
  flex-basis: 100%;
  align-items: center;
  
  transform: translateX(0);

  
`
export const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${({burger}) => burger && css`
    display: none;
  `};
`

//transform: translateX(200%);

export const HeaderContainer = styled.div`

    display:flex;
  justify-content: flex-end; 
  width: 100%;
  background: transparent;
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `};
  align-items: center;
  box-shadow: 0px 4px 15px 0px ${pink};

`

export const WCContainer = styled.div`


`
//this flex wrap allows for horizontal tabs
// (or no)
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  ${(props) => props.flexWrap && `
     flex-wrap: ${props.flexWrap};
  `};
  
`

export const PDContainer = styled.div`

`

export const PCoContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const PCoContainerSub1 = styled.div`
    

`

export const PCoContainerSub2 = styled.div`
    

`



export const PCContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
`

export const ProjectChemistryContainerSub1 = styled.div`
 flex-direction: column;
flex-basis: 100%;
  
`


export const ProjectChemistryContainerSub2 = styled.div`
  display: flex;
  
`

export const ProjectChemistryContainerSub3 = styled.div`
  
  
`

export const ProjectChemDivSub3_Container = styled.div`
  display:flex;
  flex-wrap: wrap;
  
`




export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 1em 1em 1em;
`


export const Relative = styled.div`
  position: relative;
  padding: .5em;

`

export const Flex = styled.div`
  display: flex;
  width: 100%;
  ${({justify}) => justify && css`
    justify-content: ${justify};
  `};
  ${({column}) => column && css`
    flex-direction: ${column};
  `};
  ${({alignItems}) => alignItems && css`
    align-items: ${alignItems};
  `};

`

// export default Divv = styled.div`
// ${({marginBottom}) => marginBottom && css`
//   margin-bottom: ${marginBottom};
//   `}
// ` and then inherith the others with that
//.styled(Divv)

