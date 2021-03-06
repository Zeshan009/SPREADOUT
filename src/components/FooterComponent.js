import React from 'react';
import { Link } from 'react-router-dom';
function Footer(props) {
    return(
        <div className = "footer">
            <div className = "container">
                <div className ="row justify-content-center">
                    <div className = "col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className = "list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About Us</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/contactus'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className = "col-7 col-sm-5">
                        <h5>Our Address</h5>
                        <address>
                            Chack Number 91 GB Jagatpur <br />
                            Tehsil & district Faisalabad <br />
                            Punjab, Pakistan. <br />
                            <i className = "fa fa-phone fa-lg"></i>: +9234 5237 8798 <br/>
                            <i className = "fa fa-fax fa-lg"></i>: +9230 6754 1232 <br/>
                            <i className = "fa fa-envelope fa-lg"></i>:<a href = "mailto:zeshanbajwa@spreadout.com">zeshanbajwa@spreadout.com</a>
                        </address>
                    </div>
                    <div className = "col-12 col-sm-4 align-self-center">
                        <div className = "text-center">
                            <a className = "btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className = "btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className = "btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className = "btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className = "btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className = "btn btn-social-icon" href="mailto:"><i className="fa fa-envelop-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className = "col-center">
                        <p>@ copyright 2018 SpreadOut</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;