import React, { useState } from "react";
import { Envelope, Facebook, Instagram, Mailbox, Telephone, Twitter } from "react-bootstrap-icons";

function Footer() {

    return (
        <div>
            <div className="row bg-light">

                <div className="col-4">
                    <h3>Socials</h3>
                    <p><a href="#0" className="text-decoration-none link-dark"><Twitter /> Twitter</a></p>
                    <p><a href="#0" className="text-decoration-none link-dark"><Instagram /> Instagram</a></p>
                    <p><a href="#0" className="text-decoration-none link-dark"><Facebook /> Facebook</a></p>
                </div>

                <div className="col-4">
                    <h3 className="text-center">Contact us</h3>
                    <p className="text-center"><Telephone /> +254712345678</p>
                    <p className="text-center"><Envelope /> carrentalservice@gmail.com</p>
                </div>

                <div className="col-4">
                    <h3 className="text-end">Company</h3>
                    <p className="text-end"><a href="#0" className="text-end text-decoration-none link-dark"> About Us</a></p>
                    <p className="text-end"><a href="#0" className="text-decoration-none link-dark"> Privacy Policy</a></p>
                    <p className="text-end"><a href="#0" className="text-decoration-none link-dark"> Terms of Use</a></p>
                    <p className="text-end"><a href="#0" className="text-decoration-none link-dark"> Code of Conduct</a></p>
                </div>

                <div className="d-flex justify-content-center">
                    <p>Copyright &copy; <script>document.write(new Date().getFullYear())</script> Car Rental Service</p>
                </div>

            </div>
        </div>
    )
}

export default Footer;