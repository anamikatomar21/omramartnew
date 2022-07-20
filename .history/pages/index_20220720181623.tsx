import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { Carousel } from "react-responsive-carousel";
import Category from "components/Category";
import CompanyDescription from "components/CompanyDescription";
import Footer from "components/Footer/footer";
import ProductCard from "components/ProductCard";
import SliderBox from "components/SliderBox";
import SmallBanner from "components/SmallBanner";
import UserLayout from "components/User/Layout";
import {
  useGetBanner,
  useGetCategory,
  useProductsByCategory,
  usePublicProduct,
} from "networkAPI/queries";
// import styles from 'styles/Merchant/categoryproduct.module.scss';
import styles from "styles/Merchant/productcard.module.scss";

const CategoryProduct: NextPage = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState<string>("");
  const dropdownRef = useRef<any>("");

  // console.log({env:process.env.NEXT_PUBLIC_SERVER_URL})

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const { data, status } = usePublicProduct();
  // console.log("hekhvhdshds",data)
  const { data: booksProduct, status: status1 } = useProductsByCategory(
    " Laundry Machine & Equipment "
  );
  const { data: booksProduct1, status: status2 } = useProductsByCategory(
    "Dryclean Machine & Equipment "
  );
  const { data: booksProduct2, status: status3 } = useProductsByCategory(
    "Chemical & Detergent "
  );
  const { data: booksProduct3, status: status4 } =
    useProductsByCategory("Laundry bags ");
  const { data: booksProduct4, status: status5 } =
    useProductsByCategory("Hangers ");
  const { data: booksProduct5, status: status6 } =
    useProductsByCategory("QR code printer");

  const data2 = useGetCategory();
  // const category_data = data2.data;
  // console.log(data2.data);
  // console.log(data);
  const bannerData = useGetBanner().data?.data;
  // console.log(bannerData);
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
              {bannerData
                ?.filter((item: any) => item.type == "advertize")
                .map((item: any, index: any) => {
                  // console.log(item.banner_image1[0].length)
                  return (
                    <Carousel key={index}>
                      <div>
                        {item.banner_image1[0].length > 0 && (
                          <Image
                            src={
                              item.banner_image1[0]
                                ? item.banner_image1[0]
                                : "/omratrade/homebanner.png"
                            }
                            className={styles.imagestyle}
                            width={1500}
                            height={550}
                            alt={"advertize"}
                          />
                        )}
                        {/* <p className="legend">Image 1</p> */}
                      </div>

                      <div>
                        {item.banner_image2[0].length > 0 && (
                          <Image
                            src={
                              item.banner_image2[0]
                                ? item.banner_image2[0]
                                : "/omratrade/homebanner.png"
                            }
                            className={styles.imagestyle}
                            width={1500}
                            height={550}
                            alt="image1"
                          />
                        )}
                        {/* <p className="legend">Image 2</p> */}
                      </div>

                      <div>
                        {item.banner_image3[0].length > 0 && (
                          <Image
                            src={
                              item.banner_image3[0]
                                ? item.banner_image3[0]
                                : "/omratrade/homebanner.png"
                            }
                            className={styles.imagestyle}
                            width={1500}
                            height={550}
                            alt="image1"
                          />
                        )}

                        {/* <p className="legend">Image 3</p> */}
                      </div>

                      <div>
                        {item.banner_image4[0].length > 0 && (
                          <Image
                            src={
                              item.banner_image4[0]
                                ? item.banner_image4[0]
                                : "/omratrade/homebanner.png"
                            }
                            className={styles.imagestyle}
                            width={1500}
                            height={550}
                            alt="image1"
                          />
                        )}

                        {/* <p className="legend">Image 4</p> */}
                      </div>

                      <div>
                        {/* {item.banner_image5[0].length > 0 && (
                        <Image
                          src={
                            item.banner_image5[0]
                              ? item.banner_image5[0]
                              : "/omratrade/homebanner.png"
                          }
                          width={1450}
                          height={550}
                          alt="image1"
                        />
                        )} */}
                      </div>
                    </Carousel>
                  );
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
              {bannerData?.map((item: any, index: any) => {
                // console.log(item?.banner_image1[0]);
                const isAdvwdvwetize = item.type == "advertize";
                if (item.type == "advertize")
                  return (
                    <Carousel key={index}>
                      <div>
                        {item.banner_image1[0].length > 0 && (
                          <Image
                            src={
                              item.banner_image1[0]
                                ? item.banner_image1[0]
                                : "/omratrade/homebanner.png"
                            }
                            className={styles.imagestyle}
                            width={1450}
                            height={450}
                            alt="image1"
                          />
                        )}
                        {/* <p className="legend">Image 1</p> */}
                      </div>

                      <div>
                        {item.banner_image2[0].length > 0 && (
                          <Image
                            src={
                              item.banner_image2[0]
                                ? item.banner_image2[0]
                                : "/omratrade/homebanner.png"
                            }
                            className={styles.imagestyle}
                            width={1450}
                            height={450}
                            alt="image1"
                          />
                        )}
                        {/* <p className="legend">Image 2</p> */}
                      </div>

                      <div>
                        {item.banner_image3[0].length > 0 && (
                          <Image
                            src={
                              item.banner_image3[0]
                                ? item.banner_image3[0]
                                : "/omratrade/homebanner.png"
                            }
                            className={styles.imagestyle}
                            width={1450}
                            height={450}
                            alt="image44"
                          />
                        )}

                        {/* <p className="legend">Image 3</p> */}
                      </div>

                      <div>
                        {item.banner_image4[0].length > 0 && (
                          <Image
                            src={
                              item?.banner_image4[0]
                                ? item.banner_image4[0]
                                : "/omratrade/homebanner.png"
                            }
                            className={styles.imagestyle}
                            width={1450}
                            height={450}
                            alt="image1"
                          />
                        )}

                        {/* <p className="legend">Image 4</p> */}
                      </div>

                      <div>
                        {/* {item.banner_image3[0].length > 0 && ( 
                        <Image
                          src="/omratrade/homebanner.png"
                          width={1450}
                          height={450}
                          alt="image1"
                        />
                        )} */}
                      </div>
                    </Carousel>
                  );
              })}
            </div>
          </div>
        </div>

        {/* <div className={styles.marginarea}></div> */}

        <div className={styles.productdiv}>
          <ProductCard
            title=" Laundry Machine & Equipment "
            data={booksProduct}
          />
          {/* <ProductCard title="BEds" data={bedsData}/> */}
        </div>

        <div className={styles.productdiv}>
          <ProductCard
            title="Dryclean Machine & Equipment"
            data={booksProduct1}
          />
        </div>
        <div>
          <div>
            <SliderBox />
          </div>
          <div className={styles.productdiv}>
            <ProductCard title="Chemical & Detergent" data={booksProduct2} />
          </div>
          <div className={styles.productdiv}>
            <ProductCard title="Laundry bags" data={booksProduct3} />
          </div>
          <div className={styles.productdiv}>
            <ProductCard title="Hanger" data={booksProduct4} />
          </div>
          <div className={styles.productdiv}>
            <ProductCard title="QR code printer" data={booksProduct5} />
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
