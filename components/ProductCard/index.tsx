import 'react-multi-carousel/lib/styles.css';

import React from 'react';

import { useGetCategory } from 'networkAPI/queries';
import { useRouter } from 'next/router';
import Carousel from 'react-multi-carousel';
import styles from 'styles/Merchant/updatedproductcard.module.scss';
import Image from 'next/image';

// function ProductCard({title,data}) {
  interface Props {
    title:string,
    data:any
  }
  function ProductCard({title,data}:Props) {
    console.log({"helloo tsra":data?.data})
    
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
    <div>
      <div key={""}>
        <h1 className={styles.heading_section} >{title}</h1>
        {data?.data &&
        <Carousel responsive={responsive} >
          {/* <div className="flex-box"> */}
            {/* <div className={styles.container}> */}
              {data?.data
                .filter((item: any) => item.isApproved == true)
                .map((item: any, index: any) => {
               
                    // <div
                    //   className={styles.productcard}
                    //   onClick={() => router.push(`/Product?id=${item._id}`)}
                    //   key={index}
                    // >
                    //   <div className={styles.backg}>
                    //     <div
                    //       className={styles.imgone}
                    //       style={{
                    //         backgroundImage: `url(${item.product_image1[0]})`,
                    //       }}
                    //     >
                    //       <div className={styles.productimg}></div>
                    //     </div>
                    //   </div>
                    //   <div className={styles.producttext}>
                    //     <h3>{item.product_name}</h3>
                    //     <p>Merchant Name:{item.vendors_name}</p>
                    //   </div>
                    //   <div className={styles.productcart}>
                    //     <button
                    //       type="submit"
                    //       onClick={() => router.push(`/Product?id=${item._id}`)}
                    //     >
                    //       View More
                    //     </button>
                    //   </div>
                    // </div>
                    return (
        <div className={styles.cardproduct} key={index}>
        <div className={styles.productimg}>
          <Image src="/omratrade/chair.png" height={200} width={200} alt="productr image" className={styles.productimagesrc}/>
        </div>
        <div className={styles.productcontent}>
        <h4>{item.product_name}</h4>
        <p>{item.vendors_name}</p>
        </div>
        <div className={styles.productcartbtn}>
        <button
                          type="submit"
                          onClick={() => router.push(`/Product?id=${item._id}`)}
                        >
                          View More
                        </button>
        </div>
        </div>

                    
                  );
                })}
            {/* </div> */}
          {/* </div> */}
         
          
        </Carousel>
  }
       
      </div>
    </div>
  );
}

export default ProductCard;
