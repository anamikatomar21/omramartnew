import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import { useGetCategory } from 'networkAPI/queries';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Carousel from 'react-multi-carousel';
import styles from 'styles/Merchant/updatedproductcard.module.scss';

// function ProductCard({title,data}) {
interface Props {
  title: string;
  data: any;
}
function ProductCard({ title, data }: Props) {
  console.log({ "helloo tsra": data?.data });

  const router = useRouter();

  const data2 = useGetCategory();
  const category_data = data2.data;
  console.log(data2.data);

   const responsive = {
    superLargeDesktop: {
     breakpoint: { max: 4000, min: 3000 },

      items: 5,
    },

    desktop: {
      breakpoint: { max: 3000, min: 1024 },

     items: 5,
     },

  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },

  //     items: 3,
  //   },

  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },

  //     items: 1,
  //   },
  };

  return (
    <div>
      <div key={""}>
        <h1 className={styles.heading_section3}>{title}</h1>
        {data?.data && (
          <Carousel responsive={responsive}>
            {data?.data
              .filter((item: any) => item.isApproved == true)
              .map((item: any, index: any) => {
                return (
                  <div className={styles.cardproduct} key={index}>
                    <div className={styles.productimg}>
                      <Image
                        src={
                          item.product_image1[0]
                            ? item.product_image1[0]
                            : "/omratrade/homebanner.png"
                        }
                        height={200}
                        width={300}
                        alt="productr image"
                        className={styles.productimagesrc}
                      />
                    </div>
                    <div className={styles.productcontent}>
                      <h4>{item.product_name}</h4>
                      <p>{item.vendors_name}</p>
                    </div>
                    <div className={styles.productcartbtn}>
                      <button
                        type="submit"
                        onClick={() => router.push(`/product?id=${item._id}&category=${item.category}&merchant=${item.auther_Id}`)}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
