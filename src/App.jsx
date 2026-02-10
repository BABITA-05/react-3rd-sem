import { Link, Links, Outlet } from "react-router"
import "./App.css"

let App = ()=>{
  return(
    <div>
      {/* navbar */}
      <div className="navbar" >

        <div>Logo</div>
        <div className="menus" >
          <h4>
            <Link to={"/"} >Home</Link>
            
          </h4>

          <h4>
            <Link to={"/login"} >Login</Link>
            
          </h4>
          <h4>
            <Link to={"/forgotpw"} >Forget</Link>
            
          </h4>
        </div>
        

      </div>
      
      <Outlet/>
      <h2>Footer here...</h2>
    </div>
  )
}
export default App