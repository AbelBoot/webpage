import React from 'react'
import ReactDOM from 'react-dom'
import LocaleProvider from "./custom/LocaleContext"
import { HashRouter, Route } from "react-router-dom"
import './index.css'
import Contact from './Contact'
import { Container } from "./theme/Containers"
import { Projects } from './Projects'
import { Header } from "./components/Header"
import { GlobalStyle } from "./theme/GlobalStyle"

ReactDOM.render(
  <React.StrictMode>
  	<GlobalStyle />
  	<HashRouter>
  	<LocaleProvider>
    <Header />
    <Container>
		<Route exact path="/" component={Projects}></Route>
    <Route exact path="/contact" component={Contact}></Route>
    </Container>
	  </LocaleProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// const sizes = {
//   phone: 390,
//   desktop: 768,
//   big: 1280
// }
