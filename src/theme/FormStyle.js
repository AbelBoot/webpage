import styled  from "styled-components"
import { violet } from "./variables"

export const BigDivForm = styled.div`
  width: 100%;
  outline: 0
`
//background-color: ${lightPink};
//margin: 2% auto;
export const DivForm = styled.div`
  flex: 1;
  order: 1;
  margin-right: 2em;

  & input {
    width: 100%;
    margin-bottom: 1em; 
    padding-top: 0.2em;
    padding-left: 0.5em;
    padding-bottom: 0;
    
    border-width: 0 0 .5em;
    border-radius: .1em;
    outline: 0;
    font-family: 'Crimson Text';
    font-weight: bold;
  }
  & label {
    font-weight: bold;
  }

`

export const DivFormMess = styled.div`
  display: flex;
  flex-direction: column;

  order: 2;
  & input {

    flex: 1;
    padding-top: 0.2em;
    padding-left: 0.5em;
    padding-bottom: 0;
    border-width: 0 0 .5em;
    border-radius: .1em;
    outline: 0;
  }
  & label {
    font-weight: bold;
  }
  & textarea {
        flex: 1;
    padding-top: .2em;
    padding-left: 0.5em;
    padding-bottom: 0;
    border-width: 0 0 .5em;
    border-radius: .1em;
    outline: 0;
    font-family: 'Crimson Text';
    font-weight: bold;
  }
  
`
//min-width: 18em;

export const InputForm = styled.input` 

`
export const TextAreaForm = styled.textarea` 
`

export const LabelForm = styled.label`
margin-bottom: .2em;
  
`

export const ButtonForm = styled.button`
    align-self: flex-end;
    min-width: 100%;
    height: 2em;
    margin-bottom: .2em;  
    margin-top: 2em;  
    margin-left: 2.5em;
    padding: 1em;
    padding-right: 1.5em;
    padding-bottom: 2em;
    border-radius: 0.5em;

    font-weight: bold;
    font-size: .8em;

    color: white;
    background-color: ${violet};
`


export const PForm = styled.p`
  color: ${violet};
  font-weight: bold;
`