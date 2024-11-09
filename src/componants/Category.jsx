import React, { useRef } from "react"
import Container from "./Container"
import Flex from "./Flex"
import Text from "./Text"
import Bars from '../assets/Icons/Bars'
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart } from "react-icons/fa";
import List from "./List"
import Listitems from "./Listitems"


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
               <Flex className={'items-center gap-x-2'}>

               <div onClick={handleBarDrop} className="cursor-pointer">
          <Bars />
           <div className="hidden" ref={BarRef} >
            <ul className="mt-4 text-bartext absolute bg-hoverheadeingC pl-5 w-[260px] ">
              <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Accesories</li>
              <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Furniture</li>
              <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Electronics</li>
              <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Clothes</li>
              <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Bags</li>
              <li className="py-4 hover:text-white hover:font-bold hover:ml-2 duration-300 ease-in-out">Home appliances</li>
            </ul>
             </div>
              </div>
               <Text text={'Shop by Category'} as={'h3'} />
               </Flex>
            </div>
            <div className="w-[70%] text-center relative">
            <input type="text" placeholder="Search Products" className="p-5 bg-white w-4/5" />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 right-40"/>
            </div>
            <div className="w-[15%]">
            <Flex className={'gap-x-2 justify-end'}>
            <Flex className="relative">
            <FaUser />
            <div onClick={handleDownDrop} className="cursor-pointer">
            <FaCaretDown />
            <div className="hidden" ref={DownRef}>
                 <div className="absolute right-0 mt-2 w-[200px] bg-white">
                  <div className="group">
                  <Listitems itemname={'My Account'} className="py-3 text-center group-hover:bg-black text-hoverheadeingC text-sm font-dm group-hover:font-bold group-hover:text-white duration-500"></Listitems>
                  </div>
                  <div className="group">
                  <Listitems itemname={'Log Out'} className="py-3 text-center group-hover:bg-black text-hoverheadeingC text-sm font-dm group-hover:font-bold group-hover:text-white duration-500"></Listitems>
                  </div>                  
                 </div>
            </div>
            </div>
            </Flex>

            <div onClick={handleCartDrop} className="cursor-pointer">
            <FaShoppingCart  className="ml-8"/>
            <div className="hidden relative" ref={CartRef}>
                 <div className="w-[150px] absolute right-0 mt-2 bg-red-300 ">
                     <div className=" p-4">
                      ijuhbikbnkjb
                     </div>
                     <div className=" p-4 bg-white">
                      ijuhbikbnkjb
                     </div>
                 </div>
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


// let drofRef = useRef(null)
// let handleDrop =()=>{
//  // console.log(drofRef.current);

//  if(drofRef.current.style.display=='block'){
//    drofRef.current.style.display=='none'
//  }else{
//    drofRef.current.style.display=='block'
//  }
 
// }


// <div onClick={handleDrop} className="cursor-pointer">
//           <Bars className=''/>
//             <div className="bg-teal-400 hidden " Ref={drofRef} >
//             <ul>
//                <li>shorif</li>
//                <li>shorif</li>
//                <li>shorif</li>
//                <li>shorif</li>
//                <li>shorif</li>           
//              </ul>
//             </div>
//              </div>
