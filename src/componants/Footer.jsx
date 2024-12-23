import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Text from "./Text";
import List from "./List";
import Listitems from "./Listitems";
import Image from "./Image";
import Footerlogo from "../assets/footerlogo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                  <Text text={'MENU'} as={'h1'} className='text-base mb-4 font-bold font-dm text-hoverheadeingC'/>
                  <List className={'text-sm font-dm text-footercolor'}>
                    <Listitems itemname={'Home'}  className={'mt-2'}/>
                    <Listitems itemname={'Shop'} className={'mt-2'}/>
                    <Listitems itemname={'About'} className={'mt-2'}/>
                    <Listitems itemname={'Contact'} className={'mt-2'}/>
                    <Listitems itemname={'Journal'} className={'mt-2'}/>
                  </List>
                </div>
                <div className="">
                  <Text text={'SHOP'} as={'h1'} className='text-base mb-4 font-bold font-dm text-hoverheadeingC'/>
                  <List className={'text-sm font-dm text-footercolor'}>
                    <Listitems itemname={'Category 1'}  className={'mt-2'}/>
                    <Listitems itemname={'Category 2'} className={'mt-2'}/>
                    <Listitems itemname={'Category 3'} className={'mt-2'}/>
                    <Listitems itemname={'Category 4'} className={'mt-2'}/>
                    <Listitems itemname={'Category 5'} className={'mt-2'}/>
                  </List>
                </div>
                <div className="">
                  <Text text={'HELP'} as={'h1'} className='text-base mb-4 font-bold font-dm text-hoverheadeingC'/>
                  <List className={'text-sm font-dm text-footercolor'}>
                    <Listitems itemname={'Privacy Policy'}  className={'mt-2'}/>
                    <Listitems itemname={'Terms & Conditions'} className={'mt-2'}/>
                    <Listitems itemname={'Special E-shop'} className={'mt-2'}/>
                    <Listitems itemname={'Shipping'} className={'mt-2'}/>
                    <Listitems itemname={'Secure Payments'} className={'mt-2'}/>
                  </List>
                </div> 
              </Flex>
            </div>
            <div className="pl-36 pr-[260px] ">
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
                 <Link to={'/'}> <FaFacebookF /> </Link>
                 <Link> <FaLinkedinIn /> </Link>
                 <Link> <FaInstagram /> </Link>
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
