import React from "react"
import styled from "styled-components"


export const BigDiv = styled.button`
	display:flex;
 	justify-content: flex-end; 
  	width: 100%;
  	background: transparent;
  	border-radius: 3px;
  	border: .5px solid black;
 `

 export const Div = styled.button`
	background: transparent;
  	border-radius: 3px;
  	border: .5px solid black;
 `

 export const Span = styled.button`
	background: transparent;
  	border-radius: 3px;
  	border: .5px solid green;
 `

export const OlTabs = styled.ol`
	  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
`

export const ListTab = styled.li`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`

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