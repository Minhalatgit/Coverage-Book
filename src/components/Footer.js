import { Link } from "react-router-dom";
import { Logo } from "../assets";
import {useState} from 'react'

const Footer = () => {
  const [subscribeEmail, setSubscribeEmail] = useState("");

  return (
    <>
      <section className="footer">
        <div className="container-1200">
          <div className="subscribe-content">
            <span>Subscribe</span>
            <p>TO OUR NEWSLETTER</p>
          </div>
          <div className="input-with-btn">
            <input
              type="Email"
              name=""
              placeholder="Email"
              value={subscribeEmail}
              onChange={(e) => setSubscribeEmail(e.target.value)}
            />
            <button onClick={()=>console.log(subscribeEmail)}>Subscribe</button>
          </div>
          <div className="straight-line">
            <a href="#top">
            <span className="fa fa-chevron-up fa-fw"></span>
              {/* <span>
                <FontAwesomeIcon icon={faChevronUp} />
              </span> */}
            </a>
          </div>
          <div className="icon-social-logo">
            <div className="logo-footer">
              <img alt="" src={Logo} />
            </div>
            <div className="social-icons">
              <Link to="#">
                <span className="fab fa-facebook"></span>
              </Link>
              <Link to="#">
                <span className="fab fa-instagram"></span>
              </Link>
              <Link to="#">
                <span className="fab fa-twitter"></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
