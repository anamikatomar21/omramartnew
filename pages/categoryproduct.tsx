import 'react-multi-carousel/lib/styles.css';

import React, {
  useEffect,
  useState,
} from 'react';

import { AxiosError } from 'axios';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import Carousel from 'react-multi-carousel';

import UserLayout from '../components/User/Layout';
import { useLogin } from '../networkAPI/queries';

const CategoryProduct: NextPage = () => {

    const router = useRouter()





    const [email, setEmail] = useState<string>('')

    const [password, setPassword] = useState<string>('')



    const { error, mutate, data, isLoading } = useLogin()





    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        mutate({

            email, password

        })



    }



    useEffect(() => {

        if (error instanceof AxiosError) {

            toast.error(error?.response?.data?.message || error.message)

        }



        if (data) {

            toast.success("Login Successfull")

            router.push(`/onboarding/profile`)

        }

    }, [error, data,router])





    const responsive = {

        superLargeDesktop: {

           

            breakpoint: { max: 4000, min: 3000 },

            items: 5

        },

        desktop: {

            breakpoint: { max: 3000, min: 1024 },

            items: 5

        },

        tablet: {

            breakpoint: { max: 1024, min: 464 },

            items: 3

        },

        mobile: {

            breakpoint: { max: 464, min: 0 },

            items: 1

        }

    };





    return (

        <div className="">

            <Toaster position="bottom-center" />

            <UserLayout>







                {/*         

        <Head>

          <title>Create Next App</title>

          <meta name="description" content="Generated by create next app" />

          <link rel="icon" href="/favicon.ico" />

        </Head> */}









                <div className="container">

                    <div className='row'>

                        <div className='col-md-6'>

                            <Image src="/omratrade/banner2.jpg" alt="banner" className='banner-background-style' />

                        </div>

                        <div className='col-md-3'>



                        </div>



                    </div>

                </div>



                <div className='div-flex-box'>



                    <h1 className='gallery-heading'>All Category</h1>

                    <div className="product-flex-box">





                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/Image1.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Appliances and Utilities



                            </div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/Image2.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Pumps & Motors

                            </div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/Image3.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">LED & Lighting

                            </div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/Image4.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Kitchen and Pantry Supplies

                            </div>

                        </div>

                    </div>

                </div>



                <div className='div-flex-box'>

                    <h1 className='gallery-heading'>FEATURED PRODUCTS</h1>



                    <Carousel

                    responsive={responsive}

                    slidesToSlide={5}



                >





                    <div className="gallery2">

                        <Link href="/form">

                            <Image src="/omratrade/chair.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                </Carousel>

                </div>

















                <h1 className='gallery-heading'>FEATURED PRODUCTS</h1>



                <Carousel

                    responsive={responsive}

                    slidesToSlide={4}



                >





                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                    <div className="gallery2">

                        <Link href="#">

                            <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                        </Link>

                        <div className="desc">Microtek Superpower 700 700VA

                                

                            <p>Brand:Microtek</p></div>

                    </div>

                </Carousel>





                <div className='div-flex-box'>

                    <h1 className='gallery-heading'>Best Seller</h1>

                    <div className="product-flex-box">





                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                    </div>

                </div>

                <div className='div-flex-box'>

                    <h1 className='gallery-heading'>Best Seller</h1>

                    <div className="product-flex-box">





                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                    </div>

                </div>

                <div className='div-flex-box'>

                    <h1 className='gallery-heading'>Best Seller</h1>

                    <div className="product-flex-box">





                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/pump.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="/omratrade/tv.png" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>



                        <div className="gallery2">

                            <Link href="#">

                                <Image src="https://m.media-amazon.com/images/I/61+ilDgVVwS._UL1500_.jpg" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                        <div className="gallery2">

                            <Link href="#">

                                <Image src="https://m.media-amazon.com/images/I/61+ilDgVVwS._UL1500_.jpg" alt="facemask" className='facemask' />

                            </Link>

                            <div className="desc">Microtek Superpower 700 700VA

                                    

                                <p>Brand:Microtek</p></div>

                        </div>

                    </div>

                </div>



            </UserLayout>



        </div>

    )

}



export default CategoryProduct;



