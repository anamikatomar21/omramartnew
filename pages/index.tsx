import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useEffect, useRef, useState } from "react";

import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Carousel } from "react-responsive-carousel";
import Carousels from "react-multi-carousel";

import Category from "../components/Category";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer/footer";
import ProductCard from "../components/ProductCard";
import SliderBox from "../components/SliderBox";
import SmallBanner from "../components/SmallBanner";
import UserLayout from "../components/User/Layout";
import { useGetCategory, usePublicProduct } from "../networkAPI/queries";
// import styles from '../styles/Merchant/categoryproduct.module.scss';
import styles from "../styles/Merchant/productcard.module.scss";

const CategoryProduct: NextPage = () => {
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
                    src="/omratrade/homebanner.png"
                    className={styles.imagestyle}
                    width={1450}
                    height={550}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 1</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    className={styles.imagestyle}
                    width={1450}
                    height={550}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    className={styles.imagestyle}
                    width={1450}
                    height={550}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 3</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    className={styles.imagestyle}
                    width={1450}
                    height={550}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 4</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    width={1450}
                    height={550}
                    alt="image1"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "170px" }}>
          <SmallBanner />
        </div>
        <div>
          <Category />
        </div>

        <div className={styles.container}>
          <div className={styles.right}>
            <div>
              <Carousel>
                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    className={styles.imagestyle}
                    width={1450}
                    height={450}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 1</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    className={styles.imagestyle}
                    width={1450}
                    height={450}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    className={styles.imagestyle}
                    width={1450}
                    height={450}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 3</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    className={styles.imagestyle}
                    width={1450}
                    height={450}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 4</p> */}
                </div>

                <div>
                  <Image
                    src="/omratrade/homebanner.png"
                    width={1450}
                    height={450}
                    alt="image1"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        {/* product carousel */}
        {/* <div className="div-flex-box">
          <h1 className="gallery-heading">Industry Tools & supply</h1>

          <Carousels responsive={responsive} slidesToSlide={4}>
          <div className={styles.productcard}>
                <div className={styles.backg}>
                <div className={styles.imgone}>
                    <div className={styles.productimg}>
                    </div>
                    </div>
                </div>
                <div className={styles.producttext}>
                    <h3>Software</h3>
                    <p>Merchant Name:ABC PVT ltd</p>
                </div>
                <div className={styles.productcart}>
                    <button type="submit">View More</button>
                </div>
            </div>

            <div className={styles.productcard}>
              <div className={styles.imgtwo}>
                <div className={styles.productimg}></div>
              </div>
              <div className={styles.producttext}>
                <h3>Agriculture</h3>
                <p>Merchant Name:ABC PVT ltd</p>
              </div>
              <div className={styles.productcart}>
                <button type="submit">Buy Now</button>
              </div>
            </div>

            <div className={styles.productcard}>
              <div className={styles.imgtwo}>
                <div className={styles.productimg}></div>
              </div>
              <div className={styles.producttext}>
                <h3>Agriculture</h3>
                <p>Merchant Name:ABC PVT ltd</p>
              </div>
              <div className={styles.productcart}>
                <button type="submit">Buy Now</button>
              </div>
            </div>

            <div className={styles.productcard}>
              <div className={styles.imgtwo}>
                <div className={styles.productimg}></div>
              </div>
              <div className={styles.producttext}>
                <h3>Agriculture</h3>
                <p>Merchant Name:ABC PVT ltd</p>
              </div>
              <div className={styles.productcart}>
                <button type="submit">Buy Now</button>
              </div>
            </div>

            <div className={styles.productcard}>
              <div className={styles.imgtwo}>
                <div className={styles.productimg}></div>
              </div>
              <div className={styles.producttext}>
                <h3>Agriculture</h3>
                <p>Merchant Name:ABC PVT ltd</p>
              </div>
              <div className={styles.productcart}>
                <button type="submit">Buy Now</button>
              </div>
            </div>

            <div className={styles.productcard}>
              <div className={styles.imgtwo}>
                <div className={styles.productimg}></div>
              </div>
              <div className={styles.producttext}>
                <h3>Agriculture</h3>
                <p>Merchant Name:ABC PVT ltd</p>
              </div>
              <div className={styles.productcart}>
                <button type="submit">Buy Now</button>
              </div>
            </div>

            <div className={styles.productcard}>
              <div className={styles.backg}>
                <div className={styles.imgone}>
                  <div className={styles.productimg}></div>
                </div>
              </div>
              <div className={styles.producttext}>
                <h3>Software</h3>
                <p>Merchant Name:ABC PVT ltd</p>
              </div>
              <div className={styles.productcart}>
                <button type="submit">View More</button>
              </div>
            </div>
          </Carousels>
        </div> */}
        {/* product carousel ends  */}


        <div className={styles.marginarea}></div>

        <div className={styles.productdiv}>
          <ProductCard />
        </div>
        <div className={styles.productdiv}>
          <ProductCard />
        </div>
        <div>
          <div>
            <SliderBox />
          </div>
          <div className={styles.productdiv}>
            <ProductCard />
          </div>

          <div>
            <CompanyDescription />
          </div>
          <Footer />
        </div>
      </UserLayout>
    </div>
  );
};

export default CategoryProduct;
