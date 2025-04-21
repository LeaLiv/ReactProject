import { NavLink } from "react-router-dom";

export const Menu = () => {
    return <div>
    <NavLink to="/"> כניסת משתמש</NavLink><br/>
    {/* <NavLink to="/user"> User</NavLink><br/> */}
    <NavLink to="/producer"> כניסת מפיק</NavLink><br/>
    </div>

}