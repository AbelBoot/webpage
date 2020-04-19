import React, {useState, useEffect} from "react"
import { H1, SpinnerAnim } from "../theme/SmallComp"
import { VideoContainer, VC0, VC1, VC2 } from "../theme/PVideosStyle"

//https://youtu.be/9L_J1PTsyjw

export const Videos = () =>  {
const initVid = new Array(8)
	//const [youtubeVid, setYoutube] = useState(["9L_J1PTsyjw","GBtLSBxBL1E","WLR5BYZ_6fI","fh7zBRy9Lxs","6lnfdMdlQ4c","yOSGUsBReoQ","YpW8FQqp4EE","EyeQ3mdwRSQ"])
const [ytVidAPI, setYtAPi] = useState([])//initVid])
const [isLoading0, setSpinner0] = useState(true)

const url = `${process.env.REACT_APP_YOUTUBE_URL}&key=${process.env.REACT_APP_API_KEY}&playlistId=${process.env.REACT_APP_playlistId}&part=snippet&order=date&maxResults=8`
	useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        const vidId = resp.items//.snippet.resourceId.videoId
         console.log("againnnnn")
         console.log("vidId type0", vidId)
        let prom = Promise.resolve(vidId)
        console.log("prom", prom)
        Promise.all([prom]).then(
        	el => {
        	  console.log("ellll", el)
        setYtAPi(el)
        setSpinner0(false)
            }
        )
        	  
        setSpinner0(false)
         
        
      })
      .catch(err => console.log("err YT", err))
     console.log("ytVidAPI in effect", ytVidAPI)
	}, [])
	console.log("ytVidAPI.....", ytVidAPI[0])
		
const Spinner = (ind) => {
	return (
		
		<VC0>
		<VC1>
		<H1>{ind.ind + 1}</H1>
		</VC1>
        <VC2>
		<SpinnerAnim />
        </VC2>
        </VC0>
		
		)
}
const Vid = (vid) => {
	console.log("viddd", vid)
	return (
		
		<VC0>
		<VC1>
		<H1>{vid.ind + 1}</H1>
		</VC1>
		<VC2>
		{vid.vid}
		</VC2>
		</VC0>
		
    )
}

    
    let link
    //this is what actually shows, not the spinner
    //from the ternay operator!! why?
    let arrEmpt = [<Spinner />, <Spinner />, <Spinner />, <Spinner />, <Spinner />, <Spinner />, <Spinner />, <Spinner />]
    {ytVidAPI.map((el, ind) => {
    	console.log("typee", typeof el)
        for (let i = 0; i < 8; i++){
            let tempo = el[i]
            const vid = tempo.snippet.resourceId.videoId
            link = `https://www.youtube.com/embed/${vid}`
            arrEmpt[i] = <iframe type="text/html" width="300" height="175"
			 		  src={link}></iframe>  	
	    }
    })}
		return (
        arrEmpt.map((el, ind) => {	
	        return  arrEmpt[ind].type == "iframe" ? <Vid vid={arrEmpt[ind]} ind={ind}/>: <Spinner ind={ind}/>
        })
		)
}

