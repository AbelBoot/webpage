import styled, { createGlobalStyle, keyframes } from "styled-components"

export const GlobalStyle = createGlobalStyle`
	h2, h3 {
	color: black};
	body {
    font-family: 'Crimson Text';
    font-size: 1.2em;

  }
`

//'Crimson Text';
// const reactAnimation = keyframes`
// 	from { transform: rotate(0deg); }
//   	to { transform: rotate(360deg); }
// `

// export const BackgroundImageReact = styled.div`
// 	width: 15vw;
// 	height: 15vh;
// 	border: transparent;
// 	background-image: url("./reactGifLogo.svg");
// 	background-repeat: no-repeat;
// 	animation: ${reactAnimation} infinite 20s linear;
// `
// export const Divv = styled.div`
// max-width: 50%;
// `
//
// export const Image = styled.div`
// 	bottom: ${props => props.bottom}vw;
// 	right: ${props => props.right}vw;
//     max-width: ${props => props.maxWidth}%;
//     height: ${props => props.height}vw; 
// 	background-image: url(${props => props.img}.png);
// 	background-size: contain;
// 	background-repeat: no-repeat;

// `
// export const Image = styled.img.attrs(props => ({
//   src: `${props.img}.png`,// || Myimg,
// }))`
// 	bottom: ${props => props.bottom}vw;
// 	right: ${props => props.right}vw;
//     max-width: ${props => props.maxWidth}%;
//     height: ${props => props.height}vw; 
	
// 	background-size: contain;
// 	background-repeat: no-repeat;

// `

//drone drawing, not to put
// export const ImageJpg = styled.div`
// 	bottom: ${props => props.bottom}vw;
// 	right: ${props => props.right}vw;
//     max-width: ${props => props.maxWidth}%;
//     height: ${props => props.height}vw; 
// 	background-image: url(${props => props.img}.jpg);
// 	background-size: contain;
// 	background-repeat: no-repeat;
// 	z-index: -99;
// `
