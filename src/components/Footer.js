import { Link } from 'react-router-dom';
import logo_white from '../assets/logo-white.png'

const Footer = () => {
    return ( 
        <div>
            <footer>
                <div className="container-footer pdbt-80">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="col-footer-1">
                                <img alt="" src={logo_white}/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                <div>
                                    <span className="face-hov fab fa-facebook-f fa-fw"></span>
                                    <span className="insta-hov fab fa-instagram fa-fw"></span>
                                    <span className="twit-hov fab fa-twitter fa-fw"></span>
                                    <span className="pint-hov fab fa-pinterest-p fa-fw"></span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-mine-small-1 ml-auto">
                            <div className="col-footer-2">
                                <h4>Product</h4>
                                <ul className="hover-links">
                                    <li>
                                        <Link to="/">What we do</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Data we get for you</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Why us?</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Pricing</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Charities</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-mine-small-2">
                            <div className="col-footer-3">
                                <h4>Support</h4>
                                <ul className="hover-links">
                                    <li>
                                        <Link to="/">Help & FAQs</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Guides & Tutorials</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Status</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-4 col-mine-small-3 mr-auto">
                            <div className="col-footer-4">
                                <h4>Resources</h4>
                                <ul className="hover-links">
                                    <li>
                                        <Link to="/">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Podcast</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Newsletter</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Link Extractor</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;