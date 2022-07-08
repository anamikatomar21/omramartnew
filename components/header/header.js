import { useRouter   } from 'next/router';
import { useEffect, useState } from 'react';
import React from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import "./header.module.scss"

function header() {

    const [category, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    const router = useRouter();
    const cart = useSelector((state) => state.cart);
  
    const [query, setQuery] = useState("");
  
    // const { cartItems } = cart;
  
    const [autocomplete, setAutocomplete] = useState([]);
  
    const [type, setType] = useState("");
    const [size,setSize]= useState("")
    // const [category,setCategory]= useState('')
    const [imageUrl,setImageUrl]=useState("color1");
  
    //SEARCH BOX AUTOCOMPLETE
  
    useEffect(() => {
      if (!/^\s*$/.test(query)) {
        axios
          .get(`/api/autocomplete?search=${query}&type=${type}`)
          .then((response) => {
            setAutocomplete(response.data);
          });
      }
    }, [query, type]);
  
    // const getCartCount = () => {
    //   return cartItems.reduce((qty, item) => qty + item.qty, 0);
    // };
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (query) {
        router.push(`/product/shop?search=${query}`);
      }
    };
  
    const handleRoute = (type, title,color,size,category) => {
      
      
      switch (type) {
        case "bed":
          router.push(`/newproduct?title=${title}&colorName=Grey Linen&size=2FT 6`);
          break;
        case "sleighbed":
            router.push(`/allbed/sleighproduct?title=${title}&colorName=Grey Linen&size=3FT`);
            break;
        case "allbeds":
              router.push(`/allbed/allbedsproduct?title=${title}`);
              break;
        case "ottoman":
                router.push(`/allbed/ottomanproduct?title=${title}&size=3FT&colorName=Grey Linen`);
                break;
        case "headboard":
          // router.push(`/headboard/Headboardproduct?title=${title}&color=${color}`);
          router.push(`/headboard/Headboardproduct?title=${title}&size=2FT 6&color=Grey Linen`);
          break;
        case "mattress":
          router.push(`/mattressess/Mattressessproduct?title=${title}`);
          break;
  
          case "gardenFurniture":
            router.push(`/gardenfurniture/Gardenproduct?title=${title}&color=Cream&category=Teak color`);
            break;
    
          case "diningSet":
            router.push(`/diningset/Diningsetproduct?title=${title}`);
            break;
    
          case "sofa":
            router.push(`/sofa/Sofaproduct?title=${title}&color=Grey Linen`);
            break;
    
          
          case "livingRoom":
            router.push(`/livingroom/Livingroomproduct?title=${title}`);
            break;
      }
    };
  
  
  
    const handleRoute1 = (type, title) => {
      
      switch (type) {
        case "bed":
          router.push(`/product/divanbed`);
          break;
        case "headboard":
          router.push(`/product/headboard`);
          break;
        case "mattress":
          router.push(`/product/Mattressess`);
          break;
  
          case "gardenFurniture":
            router.push(`/product/gradenfurniture}`);
            break;
    
          case "diningSet":
            router.push(`/product/diningset`);
            break;
    
          case "sofa":
            router.push(`/product/sofa`);
            break;
    
          case "allbeds":
            router.push(`/product/allbeds}`);
            break;
          case "livingRoom":
            router.push(`/product/livingroom`);
            break;
      }
    };
  return (
   <div></div>
  )
}

export default header