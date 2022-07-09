import 'react-multi-carousel/lib/styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import Carousels from 'react-multi-carousel';
import { Carousel } from 'react-responsive-carousel';

import UserLayout from '../components/User/Layout';
import {
  useGetCategory,
  usePublicProduct,
} from '../networkAPI/queries';
import styles from '../styles/Merchant/newfooter.module.scss';
// import styles from '../styles/Merchant/categoryproduct.module.scss';
// import styles from "../styles/Merchant/productcard.module.scss";
import styles1 from '../styles/Merchant/view.module.scss';

const HomePage: NextPage = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<string>("");
  const dropdownRef = useRef<any>("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const { data, status } = usePublicProduct();
  const data2 = useGetCategory();
  const category_data = data2.data;
  console.log(data2.data);
  console.log(data);
  //   const getProduct=useGetProductById("")
  //   console.log(getProduct)

  useEffect(() => {
    if (!isOpen) return;
    function handleOutsideClick(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelect("");
      }
    }
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },

      items: 5,
    },

    desktop: {
      breakpoint: { max: 3000, min: 1024 },

      items: 5,
    },

    tablet: {
      breakpoint: { max: 1024, min: 464 },

      items: 3,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },

      items: 1,
    },
  };

  return (
    <div className={styles.containerMain}>
      {/* <Header /> */}
      <Toaster position="bottom-center" />

      <UserLayout>
        <div className={styles.container}>
          <div className={styles.right}>
            <div>
              <Carousel>
                <div>
                  <Image
                    src="/omratrade/banner33.png"
                    className={styles.imagestyle}
                    width={1500}
                    height={600}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 1</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/banner44.png"
                    className={styles.imagestyle}
                    width={1500}
                    height={600}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/banner33.png"
                    className={styles.imagestyle}
                    width={1500}
                    height={600}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 3</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/banner44.png"
                    className={styles.imagestyle}
                    width={1500}
                    height={600}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 4</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/banner33.png"
                    width={1500}
                    height={600}
                    alt="image1"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        {/* <div
          className="div-flex-box"
          style={{ background: "white", marginTop: "300px" }}
        >
          <h1 className="gallery-heading">All Category</h1>

          <div className="product-flex-box">
            {category_data?.data.map((item3: any, index: any) => {
              console.log(item3);

              return (
                <div className="gallery2" key={index}>
                  <a href="#">
                    <Image
                      src={
                        item3.category_image[0]
                          ? item3.category_image[0]
                          : "/omratrade/tv.png"
                      }
                      width={250}
                      height={250}
                      alt="image1"
                    />
                  </a>

                  <div className="desc">{item3.category_name}</div>
                </div>
              );
            })}
          </div>
        </div> */}

        <div className="div-flex-box" style={{ background: "white",marginTop:"250px" }}>
          <h1 className="gallery-heading">Software </h1>

          <Carousels responsive={responsive} slidesToSlide={4}>
            {data?.data.map((item: any, index: any) => {
              if (item.isApproved == true) {
                return (
                  <div
                    className="gallery2"
                    key={index}
                    onClick={() => router.push(`/Product?id=${item._id}`)}
                    style={{ justifyContent: "left" }}
                  >
                    <a>
                      <Image
                        src={
                          item.product_image1[0]
                            ? item.product_image1[0]
                            : "/omratrade/tv.png"
                        }
                        alt="Picture of the author"
                        width={300}
                        height={300}
                      />
                    </a>

                    <div className="desc">
                      {item.product_name}-{item.product_Specification}
                      <p>Merchant Name:{item.vendors_name}</p>
                    </div>
                  </div>
                );
              }
            })}

            <div className="gallery2">
              <a href="#">
                <Image
                  src="/omratrade/tv.png"
                  alt="facemask"
                  width={250}
                  height={250}
                  className="facemask"
                />
              </a>

              <div className="desc">
                Microtek Superpower 700 700VA
                <p>Brand:Microtek</p>
              </div>
            </div>
          </Carousels>
        </div>

        

        <div className="div-flex-box" >
          <h1 className="gallery-heading">Industry Tools & supply</h1>

          <Carousels responsive={responsive} slidesToSlide={4}>
            <div className="gallery2">
              <a href="#">
                <Image
                  src="/omratrade/tv.png"
                  alt="facemask"
                  width={250}
                  height={250}
                  className="facemask"
                />
              </a>
            </div>

            <div className="gallery2">
              <a href="#">
                <Image
                  src="/omratrade/tv.png"
                  alt="facemask"
                  width={250}
                  height={250}
                  className="facemask"
                />
              </a>
            </div>

            <div className="gallery2">
              <a href="#">
                <Image
                  src="/omratrade/tv.png"
                  alt="facemask"
                  width={250}
                  height={250}
                  className="facemask"
                />
              </a>
            </div>

            <div className="gallery2">
              <a href="#">
                <Image
                  src="/omratrade/tv.png"
                  alt="facemask"
                  width={250}
                  height={250}
                  className="facemask"
                />
              </a>
            </div>

            <div className="gallery2">
              <a href="#">
                <Image
                  src="/omratrade/tv.png"
                  alt="facemask"
                  width={250}
                  height={250}
                  className="facemask"
                />
              </a>
            </div>

            <div className="gallery2">
              <a href="#">
                <Image
                  src="/omratrade/tv.png"
                  alt="facemask"
                  width={250}
                  height={250}
                  className="facemask"
                />
              </a>
            </div>

            <div className="gallery2">
              <a href="#">
                <Image
                  src="/omratrade/tv.png"
                  alt="facemask"
                  width={250}
                  height={250}
                  className="facemask"
                />
              </a>
            </div>
          </Carousels>
        </div>
        {/* category section starts*/}
        <div>
            <h1>All Category</h1>
      <div className={styles1.Flex_Section}>
        <div className={styles1.img_box}>Laundery Machine & Equipments</div>
        <div className={styles1.img_box1}>Dryclean Machine & Equipment</div>
        <div className={styles1.img_box2}>Laundry Bags</div>
        <div className={styles1.img_box3}>Chemical & Detergent</div>
      </div>

      <div className={styles1.Flex_Section}>
        <div className={styles1.img_box4}>QR code printer</div>
        <div className={styles1.img_box5}>Basket</div>
        <div className={styles1.img_box6}>Hanger</div>
        <div className={styles1.img_box5}>Basket</div>
      </div>
    </div>
      {/* category section ends */}

      <section className={styles1.midbanner}>s</section>
     
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
    <p>ADDRESS Office-1: E-Laundry  A Product of OMRA Solutions Office No: 103 & 105, D-20 Sector 63, Noida (UP)</p>

    <p>Office-2: E-Laundry  A Product of OMRA Solutions F32, First Floor, Cosmos Square , Rustomjee Global City, Virar West , Maharashtra 401303</p>
       
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
      </UserLayout>
    </div>
    
  );
};

export default HomePage;
