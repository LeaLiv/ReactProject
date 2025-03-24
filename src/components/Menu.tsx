import { NavLink } from "react-router-dom";

export const Menu = () => {
    return <div>
    <NavLink to="/"> Home</NavLink><br/>
    {/* <NavLink to="/user"> User</NavLink><br/> */}
    <NavLink to="/producer"> Producer</NavLink><br/>
    </div>

}