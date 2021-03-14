import styled  from "styled-components"
import { pink, violet } from "./variables"
import { Link } from "react-router-dom"

export const HeaderLink = styled(Link)`
  color: ${violet};
  &:hover {
    color: black;
  }  
  font-weight: bold;
  font-size: 1.3em;
  margin-right: 1em;
`

export const HeaderDiv = styled.div`
  box-shadow: 0px 4px 15px 0px ${pink};
`

// export const BigDiv = styled.div`
// `

export const HeadDiv0 = styled.div`
  background: transparent;
  margin: .4em;
  margin-right: auto;
  font-weight: 700;
  font-size: 1.5em;
`

export const HeadDiv1 = styled.div`
  background: transparent;
  margin: .4em;
  margin-bottom: .7em;
 ${(props) => props.marginBottom && `
    margin-bottom: ${props.marginBottom}em;
    `
  }
`

export const HeadDiv2 = styled.div`
  background: transparent;
  margin: .4em;
`

export const HeadDivLinkHamburger = styled(Link)`
  display: flex;
  justify-content: center;
  min-width: 100%;
  text-decoration: none;
`

export const HeadDivIconHamburger = styled.div`
display: flex;
 ${(props) => props.flexBasis && `
    flex-basis: ${props.flexBasis}%;
    `
  };
justify-content: flex-end;

`

export const HeaderLinkHamburger = styled(Link)`
  color: ${violet};
  &:hover {
    color: black;
  }  
  font-weight: bold;
  font-size: 1.3em;
  flex-basis: 40%;
`

export const HeaderDivHamburger = styled.div`
  box-shadow: 0px 4px 15px 0px ${pink};
`

// export const BigDivHamburger = styled.div`
// `

// export const HeadDiv0Hamburger = styled.div`
//   background: transparent;
//   margin: .4em;
//   margin-right: auto;
//   font-weight: 700;
//   font-size: 1.5em;
// `
//margin: .4em;
export const HeadDiv1Hamburger = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
 ${(props) => props.marginBottom && `
    margin-bottom: ${props.marginBottom}em;
    `
  }
`

export const HeadDivEmojiHamburger = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
`

export const HeadDiv2Hamburger = styled.div`
  background: transparent;
  margin: .4em;
`
