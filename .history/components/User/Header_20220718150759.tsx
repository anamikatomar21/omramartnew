import React, { useState } from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useOnClickOutside } from 'usehooks-ts';

import styles from '../../styles/Merchant/Header.module.scss';

interface SearchProps {
  citySearch: string;
  productSearch: string;
}
interface ActionTypes {
  type: string;
  payload: string;
}

/**
 *
 * Header
 */
const Header: NextPage = () => {
  const CITYSEACRH = "CITYSEACRH";
  const PRODUCTSEACRH = "PRODUCTSEACRH";

  const searchSlice = {
    initialState: {
      citySearch: "",
      productSearch: "",
    } as SearchProps,
    reducer: (state: SearchProps, action: ActionTypes) => {
      switch (action.type) {
        case CITYSEACRH:
          return {
            ...state,
            citySearch: action.payload,
          };
        case PRODUCTSEACRH:
          return {
            ...state,
            productSearch: action.payload,
          };

        default:
          return state;
      }
    },
    actions: {
      onFilterCity: (payload: string) => ({
        type: CITYSEACRH,
        payload: payload,
      }),
      onFilterProduct: (payload: string) => ({
        type: PRODUCTSEACRH,
        payload: payload,
      }),
    },
  };
  // const initialState:SearchProps=
  // const reducer=

  const { actions, initialState, reducer } = searchSlice;
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const cityInputRef = React.useRef<HTMLDivElement>(null);
  const productInputRef = React.useRef<HTMLDivElement>(null);
  const [cityDropDown, setCityDropDown] = React.useState(false);
  const [productsDropDown, setProductsDropDown] = React.useState(false);

  useOnClickOutside(cityInputRef, () => setCityDropDown(false));
  useOnClickOutside(productInputRef, () => setProductsDropDown(false));

  // For City input
  const openCityDropDownHandler = React.useCallback(() => {
    setCityDropDown(true);
  }, []);

  const onFilterCity = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.onFilterCity(e.target.value));
    },
    [actions]
  );
  const onSelectCity = React.useCallback(
    (value: string) => {
      dispatch(actions.onFilterCity(value));
    },
    [actions]
  );

  const uniqArray = Array.from(
    // Filter Duplicates from array
    new Set(
      suggestionArray.filter((data) => {
        return data.text
          .toLowerCase()
          .includes(state.citySearch.toLocaleLowerCase());
      })
    )
  );

  // For Product and Merchant input
  const openProductDropDownHandler = React.useCallback(() => {
    setProductsDropDown(true);
  }, []);

  const onFilterProduct = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(actions.onFilterProduct(e.target.value))
    },
    [actions]
  );

  // const onFilterProduct = debounce(_onFilterProduct, 2000)

  const onSelectProuct = React.useCallback(
    (value: string) => {
      dispatch(actions.onFilterProduct(value));
    },
    [actions]
  );




  const [productName,setProductName]=useState([])

  // https://merchantapi.elaundry.co.in/api/search/mouse

  const endpoint = `https://merchantapi.elaundry.co.in/api/search/${state.productSearch}`
  // async / await 



  React.useEffect(() => {
    
    const getProductNameAndVendorName = async () => {

    try {
      const res = await fetch(endpoint)
      const data = await res.json()
      setProductName(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
    getProductNameAndVendorName()
  }, [])


  console.log(productName)
  return (
    // <div className={styles.navbarheader}>
    <div>
      <div className={styles.flex_box}>
        <div>
          <Image
            data-lazyloaded="1"
            src="/omratrade/el.png"
            height={100}
            width={200}
            alt="Logo Image"
            className={styles.imageLogo}
          />
        </div>

        <ul className={styles.flex_box1}>
          <li className={styles.button_box1}>
            <span className={styles.phone_icon}>
              {" "}
              <i className="fa fa-phone"></i>{" "}
            </span>

            <span>9876357367</span>
          </li>
          <li className={styles.button_box}>
            <i className="fas fa-user"></i>
            <Link href="/index1">Sign in</Link>
          </li>
          <li></li>
        </ul>
      </div>

      <div className={styles.flex_section}>
        <h1 className={styles.heading_section}>
          India First laundry & Dry Clean Market Place
        </h1>
      </div>

      <div className={styles.searchbar}>
        <div ref={cityInputRef} className={styles.citylist}>
          <span className={styles.map_icon}>
            <i className="fa fa-map-marker"></i>
          </span>
          <input
            type="text"
            placeholder="All Cities"
            value={state.citySearch}
            className={styles.cityinputt}
            onChange={onFilterCity}
            onFocus={openCityDropDownHandler}
          />
          {cityDropDown ? (
            <ul className={styles.city_list}>
              {uniqArray.length <= 0 ? (
                <li>Not Found</li>
              ) : (
                uniqArray.map((data, index) => (
                  <li onClick={() => onSelectCity(data.text)} key={index}>
                    {data.text}
                  </li>
                ))
              )}
            </ul>
          ) : null}
        </div>
        <div ref={productInputRef} className={styles.searchbox}>
          <input
            type="text"
            placeholder="What are you looking for..."
            className={styles.input_sectionn}
            onChange={onFilterProduct}
            value={state.productSearch}
            onFocus={openProductDropDownHandler}
          />
          {productsDropDown ? (
            <ul className={styles.productSearchList}>
              {
                productName?.sort((a:any,b:any)=>a?.product_name?.localeCompare(b.product_name))?.slice(0,10)?.map((data:any, index) => (
                  <li key={index} onClick={() => onSelectProuct(data.product_name)}>
                    {data.product_name}
                  </li>
                ))
              }
            </ul>
          ) : null}
          <button type="submit" className={styles.input_section1r}>
            <i className="fa fa-search"></i>Search
          </button>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};
export default Header;


// const xx=''.localeCompare

const suggestionArray = [
  {
    text: "Agra",
    id: 0,
  },
  {
    text: "Delhi",
    id: 1,
  },
  {
    text: "Mumbai",
    id: 2,
  },
  {
    text: "Banglore",
    id: 3,
  },
  {
    text: "Pune",
    id: 4,
  },
];

// import React from 'react';

// import { NextPage } from 'next';
// import Image from 'next/image';
// import Link from 'next/link';

// import styles from '../../styles/Merchant/Header.module.scss';

// const Header: NextPage = () => {
//     return(

//         <div className={styles.navbarheader}>
//         <div className={styles.brandlogo}>
//           <div className={styles.logo}>
//             <Image
//               data-lazyloaded="1"
//               src="/omratrade/el.png"
//               height={50}
//               width={60}
//               alt="Logo Image"
//               className={styles.imageLogo}
//             />
//           </div>
//         </div>

// <div className={styles.searchbox}>
// <div className={styles.searchinnerbox}>
//     <input type="text" placeholder="Search.." className={styles.searchinput} />

//                 <button type="submit" className={styles.searchinput1}><i className="fa fa-search"></i></button>
//               </div>
// </div>

//         <div className={styles.navbarright}>
//           <div className={styles.rightnav}>
//             <ul className={styles.navlinks}>
//               <li>

//               </li>
//               {/* <i className="far fa-bell bell-icon"></i> */}
//               <li>
//                 <i className="fas fa-user"></i><Link href='/index1'>Login</Link>
//               </li>
//               {/* <li>
//                 <i className="fas fa-user"></i><a href="#">Buyer</a>
//               </li>
//               <li>
//                 <i className="fas fa-user"></i> <a href="#">Profile</a>
//               </li>
//               <li>
//                 <i className="fas fa-address-book"></i> <a href="#">Contact Us</a>
//               </li> */}

//             </ul>
//           </div>
//         </div>
//       </div>

//     )
// }
// export default Header;
