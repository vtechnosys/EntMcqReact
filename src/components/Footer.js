import React from "react";

function Footer(){
    return(
<React.Fragment>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-6">
                    <h5>Our Courses</h5>
                    <ul>
                        <li><a href="#">Otology</a></li>
                        <li><a href="#">Head and Neck</a></li>
                        <li><a href="#">Rhinology and Facial Plastics</a></li>
                        <li><a href="#">Paediatric ENT</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 col-6 text-start text-lg-center">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-sm-4 col-12 text-start text-lg-end">
                    <h5>Get In Touch</h5>
                    <ul>
                        <li><a href="#"><i class="bi bi-telephone"></i>(000) 0000 0000</a></li>
                        <li><a href="#"><i class="bi bi-geo-alt"></i>4517 UK - 37</a></li>
                        <li><a href="#"><i class="bi bi-envelope"></i>info@demo.com</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <div id="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-auto">
                    Copyright 2022. All Right Reserved
                </div>
                <div class="col-sm-6 text-end col">
                    <a href="#"><i class="bi bi-facebook"></i></a>
                    <a href="#"><i class="bi bi-instagram"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="#"><i class="bi bi-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
    )
}

export default Footer;