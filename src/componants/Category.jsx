import React, { useRef } from "react"
import Container from "./Container"
import Flex from "./Flex"
import Text from "./Text"
import Bars from '../assets/Icons/Bars'
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart } from "react-icons/fa";
import List from "./List"
import Listitems from "./Listitems"
import Image from "./Image"
import CartEmpty from "../assets/cartEmpty.png"
import Badge from "./Badge"
import { Link } from "react-router-dom"


const Category = () => {

  let BarRef = useRef(null) 
  let DownRef = useRef(null) 
  let CartRef = useRef(null) 

  let handleBarDrop =()=>{
   // console.log(drofRef.current); 
   if(BarRef.current.style.display=='block'){
     BarRef.current.style.display='none'
   }else{
     BarRef.current.style.display='block'
   }
  };

  let handleDownDrop =()=>{
   // console.log(drofRef.current); 
   if(DownRef.current.style.display=='block'){
     DownRef.current.style.display='none'
   }else{
     DownRef.current.style.display='block'
   }
  };

  let handleCartDrop =()=>{
   // console.log(drofRef.current); 
   if(CartRef.current.style.display=='block'){
     CartRef.current.style.display='none'
   }else{
     CartRef.current.style.display='block'
   }
  }

  return (
    <>
      <div className="bg-categorybg py-7">
        <Container>
          <Flex className={'justify-between  items-center'}>
              <div className="w-[15%]">     
                  <div onClick={handleBarDrop} className="flex items-center gap-x-2 cursor-pointer">
                      <Bars />
                        <div className="hidden" ref={BarRef} >
                          <ul className="mt-4 text-bartext absolute z-20 bg-hoverheadeingC pl-5 w-[260px] ">
                            <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Accesories</li>
                            <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Furniture</li>
                            <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Electronics</li>
                            <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Clothes</li>
                            <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Bags</li>
                            <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Home appliances</li>
                        </ul>
                      </div>
                    <Text text={'Shop by Category'} as={'h3'} />
                  </div>   
              </div>
              <div className="w-[70%] text-center relative">
                <input type="text" placeholder="Search Products" className="p-5 font- font-dm bg-white w-4/5" />
                <FaSearch className="absolute top-1/2 -translate-y-1/2 right-40"/>
              </div>
              <div className="w-[15%]">
                  <Flex className={'gap-x-2 justify-end'}>
                    <Flex className="relative">
                        <div onClick={handleDownDrop} className="flex cursor-pointer">
                          <FaUser />
                          <FaCaretDown />
                            <div className="hidden" ref={DownRef}>
                                <div className="absolute z-20 right-0 mt-2 w-[200px] bg-white">
                                  <Link to={'/myaccount'}>
                                    <div className="group">
                                      <Listitems itemname={'My Account'} className="py-3 text-center group-hover:bg-black text-hoverheadeingC text-sm font-dm group-hover:font-bold group-hover:text-white duration-500"></Listitems>
                                    </div>
                                  </Link>
                                  <div className="group">
                                    <Listitems itemname={'Log Out'} className="py-3 text-center group-hover:bg-black text-hoverheadeingC text-sm font-dm group-hover:font-bold group-hover:text-white duration-500"></Listitems>
                                  </div>                  
                                </div>
                            </div>
                        </div>
                    </Flex>
                    <div onClick={handleCartDrop} className="cursor-pointer">
                      <Link to={'/cart'}>
                      <FaShoppingCart  className="ml-8"/>
                      </Link>
                      <div className="hidden relative" ref={CartRef}>
                        <div className="w-[280px] absolute z-20 right-0 mt-2 bg-white p-4">
                            <div className=" mx-10">
                            <Image imgSrc={CartEmpty} imgAlt={'CartEmpty'} className={'mb-1'}/>
                            <Text text={'Shop'} as={'h3'} className={'w-[100px] text-center items-center bg-hoverheadeingC text-white text-sm font-dm font-bold py-3 mx-8'}/>
                            </div>
                        </div>
                          {/* <div className="w-[280px] absolute right-0 mt-2 bg-red-300 ">
                              <div className=" p-4">
                                ijuhbikbnkjb
                              </div>
                              <div className=" p-3 bg-white">
                              <Flex className={'gap-x-1 mb-2'}>
                                <Text text={'Subtotal:'} as={'h3'} className={'text-headingC text-base font-dm'}/>
                                <Text text={'$44.00'} as={'h3'} className={'text-hoverheadeingC text-base font-dm font-bold'}/>
                              </Flex>
                              <Flex className={'gap-x-4'}>
                              <Text text={'View Cart'} as={'h3'} className={'text-hoverheadeingC text-sm font-dm font-bold py-3 px-6 border-2 border-black inline-block hover:text-white hover:bg-black duration-500'}/>
                              <Text text={'Checkout'} as={'h3'} className={'text-hoverheadeingC text-sm font-dm font-bold py-3 px-6 border-2 border-black inline-block hover:text-white hover:bg-black duration-500'}/>
                              </Flex>
                              </div>
                          </div> */}
                      </div>
                      </div>
                  
                  
                  </Flex>
              </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Category;
