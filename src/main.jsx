import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Home, { Second } from './home.jsx'
import Nav from './navbar.jsx'
import PropsFirst from './propsScreen/propsFirst.jsx'
import PropsSecond from './propsScreen/propsSecond.jsx'
import Profile from './propsScreen/profile.jsx'
import StateExample from './day6/StateExample.jsx'
import ConditionalRendering from './day6/ConditionalRendering.jsx'
let myObj={
  title:"abc",
  test:"my test props",
  count:40
}
let userProfile={
  name:"mmm",
  address:"aaad",
  contact:4243423
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <StateExample></StateExample>
    <ConditionalRendering></ConditionalRendering>
    <PropsFirst {...myObj}/>
    <PropsSecond/>
    <Profile {...userProfile} onClickGoto={()=>{console.log("from main clicked")}}/>
    <App />
    {/* direct link  */}
    <Home/>
    <Second />
  </StrictMode>,
)
//never call component as like normal function 
//Home()
