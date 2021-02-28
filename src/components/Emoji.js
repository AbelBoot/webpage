import React from "react"

export const Emoji = (props) => {
	return (
        <span
          role="img"
          aria-label={props.label}
        >{props.symbol}
        </ span>
		)
}