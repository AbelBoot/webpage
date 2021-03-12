import React, {useState, useEffect} from "react"

export const useSize = () => {

   const innerSize = [window.innerWidth, window.innerHeight]
   
   const [ winSize, setWinSize ] = useState([innerSize])
   useEffect(() => {
   	  const observeWinSize = () => {
        setWinSize(window.innerWidth, window.innerHeight)
   	  }
      window.addEventListener("resize", observeWinSize)
   }, [])
   return winSize
}