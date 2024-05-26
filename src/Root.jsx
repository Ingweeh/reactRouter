import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";

export default function Root(){
    return(<><div id="sidebar">
        <Link to="/about">&nbsp;About&nbsp; </Link>
        <Link to="/job">&nbsp; Job </Link>
        <Link to="/portfolio">&nbsp; Portfolio </Link>
        <Link to="/skill">&nbsp; Skill&nbsp;</Link>
        </div>
        <div id="detail">
            <br/>
            <Outlet/>
        </div>
        </>);
}