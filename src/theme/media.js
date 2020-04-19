import { css }  from "styled-components"

const sizes = {
	phone: 390,
	desktop: 768,
	big: 1280
}

export const media = Object.keys(sizes).reduce(
	(acc, size) => {
		console.log("acc", acc)
		console.log("sizes", sizes)
		console.log("size", size)
		console.log("sizes[size]", sizes[size])
		return {
			...acc,
			[size]: function(...args){
				console.log("args", args)
				console.log("css args", css(...args))
				return css`
					@media(
						max-width: ${sizes[size]}px;
						)
					 {
						${css(...args)}
				}
				`
			}
		}
	}, {})

// function phone(...args){
// 	return css`
// 		@media(max-width: ${sizes.phone}px) {
// 			${css(...args)}
// 		}
// 	`;
// }

// export  const media = {
// 	phone, 
// 	tablet,
// 	desktop
// }