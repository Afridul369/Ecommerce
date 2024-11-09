import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Text from "./Text";
import List from "./List";
import Listitems from "./Listitems";
import Image from "./Image";
import Footerlogo from "../assets/footerlogo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-categorybg py-20 w-full">
        <Container>
            <div className=" flex mb-16">
            <Flex>
            <div>
              <Flex className={'gap-x-36'}>
                <div className="">
                  <Text text={'MENU'} as={'h1'} className='text-base font-bold font-dm text-hoverheadeingC'/>
                  <List className={'text-sm font-dm text-footercolor'}>
                    <Listitems itemname={'Home'}  className={'mt-1.5'}/>
                    <Listitems itemname={'Shop'} className={'mt-1.5'}/>
                    <Listitems itemname={'About'} className={'mt-1.5'}/>
                    <Listitems itemname={'Contact'} className={'mt-1.5'}/>
                    <Listitems itemname={'Journal'} className={'mt-1.5'}/>
                  </List>
                </div>
                <div className="">
                  <Text text={'SHOP'} as={'h1'} className='text-base font-bold font-dm text-hoverheadeingC'/>
                  <List className={'text-sm font-dm text-footercolor'}>
                    <Listitems itemname={'Category 1'}  className={'mt-1.5'}/>
                    <Listitems itemname={'Category 2'} className={'mt-1.5'}/>
                    <Listitems itemname={'Category 3'} className={'mt-1.5'}/>
                    <Listitems itemname={'Category 4'} className={'mt-1.5'}/>
                    <Listitems itemname={'Category 5'} className={'mt-1.5'}/>
                  </List>
                </div>
                <div className="">
                  <Text text={'HELP'} as={'h1'} className='text-base font-bold font-dm text-hoverheadeingC'/>
                  <List className={'text-sm font-dm text-footercolor'}>
                    <Listitems itemname={'Privacy Policy'}  className={'mt-1.5'}/>
                    <Listitems itemname={'Terms & Conditions'} className={'mt-1.5'}/>
                    <Listitems itemname={'Special E-shop'} className={'mt-1.5'}/>
                    <Listitems itemname={'Shipping'} className={'mt-1.5'}/>
                    <Listitems itemname={'Secure Payments'} className={'mt-1.5'}/>
                  </List>
                </div> 
              </Flex>
            </div>
            <div className="pl-56 pr-[260px] ">
            <Text text={'(052) 611-5711'} as={'h1'} className='text-base font-bold font-dm text-hoverheadeingC pb-2'/>
            <Text text={'company@domain.com'} as={'h1'} className='text-base font-bold font-dm text-hoverheadeingC pb-4'/>
            <Text text={'575 Crescent Ave. Quakertown, PA 18951'} as={'h1'} className='text-sm font-dm text-footercolor'/>
            </div>
            <div className="">
              <Image imgSrc={Footerlogo} imgAlt={'footerlogo'}/>
            </div>
            </Flex>
            </div>

            <Flex className="justify-between">
              <Flex className="gap-x-5">
                 <a href=""> <FaFacebookF /> </a>
                 <a href=""> <FaLinkedinIn /> </a>
                 <a href=""> <FaInstagram /> </a>
              </Flex>
              <div className="">
              <Text text={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} as={'h1'} className='text-sm font-dm text-footercolor '/>
              </div>
            </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
