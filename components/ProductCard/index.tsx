import React from 'react';

import { useRouter } from 'next/router';

import {
  useGetCategory,
  usePublicProduct,
} from '../../networkAPI/queries';
import styles from '../../styles/Merchant/updatedproductcard.module.scss';

function ProductCard() {
    const router = useRouter()
    const { data, status } = usePublicProduct();
    const data2 = useGetCategory();
    const category_data = data2.data;
    console.log(data2.data);
  return (
    <div>
         
        <div key={''}>
      <h1 className={styles.heading_section}>chemical and Detergent</h1>
      <div className={styles.container}>
      {data?.data.filter((item:any)=>item.isApproved == true).map((item: any, index: any) => {
        console.log(item)
             
                return (
        <div className={styles.productcard} key={index}>
          <div className={styles.backg}>
            <div className={styles.imgone} style={{backgroundImage:`url(${item.product_image1[0]})`}}>
              <div className={styles.productimg}>
              {/* <Image
                        src={
                          item.product_image1[0]
                            ? item.product_image1[0]
                            : "/omratrade/tv.png"
                        }
                        alt="Picture of the author"
                        width={300}
                        height={300}
                      /> */}
              </div>
            </div>
          </div>
          <div className={styles.producttext}>
            <h3>{item.product_name}</h3>
            <p>Merchant Name:{item.vendors_name}</p>
          </div>
          <div className={styles.productcart}>
            <button type="submit"  onClick={() => router.push(`/Product?id=${item._id}`)}>View More</button>
          </div>
        </div>
              );
            
          })}
        {/* <div className={styles.productcard}>
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
        </div> */}
        {/* <div className={styles.productcard}>
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
        </div> */}
        {/* <div className={styles.productcard}>
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
        </div> */}
        {/* <div className={styles.productcard}>
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
        </div> */}
  
      </div>

      {/* <h1>Chemical & Detergent</h1> */}
      {/* <div className={styles.container}>

<div className={styles.productcard1}>
    <div className={styles.backg2}>
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
<div className={styles.productcard1}>
    <div className={styles.backg2}>
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
<div className={styles.productcard1}>
    <div className={styles.backg2}>
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
<div className={styles.productcard1}>
    <div className={styles.backg2}>
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
<div className={styles.productcard1}>
    <div className={styles.backg2}>
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
</div>
<h1>Chemical & Detergent</h1>
<div className={styles.container}>

<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
<div className={styles.productcard2}>
    <div className={styles.backg3}>
    <div className={styles.imgone}>
        <div className={styles.productimg}>
        </div>
        </div>
    </div>
    <div className={styles.producttext}>
        <h3>Software</h3>
        <p>Merchant Name:ABC PVT ltd</p>
    </div>
    <div className={styles.productcart2}>
        <button type="submit">View More</button>
    </div>
</div>
</div> */}
</div>
  
    </div>
  );
}

export default ProductCard;
