import React from 'react'
import './Footer.scss'
export default function Footer() {
    return (
        <div id="footer" >
            <div className="contact_row">
                <strong>
                    Telephone
                </strong>
                <p> 51408380 </p>
            </div>
            <div className="contact_row">
                <strong>
                    Email
                </strong>
                <p> azzarroukanis@gmail.com </p>
            </div>
            <div className="contact_row">
               <p>Social Network</p> 
               <div className="social">
               <a href="https://www.facebook.com/anis.zarrouk.73?ref=bookmarks" target="_blank">
               <i className="fa fa-facebook"></i>
               </a>
               <a href="https://twitter.com/cabist4ever" target="_blank">
               <i className="fa fa-twitter"></i>
               </a>
               <a href="https://www.linkedin.com/in/anis-zarrouk-9750a599/" target="_blank">
               <i className="fa fa-linkedin"></i>
               </a>
               </div>
             
            </div>
        </div>
    )
}
