import { useState } from "react";
import Slider from "react-slick";
import {
  DesignStar,
  CircleTransparent,
  Triangle,
  Tablet1,
  CircleGradient,
  ShareIcon,
  GradientBlueCircle,
  MobSec2,
  Laptop,
  AppleScreen,
  Test1,
  Test2,
  Test3,
  Test4,
  Test5,
  Test6,
  Test7,
} from "../assets";


const Home = () => {
  // images states
  const [sec1CoverImg, setsec1CoverImg] = useState(Tablet1);
  const [sec3MainImg, setSec3MainImg] = useState(MobSec2);
  const [sec4MainImg, setSec4MainImg] = useState(Laptop);
  const [sec5MainImg, setSec5MainImg] = useState(AppleScreen);

  // sec 2 states
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {/* section 1 */}
      <section className="section-1">
        <div className="design">
          <span className="design-star p-abs">
            <img alt="" src={DesignStar} />
          </span>
          <span className="design-circle p-abs">
            <img alt="" src={CircleTransparent} />
          </span>
          <span className="design-triangle p-abs">
            <img alt="" src={Triangle} />
          </span>
          <div className="container-1200">
            <div className="sec-1-text">
              <h1>
                Make <span className="font-weight font-curve"> Coverage</span>
                <br />
                <span className="font-weight"> reports, </span> faster
              </h1>
            </div>
            <div className="sec-1-img text-center">
              <img alt="" src={sec1CoverImg} />
            </div>
          </div>
          <span className="design-triangle _right p-abs">
            <img alt="" src={DesignStar} />
          </span>
          <span className="circle-gradient p-abs">
            <img alt="" src={CircleGradient} />
          </span>
        </div>
      </section>

      {/* section 2 */}
      <section className="section-2" id="form-fill">
        <span className="star _2"></span>
        <span className="gradient _2"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge">
                  Tired of <span className="blue-black">reporting</span> like
                  it’s still 1999?
                </h1>
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#form-fill" className="form-design">
                  Fill our form to start free trial
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto" id="form-fill">
              <div className="form">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name=""
                  placeholder="Name"
                  value={name}
                />
                <input
                  onChange={(e) => setPhoneNo(e.target.value)}
                  type="number"
                  name=""
                  placeholder="Phone No"
                  value={phoneNo}
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="Email"
                  name=""
                  placeholder="Email"
                  value={email}
                />
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  value={message}
                ></textarea>
                <div className="btn-form">
                  <button
                    className="btn-norm"
                    onClick={() => {
                      console.log(name, phoneNo, email, message);
                    }}
                  >
                    <span>
                      <img alt="" src={ShareIcon} />
                    </span>
                    <span>Send</span>
                  </button>
                </div>
              </div>
              <img alt="" className="circle-form" src={GradientBlueCircle} />
            </div>
          </div>
        </div>
        <span className="triangle _2"></span>
      </section>

      {/* section 3 */}
      <section className="section-3">
        <span className="gradient _3"></span>
        <span className="triangle _3"></span>
        <div className="container-1200">
          <div className="row col-rev-mob">
            <div className="col-lg-6 col-md-6 my-auto for-small-screen">
              <div className="sec-3-images">
                <img alt="" src={sec3MainImg} />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge">
                  Take a look at an{" "}
                  <span className="blue-black">example report</span>
                </h1>
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#form-fill" className="form-design">
                  Fill our form to start free trial
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="star _3"></span>
        <span className="circle _3"></span>
      </section>

      {/* section 4 */}
      <section className="section-4">
        <span className="triangle _4"></span>
        <span className="star _4"></span>
        <div className="container-1200">
          <div className="row">
            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge">
                  We turn your coverage links into a{" "}
                  <span className="blue-black">beautiful report.</span>
                </h1>
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#form-fill" className="form-design">
                  Fill our form to start free trial
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto for-small-screen-laptop">
              <div className="sec-4-images">
                <img alt="" src={sec4MainImg} />
              </div>
            </div>
          </div>
        </div>
        <span className="gradient _4"></span>
      </section>

      {/* section 5 */}
      <section className="section-5">
        <span className="triangle _5"></span>
        <span className="gradient _5"></span>
        <div className="container-1200">
          <div className="row col-rev-mob">
            <div className="col-lg-6 col-md-6 my-auto for-small-screen-laptop">
              <div className="sec-5-images">
                <img alt="" src={sec5MainImg} />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 my-auto">
              <div className="text-portion-1">
                <h1 className="heading-huge">
                  Trusted coverage{" "}
                  <span className="blue-black">metrics for your </span>reports.
                </h1>
                <p className="p-para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                  <br />
                  <br />
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#form-fill" className="form-design">
                  Fill our form to start free trial
                </a>
              </div>
            </div>
          </div>
        </div>
        <span className="star _4"></span>
      </section>

      {/* section 6 */}
      <section className="section-6">
        <div className="container-1200">
          <div className="testimages">
            {[Test1, Test2, Test3, Test4, Test5, Test6, Test7].map(
              (item, i) => {
                return (
                  <span key={i}>
                    <img alt="" src={item} />
                  </span>
                );
              }
            )}
          </div>

          <div>
            <h1 className="heading-huge text-center">
              What Our <span className="blue-black">Customer Say?</span>
            </h1>
          </div>

          <div className="testimonial-slider">
            <Slider {...settings}>
              {[1, 2, 3].map((item, i) => {
                return (
                  <div key={i} className="test-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.{" "}
                    </p>
                    <div className="clients-detail">
                      <h6>Fergus Douchebag</h6>
                      <span>Client</span>
                      <div className="ratings">
                        <span className="fa fa-star fill"></span>
                        <span className="fa fa-star fill"></span>
                        <span className="fa fa-star fill"></span>
                        <span className="fa fa-star fill"></span>
                        <span className="fa fa-star fill"></span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
