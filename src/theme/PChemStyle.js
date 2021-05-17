import styled  from "styled-components"

//top block style Chemistry
export const PCDIVCONT = styled.div`
  	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	padding-bottom: 3vw;
`
export const PCDIV1_1 = styled.div`
	flex-basis: 100%;
	padding-right: .5em;
`
export const PCDIV1_2 = styled.div`
  	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`
export const PCDIV1_2_00 = styled.div`
    display: flex;
	flex-direction: row; 
	flex-wrap: wrap; 
`
export const PCDIV1_2_01 = styled.div`  
	
`
export const PCDIV1_2_02 = styled.div`   
`
export const PCDIV1_2_03 = styled.div`
    display: flex;
	flex-direction: row; 
`

//other blocks, 3 tabs
export const PCDIV1_2_1 = styled.div`
`
export const PCDIV1_2_2 = styled.div`
    align-self: center;
`
export const PCDIV1_2_3 = styled.div`  
`
//text between chem tabs and citations
//first is common, then depends if columns
// or no
export const PCDIVInt1 = styled.div`
  	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`


// check on the padding to play with the columns

export const PCDIVVERT_1 = styled.div`  
max-width: 50%;
padding-right: ${props => props.paddingRight}vw;
padding-left: ${props => props.paddingLeft}vw;
`
export const PCDIVVERT_2 = styled.div`
max-width: 50%;
`
export const PCDIVVERT_0_Sm = styled.div`  
display: flex;
flex-wrap: wrap;
flex-direction: row-reverse;
`
export const PCDIVVERT_1_Sm = styled.div`  
flex-basis: 100%;
//min-height: 50vh;
min-height: ${props => props.smallHeight}vh;
padding-right: ${props => props.paddingRight}vw;
padding-left: ${props => props.paddingLeft}vw;

`
export const PCDIVVERT_2_Sm = styled.div`
width: 100%;
`

//check if adding this increase 
//image on movile
export const PCDIVHORIZ_1 = styled.div`	
width: 100%;
min-height: ${props => props.smallHeight}vh;
`
export const PCDIVHORIZ_2 = styled.div`  
`

// below style for the citations
//check if wrap is messing up 
export const PCDIVQ = styled.div`
  	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	min-width: 100%;
	padding-top: 2vh;
`
export const PCDIVQ_1 = styled.div`  
`
export const PCDIVQ_2 = styled.div` 
align-self: flex-end;
`
export const PCDIVQ_3 = styled.div` 
align-self: flex-end;
`

