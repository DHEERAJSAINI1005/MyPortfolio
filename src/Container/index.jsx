import { Link } from "react-router-dom";
import logo from '../Components/Images/logosmall.png';
const tabs = [
  {
    title:"Home",
    link:""
  },
  {
    title:"About",
    link:""
  },
  {
    title:"Works",
    link:""
  },
  {
    title:"Projects",
    link:""
  },
  {
    title:"Services",
    link:""
  },
]
function NavBar({ handleTab }) {
  return (
  <div class='container'> 
      <div class="nav-bar"> 
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Works</li>
            <li>Projects</li>   
            <li>Services</li>   
          </ul>
      </div>
  </div>
  );
}

export default NavBar;
