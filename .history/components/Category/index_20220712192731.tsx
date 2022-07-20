import React from "react";

import { useGetHomeCategory, usePublicProduct } from "../../networkAPI/queries";
import styles from "../../styles/Merchant/view.module.scss";

function Category() {
  const { data, status } = usePublicProduct();
  const data2 = useGetHomeCategory();
  const category_data = data2.data;
  console.log(data2.data);
  console.log(data);
  return (
    <div>
      <h1 className={styles.heading_section}>All Category</h1>
      <div>
        <div key={"index"} style={{ display: "flex" }}>
          <div className={styles.Flex_Section}>
            {category_data?.data.map((item3: any, index: any) => {
              console.log(item3);

              return (
                <div key={index}>
                  <div
                    className={styles.img_box}
                    style={{
                      backgroundImage: `url(${item3.category_image[0]})`,
                    }}
                  >
                    {item3.category_name}
                  </div>
                  {/* <Image
                          src={
                            item3.category_image[0]
                              ? item3.category_image[0]
                              : "/omratrade/tv.png"
                          }
                          width={255}
                          height={275}
                          className={styles.img_box}
                          alt="image1"
                        />{" "} */}
                  {/* <div className={styles.img_box1}>Dryclean Machine & Equipment</div>
        <div className={styles.img_box2}>Laundry Bags</div>
        <div className={styles.img_box3}>Chemical & Detergent</div> */}
                </div>
              );
            })}
          </div>

          {/* <div className={styles.Flex_Section}>
        <div className={styles.img_box4}>QR code printer</div>
        <div className={styles.img_box5}>Basket</div>
        <div className={styles.img_box6}>Hanger</div>
        <div className={styles.img_box7}>Scanner</div>
      </div> */}
        </div>
      </div>
    </div>
  );
}

export default Category;
