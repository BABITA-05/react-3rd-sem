import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import StateExample from './day6/StateExample'
import Home from './home'
import App from './App'
import Forgotpw from './forgotPw'
import PageNotFound from './PageNotFound'


/*
For Route:
1.BrowserRouter
2.Routes
3.Route(Path, element)
4.Outllet
5.Link (to)

*/
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} >
        <Route index element={<Home/>} />
        <Route path='login' element={<StateExample/>} />
        <Route path='ForgotPw' element={<Forgotpw/>}  />
        <Route path='PageNotFound' element={<PageNotFound/>} ></Route>
        


      </Route>
    </Routes>
    </BrowserRouter>

    
  </StrictMode>,
)

