import tab_1 from '../assets/tab-1.png'
import circle_dark from '../assets/circle-dark.png'
import circle_light from '../assets/circle-light.png'
import triangle from '../assets/triangle.png'
import triangle_green from '../assets/triangle-green.png'
import tab_2 from '../assets/tab-2.png'
import laptop_3 from '../assets/laptop-3.png'
import tab_4 from '../assets/tab-4.png'
import test_1 from '../assets/test-1.png'
import test_2 from '../assets/test-2.png'
import laptop_last from '../assets/laptop-last.png'

const Home = () => {
    return ( 
        <div>
        {/* Section 1 */}
            <section className="section-1 bg-image-sec-1">
                <div className="container-1440-vw">
                    <div className="row pdbt rev-mob-col">
                        <div className="col-lg-6 col-md-6 my-auto pos-relative">
                            <h1 className="font-weight-bold text-uppercase h1-sec1">Make Coverage reports, faster</h1>
                            <p className="p-vw w-75 margin-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                            <div className="input-btn">
                                <input type="text" placeholder="Your Work Email" />
                                <button className="input-btn-inner">Try in Under 5 Mins</button> 
                            </div>
                            <span className="green _1"></span>
				            <span className="purple _2"></span>
				            <span className="green _3"></span>
                        </div>
                        <div className="col-lg-6 col-md-6 my-auto pos-relative img-small">
                            <img className="tab-1 margin-small" src={tab_1}/>
                            <span><img src={circle_dark}/></span>
                            <span><img src={circle_light}/></span>
                            <span><img src={triangle}/></span>
                            <span><img src={triangle_green}/></span>
                        </div>
                    </div>
                </div>
            </section>

        {/* Section 2 */}
            <section className="section-2 bg-left-sec-2 pos-relative pdbt-80">
                <div className="container-1440">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 my-auto pos-relative">
                            <img className="margin-small" src={tab_2}/>
                        </div>
                        <div className="col-lg-6 col-md-6 my-auto pos-relative my-auto">
                            <h3 className="text-uppercase font-weight-bold">Take a look at an example report</h3>
                            <p className="margin-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                            <button className="btn-regular">View Example</button>
                            <span className="purple _2-1"></span>
                            <span className="green _2-2"></span>
                            <span className="green _2-3"></span>
                        </div>
                    </div>
                </div>
            </section>
        
        {/* Section 3 */}
            <section className="section-3 bg-left-sec-2 pos-relative pdbt-80 no-top">
                <div className="container-1440">
                    <div className="row rev-mob-col">
                        <div className="col-lg-6 col-md-6 my-auto pos-relative my-auto">
                            <h3 className="text-uppercase font-weight-bold">We turn your coverage links into a beautiful report.</h3>
                            <p className="margin-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                            <button className="btn-regular">Learn About How It Work</button>
                            <span className="purple _2-1"></span>
                            <span className="green _2-2"></span>
                            <span className="green _2-3"></span>
                        </div>
                        <div className="col-lg-6 col-md-6 my-auto pos-relative">
                            <img className="laptop margin-small" src={laptop_3}/>
                        </div>
                    </div>
                </div>
            </section>
        
        {/* Section 4 */}
            <section className="section-4 bg-left-sec-2 pos-relative pdbt-80 no-top">
                <div className="container-1440">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 my-auto pos-relative">
                            <img className="margin-small m-top" src={tab_4}/>
                        </div>
                        <div className="col-lg-6 col-md-6 my-auto pos-relative my-auto">
                            <h3 className="text-uppercase font-weight-bold">Trusted coverage metrics for your reports.</h3>
                            <p className="margin-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>
                            <button className="btn-regular">Learn About  Measuring PR</button>
                            <span className="purple _2-1"></span>
                            <span className="green _2-2"></span>
                            <span className="green _2-3"></span>
                        </div>
                    </div>
                </div>
            </section>
        
        {/* Section 5 */}
            <section className="section-5 bg-left-sec-2 pos-relative pdbt-80">
                <div className="container-1440">
                    <div className="row rev-col">

                        <div className="col-lg-6 pos-relative bg-image-test">
                            <span className="purple _test-2"></span>
                            <div className="testimonial">
                                <div className="test-said">
                                    <p>Coverage Master is one of our agency’s most used tools. It saves us so much time in demonstrating ROI for our clients by putting together something that looks great, can be shared instantly and offers metrics that others can’t. We couldn’t live without it!</p>
                                </div>
                                <div className="test-details">
                                    <div class="image-test">
                                        <img src={test_1}/>
                                    </div>
                                    <div className="test-name">
                                        <p>Michael Rodney</p>
                                        <span>Account Director, Fanclub PR</span>
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial">
                                <div className="test-said">
                                    <p>Coverage Master is one of our agency’s most used tools. It saves us so much time in demonstrating ROI for our clients by putting together something that looks great, can be shared instantly and offers metrics that others can’t. We couldn’t live without it!</p>
                                </div>
                                <div className="test-details">
                                    <div className="image-test">
                                        <img src={test_2}/>
                                    </div>
                                    <div className="test-name">
                                        <p>Jessica McCafferty Brennan</p>
                                        <span>Vice President, Janice McCafferty Communications</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-lg-6 pos-relative my-auto tesiomial-right">
                            <h3 className="text-uppercase font-weight-bold">Testimonial</h3>
                            <p>Here’s what some of our happy customers are saying about their experiences using We’ve been reducing reporting-induced headaches worldwide since 2014.</p>
                            <span className="green _test-1"></span>
                        </div>
                    </div>
                </div>
            </section>
        
        {/* Section 6 */}
            <section className="section-6 bg-left-sec-2 pos-relative pdbt-80">
                <div className="container-1440">
                    <div className="row rev-mob-col">
                        <div className="col-lg-6 col-md-6 pos-relative my-auto m-top">
                            <h3 className="text-uppercase font-weight-bold">Tired of reporting like it’s still 1999?</h3>
                            <p className="margin-vw">Take the pain out of PR reporting. Try Coverage master today.</p>
                            <div className="input-btn last-email-btn">
                                <input type="" name="" placeholder="Your Work Email"/>
                                <button className="input-btn-inner">Try in Under 5 Mins</button> 
                            </div>
                            <p>Free trial, no commitment, no credit card required.</p>
                            <span className="green _sec-6-1"></span>
                            <span className="purple _sec-6-2"></span>
                        </div>
                        <div className="col-lg-6 col-md-6 pos-relative index-minus">
                            <img className="last-laptop margin-small" src={laptop_last}/>
                        </div>
                    </div>
                </div>
            </section>

        </div>
     );
}
 
export default Home;