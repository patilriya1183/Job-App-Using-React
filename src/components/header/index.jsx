
import './style.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { FaHome, FaBriefcase, FaSignOutAlt  } from 'react-icons/fa';


const Header = () =>  {

    const onLogout = () => {

        Cookies.remove("myToken");

        navigate("/login");

    }

    return (

        <nav className="navbar">

            <Link to= "/" className='logoLink'> 
                
                <img src={logo} className='logoImg'/> 
            
            </Link>

            <ul className='navList'>

                <li className='li-item'> 
                    
                    <Link className='navItem li1' to="/"> 
                    
                        <span className="navText">Home</span>
                        <FaHome className="navIcon" />

                    </Link> 
                    
                </li>

                <li> 
                    
                    <Link className='navItem' to="/jobs">
                    
                        <span className="navText">Jobs</span>
                        <FaBriefcase className="navIcon" />

                    </Link> 
                    
                </li>

            </ul>

            <Link to="/" onClick={onLogout} className="btn logoutBtn">

                <span className="navText">Logout</span>
                <FaSignOutAlt className="navIcon" />

            </Link>

        </nav>

    )
}

export default Header;