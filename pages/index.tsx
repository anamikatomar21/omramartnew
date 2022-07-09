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
import { Carousel } from 'react-responsive-carousel';

import Category from '../components/Category';
import CompanyDescription from '../components/CompanyDescription';
import Footer from '../components/Footer/footer';
import ProductCard from '../components/ProductCard';
import SliderBox from '../components/SliderBox';
import SmallBanner from '../components/SmallBanner';
import UserLayout from '../components/User/Layout';
import {
  useGetBanner,
  useGetCategory,
  usePublicProduct,
} from '../networkAPI/queries';
// import styles from '../styles/Merchant/categoryproduct.module.scss';
import styles from '../styles/Merchant/productcard.module.scss';

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
  const bannerData = useGetBanner().data?.data;
  console.log(bannerData);
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
            {bannerData?.map((item:any,index:any) => {
                  return(
              <Carousel key={index}>
                
                  
               
                
                <div>
                  <Image
                    src={item.banner_image1[0]?item.banner_image1[0]:"/omratrade/homebanner.png"}
                    className={styles.imagestyle}
                    width={1450}
                    height={550}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 1</p> */}
                </div>

                <div>
                  <Image
                     src={item.banner_image1[0]?item.banner_image2[0]:"/omratrade/homebanner.png"}
                    className={styles.imagestyle}
                    width={1450}
                    height={550}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                  <Image
                     src={item.banner_image1[0]?item.banner_image3[0]:"/omratrade/homebanner.png"}
                    className={styles.imagestyle}
                    width={1450}
                    height={550}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 3</p> */}
                </div>

                <div>
                  <Image
                     src={item.banner_image1[0]?item.banner_image4[0]:"/omratrade/homebanner.png"}
                    className={styles.imagestyle}
                    width={1450}
                    height={550}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 4</p> */}
                </div>

                <div>
                  <Image
                    src={item.banner_image1[0]?item.banner_image4[0]:"/omratrade/homebanner.png"}
                    width={1450}
                    height={550}
                    alt="image1"
                  />
                </div>

               
                
                
              </Carousel>
                )
              })}
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
            {bannerData?.map((item:any,index:any) => {
              console.log(item)
const isAdvwdvwetize=  item.type=="advertize"
if(item.type=="advertize")
            
return(



              <Carousel key={index}>
                <div>
                  <Image
                  src={item.banner_image1[0]?item.banner_image1[0]:"/omratrade/homebanner.png"}
                    className={styles.imagestyle}
                    width={1450}
                    height={450}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 1</p> */}
                </div>

                <div>
                  <Image
                  src={item.banner_image2[0]?item.banner_image2[0]:"/omratrade/homebanner.png"}
                    className={styles.imagestyle}
                    width={1450}
                    height={450}
                    alt="image1"
                  />
                  {/* <p className="legend">Image 2</p> */}
                </div>

                <div>
                  <Image
                  src={item.banner_image3[0]?item.banner_image3[0]:"/omratrade/homebanner.png"}
                    className={styles.imagestyle}
                    width={1450}
                    height={450}
                    alt="image1"
                  />

                  {/* <p className="legend">Image 3</p> */}
                </div>

                <div>
                  <Image
                    src={item.banner_image4[0]?item.banner_image4[0]:"/omratrade/homebanner.png"}
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
 ) 
                
              })}
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

        {/* <div className="div-flex-box" style={{ background: "white", marginTop: "300px" }}>
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
        </div> */}

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
                    <div className={styles.productimg}>
                    </div>
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
                    <div className={styles.productimg}>
                    </div>
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
                    <div className={styles.productimg}>
                    </div>
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
                    <div className={styles.productimg}>
                    </div>
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
                    <div className={styles.productimg}>
                    </div>
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
          </Carousels>
        </div> */}

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
 