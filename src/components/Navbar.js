import { Link } from "react-router-dom";
import logo from './../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return ( 
        <div>
            <header className = "header-main container-1440-vw">
                <nav className="header-absolute navbar navbar-default navbar-expand-lg container-1440-vw">
	                <Link className="navbar-brand" to="/"><img alt="" src={logo} /></Link>
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
	                    <span className="navbar-toggler-icon">
	  	                    {/* <i className="fas fa-bars"></i> */}
                              <FontAwesomeIcon icon={faBars} />
	                    </span>
	                </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">How it Works</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Solutions</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Why Us?</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Pricing</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Blog</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/">Help & Advice</Link>
                            </li>
                        </ul>
                        <Link className="nav-link text-white" to="/">Sign In</Link>
                        <button className="text-white btn-head">Start Free Trial</button>
                    </div>
                </nav>
            </header>

        </div>
     );
}
 
export default Navbar;