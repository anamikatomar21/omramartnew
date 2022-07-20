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
    div
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
