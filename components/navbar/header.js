import React from 'react';

import Image from 'next/image';

function header() {
  return (
    <div>
        <div>
     <ul>
        <li> <Image src="/tradeindia/logo.png" alt="section1" /></li>
       <li><a href="#"  className="post-r ">Post Buy Requirements</a></li>
       <li><a href="#news">News</a></li>
       <li className="dropdown">
         <a href="#" className="dropbtn">For Buyers</a>
         <div className="dropdown-content">
           <a href="#">Post Buy Requirement</a>
           <a href="#">Subscribe To Sell Trade Alerts</a>
           <a href="#">Search Suppliers</a>
         </div>
       </li>
       <li className="dropdown">
         <a href="#" className="dropbtn">For Supplier</a>
         <div className="dropdown-content">
           <a href="#">Display New Products</a>
           <a href="#">Search Buy Trade Leads</a>
           <a href="#">Subscribe To Buy Trade Alerts</a>
           <a href="#">TI lending </a>
           <a href="#">TI PayTI Logistics</a>
           <a href="#">Export bill discounting</a>
         </div>
       </li>
       <li className="dropdown">
         <a href="#" className="dropbtn">Need Help</a>
         <div className="dropdown-content">
           <a href="#">Call Us: +91-11- 4336 4336</a>
           <a href="#">Send Feedback</a>
           <a href="#">Contact Us</a>
         </div>
       </li>
       <li><button className="top-button "><a href="#">Sign in</a>|<a href="#">Join Free </a></button></li>
     </ul>
     </div>
    </div>
  )
}

export default header