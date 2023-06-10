import React from "react";
import ReactDOM from 'react-dom';
import './footer.css'
export  default function footer(){
    return(
        <div>
       <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Microsoft inovations club</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">our motive</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Quick shortcuts</h4>
                        <ul>
                            <li><a href="#">Login/Signup</a></li>
                            <li><a href="#">submit item</a></li>
                            <li><a href="#">collect item</a></li>
                            <li><a href="#">Categories</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>General</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">project contributors</a></li>
                            <li><a href="#">support us</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>  
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>          
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4></h4>
                        <ul>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4></h4>
                        <ul>
                            <li><a href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer> 
    </div>
    )
}