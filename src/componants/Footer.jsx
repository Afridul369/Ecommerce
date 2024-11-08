import React from "react";
import Container from "./Container";
import Flex from "./Flex";

const Footer = () => {
  return (
    <>
      <div className="bg-categorybg py-20">
        <Container>
            <Flex>
            <div className="w-2/5 bg-teal-400">
               <Flex className={''}>
               <div className="w-1/3 bg-red-400">
                
               </div>
                <div className="w-1/3">2</div>
                <div className="w-1/3">3</div>
               </Flex>
            </div>
            <div className="w-2/5">2</div>
            <div className="w-1/5">3</div>
            </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
