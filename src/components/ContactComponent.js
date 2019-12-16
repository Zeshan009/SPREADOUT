import React from 'react'


function Contact(props) {
    return (
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                    <h5>Our Address</h5>
                    <address>
                        Check Number 91 GB Jagatpur <br />
                        Tehsil & District Faisalabad <br />
                        Punjab, Pakistan <br />
                        <i className="fa fa-phone"></i>: +923 3452 6789 <br />
                        <i className="fa fa-fax"></i>: +923 0987 1123 <br />
                        <i className="fa fa-envelope"></i>: <a href="mailto: zeshanbajwa@spreadout.com">zeshanbajwa@spreadout.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel :+923 3452 6789"><i className="fa fa-phone"></i>Call</a>
                        <a role="button" className="btn btn-info" href="fax :+923 0987 1123"> <i className="fa fa-fax"></i>Fax</a>
                        <a role="button" className="btn btn-success" href="mailto: zeshanbajwa@spreadout.com"><i className="fa fa-envelope"></i>Email</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;