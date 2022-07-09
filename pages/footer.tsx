import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';

import { useGetCategory } from '../networkAPI/queries';
import styles from '../styles/Merchant/newfooter.module.scss';

const NewFooter: NextPage = () => {
  const data2 = useGetCategory();
  const category_data = data2.data;

  return (
<div>
<div className={styles.footerBox}>sdddd</div>
 

<div className={styles.footerBox}>
  <div  className={styles.footerBoxSection}>
<div className="row">
      <div className="col-md-3">
      <h3>Need help?</h3>
      <p>elaundry support id available everyday</p>
        </div>
        <div className="col-md-3">
        <h3>Get in Touch</h3>
     <p>info@elaundr.co.in</p>
        </div>
        
        <div className="col-md-6">
       
      
     <h3>Office Address</h3>
    <p>ADDRESS Office-1: E-Laundry A Product of OMRA Solutions Office No: 103 & 105, D-20 Sector 63, Noida (UP)</p>

    <p>Office-2: E-Laundry A Product of OMRA Solutions F32, First Floor, Cosmos Square , Rustomjee Global City, Virar West , Maharashtra 401303</p>
       
    </div>
           
    </div>
	<div className="container">
	<div className="row">
		<div className="col-md-3">
    <div className={styles.footer1}>
		<Image
              data-lazyloaded="1"
              src="/omratrade/el.png"
              height={50}
              width={60}
              alt="Logo Image"
              className={styles.imageLogo}
            />
			<p>
				E-Laundry “A Product of Omra Solutions.” The Perfect fit for any kind of Laundry and Dry-Clean Business.
			</p>
      <h3>Follow us on</h3>
			<ul>
				<li>
					<a href="https://www.facebook.com/elaundrysoftware/">
					     <img src="/wp-content/uploads/2022/06/facebook-128.png"/>
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/company/e-laundry">
						<img src="/wp-content/uploads/2022/06/MicrosoftTeams-image-3-1-copy.png"/>
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/laundry_software/?utm_medium=copy_link">
					    <img src="/wp-content/uploads/2022/06/74488-instagram-icons-media-medtempnow-computer-social-logo.png"/>
					</a>
				</li>
			</ul>
			
		</div>
			</div>
		<div className="col-md-3">
    <div className={styles.footer2}>
				<h2>
					Services
				</h2>
				<ul>
					<li>
					   <a href="">Single store</a>
					</li>
					<li>
					   <a href="">Multi-Store</a>
					</li>
					<li>
					   <a href="">Institutional Business</a>
					</li>
					<li>
					   <a href="">Customized Solution</a>
					</li>
          <li>
					   <a href="">Customer mobile application</a>
					</li>
          <li>
					   <a href="">Website Development</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="col-md-3">
            <div className={styles.footer2}>
				<h2>
					Customer Care
				</h2>
				<ul>
					<li>
					   <a href="/contact-us/">Contact Us</a>
					</li>
					<li>
					   <a href="/about-us/">About Us</a>
					</li>
					<li>
					   <a href="/support-and-faqs/">Support And FAQ’s</a>
					</li>
					<li>
					   <a href="/refund-policy/">Refund Policy</a>
					</li>
					<li>
					   <a href="/return-policy/">Return Policy</a>
					</li>
					<li>
					   <a href="privacy-policy/">Privacy Policy</a>
					</li>
						<li>
					   <a href="/free-trial/">Book Your Demo</a>
					</li>
				</ul>
			</div>
		</div>
		<div className="col-md-3">
		<div className={styles.footer2}>
				<h2>
					Business Type
				</h2>
				<ul>
					<li>
					   <a href="/contact-us/">Dry Cleaners</a>
					</li>
					<li>
					   <a href="/about-us/">Laundromats</a>
					</li>
					<li>
					   <a href="/support-and-faqs/">Shoe Cleaning</a>
					</li>
					<li>
					   <a href="/refund-policy/">Refund Policy</a>
					</li>
				
				</ul>
			</div>
		</div>
</div>

    </div>
    <hr /> 
	 <div className="row">
			<div className="col-md-12 ">
				<div className={styles.finalfooter}>
					<h3>
						Elaundry © 2022. All rights reserved
					</h3>
				</div>
			</div>
		</div>
</div>
</div>
</div>
  );
};

export default NewFooter;
