import styled  from "styled-components"
import { violet } from "./variables"

export const XXX = styled.div`
  display: flex;
  flex-wrap: wrap;
    ${({burger}) => burger && css`
    display: none;
    
    
  `};
  
`