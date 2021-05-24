import styled  from "styled-components"


export const CONTACTDIV0 = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1em;
  padding-right: 1em;
  min-width: 100%;
  justify-content: space-between;
`
export const CONTACTDIV1 = styled.div`
  width: 40%;
  font-size: 1em;
  text-align: justify;
  margin-right: 2em;
  padding-top: 10vh;
`

export const CONTACTDIV2 = styled.div`
	width: 50%;
	max-height: 40%;
  padding-top: 1vh;
`

export const CONTACTDIV0_Sm = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const CONTACTDIV1_Sm = styled.div`
  flex-basis: 100%;
  font-size: 1em;
  text-align: justify;
`

export const CONTACTDIV2_Sm = styled.div`
  padding-top: 1vh;
  padding-bottom: 1.5vh;
`

export const CONTACTDIV3_00 = styled.div` 
	flex-basis: 100%;
	display:flex;
 	justify-content: center;
  align-items: flex-end; 
  padding-top: 3vh;
   ${(props) => props.flexWrap && `
    flex-wrap: ${props.flexWrap};
    `
  }
`
//margin-top: 12vh;
export const CONTACTDIV3_01 = styled.div` 
  margin: 10px
  
`
export const CONTACTDIV3_02 = styled.div` 
margin: 10px
`
export const CONTACTDIV3_03 = styled.div` 
margin: 10px
`
export const CONTACTDIV3_04 = styled.div` 
margin: 10px
`
export const CONTACTDIV3_05 = styled.div` 
margin: 10px
`
export const CONTACTDIV3_06 = styled.div` 
margin: 10px
`


