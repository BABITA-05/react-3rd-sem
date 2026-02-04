import "./nambar.css"
import Profile from "./propsScreen/profile"
let Nav = () => {
    let onClickProfileMenu=(event)=>{
        console.log("profile menu clicked")
        console.log(event)
    }
    let onSearchInputChange=(event)=>{
        console.log(event.target.value)
        console.log(event.target)
        event.target.style.backgroundColor="red"
    }
    return (
        <div onChange={onSearchInputChange} className="navbar">
            <h2>Logo</h2>
            <Profile name="huh" address="huhi" contact={789879}
            onClickGoto={()=>{console.log("from navbar clicked")}}/>
            <div className="menus">
                <input placeholder="search anything"/>
            <h2 onClick={(event)=>{console.log("home clicked")
                console.log(event)
                event.target.style.backgroundColor="teal"
            }}>Home</h2>
            <h2 onClick={onClickProfileMenu}>Profile</h2>
            </div>
        </div>
    )
}
export default Nav