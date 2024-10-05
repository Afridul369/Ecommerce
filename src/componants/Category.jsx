import React from "react"
import Container from "./Container"
import Flex from "./Flex"
import Text from "./Text"
import Bars from '../assets/Icons/Bars'
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart } from "react-icons/fa";


const Category = () => {
  return (
    <>
      <div className="bg-categorybg py-7">
        <Container>
          <Flex className={'justify-between  items-center'}>
            <div className="w-[15%]">
               <Flex className={'items-center gap-x-2'}>
               <Bars/>
               <Text text={'Shop by Category'} as={'h3'} />
               </Flex>
            </div>
            <div className="w-[70%] text-center relative">
            <input type="text" placeholder="Search Products" className="p-5 bg-white w-4/5" />
            <FaSearch className="absolute top-1/2 -translate-y-1/2 right-40"/>
            </div>
            <div className="w-[15%]">
            <Flex className={'gap-x-2 justify-end'}>
            <FaUser />
            <FaCaretDown />
            <FaShoppingCart  className="ml-8"/>
            </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Category;
