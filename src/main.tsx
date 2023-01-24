import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import LoginHome from './Home/Componentes Home/HeaderHome/LoginUser'

import Home from './Home/Home'
import Rotas from './rotas'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>   
    <Rotas/>
  </React.StrictMode>,
)
