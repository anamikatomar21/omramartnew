import type { NextPage } from 'next';
import Image from 'next/image';

import { useGetBanner } from '../../networkAPI/queries';
import styles from '../../styles/Merchant/smallbanner.module.scss';

const SmallBanner: NextPage = () => {
  const bannerData = useGetBanner().data?.data;
  console.log(bannerData);
  return (
    <div>
    {bannerData?.map((item:any,index:any) => {
      return(
    <div className={styles.Flex_Section} key={index}>
      <div>
        <Image
          src={item.banner_image1[0]}
          width={450}
          height={200}
          alt="sliderbanner"
          className="facemask"
        />
      </div>
      <div>
        <Image
          src={item.banner_image2[0]}
          width={400}
          height={200}
          alt="sliderbanner"
          className="facemask"
        />
      </div>
      <div>
        <Image
          src={item.banner_image3[0]}
          width={400}
          height={200}
          alt="sliderbanner"
          className="facemask"
        />
      </div>
      </div>
      )
    })}
    </div>
    /* <div className={styles.Flex_Section}>
<div className={styles.smallbanner1}>Chemical & Detergent</div>
<div className={styles.smallbanner2}>Chemical & Detergent</div>
<div className={styles.smallbanner3}>Chemical & Detergent</div>
</div> */
  );
};

export default SmallBanner;
