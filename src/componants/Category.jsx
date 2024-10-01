import React from "react"
import Container from "./Container"
import Flex from "./Flex"
import Text from "./Text"
import Bars from '../assets/Icons/Bars'

const Category = () => {
  return (
    <>
      <div className="bg-categorybg py-7">
        <Container>
          <Flex className={'justify-between items-center'}>
            <div className="w-[15%]">
               <Flex className={'leading-3 gap-x-2'}>
               <Bars/>
               <Text text={'Shop by Category'} as={'h3'} />
               </Flex>
            </div>
            <div className="w-[70%]"></div>
            <div className="w-[15%]"></div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Category;
