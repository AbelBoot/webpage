import styled  from "styled-components"

//top block style Chemistry
export const PCDivSubCont_1 = styled.div`
  	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
`
export const PCDivSub1_1 = styled.div`
    flex-basis: 100%;
`
export const PCDivSub1_2 = styled.div`
  	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`
export const PCDivSub1_2_00 = styled.div`
    display: flex;
	flex-direction: row;  
`
export const PCDivSub1_2_01 = styled.div`
    
`
export const PCDivSub1_2_02 = styled.div`
    
`
export const PCDivSub1_2_03 = styled.div`
    display: flex;
	flex-direction: row; 
`

//other blocks, 3 tabs

export const PCDivSub1_2_1 = styled.div`
`
export const PCDivSub1_2_2 = styled.div`
    align-self: center;
`
export const PCDivSub1_2_3 = styled.div`
    
`
//text between chem tabs and citations
//first is common, then depends if columns
// or no
export const PCDivSubInt1 = styled.div`
  	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`


// check on the padding to play with the columns
export const PCDivSubVert_1 = styled.div`  
max-width: 50%;
padding-right: ${props => props.paddingRight}vw;
padding-left: ${props => props.paddingLeft}vw;

`
export const PCDivSubVert_2 = styled.div`
max-width: 50%;
`

export const PCDivSubHoriz_1 = styled.div`	

`
export const PCDivSubHoriz_2 = styled.div`  
`


// below style for the citations
export const PCDivSubCite = styled.div`
  	display: flex;
	flex-direction: column;
	min-width: 100%;
	padding-top: 2vh;
`
export const PCDivSubCite_1 = styled.div`  

`
export const PCDivSubCite_2 = styled.div` 
align-self: flex-end;
`
export const PCDivSubCite_3 = styled.div` 
align-self: flex-end;
`


//probably useless, deete if nothing broken
// export const ProjectChemDiv15 = styled.div`

// `

// export const ProjectChemDiv16 = styled.div`
  
// `

// export const ProjectChemDiv4 = styled.div`

// `
