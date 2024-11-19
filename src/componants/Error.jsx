import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Container from "./Container";
import Text from "./Text";
import { FaSearch } from "react-icons/fa";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Button from "./Button";

const Error = () => {
  return (
    <>
      <div className="py-14">
        <Container>
          <Text
            as="h1"
            text={"404"}
            className="text-hoverheadeingC text-[200px] font-sans font-bold"
          />
          <Text
            as="h1"
            text={
              "The page you were looking for couldn't be found. The page could be removed or you "
            }
            className="text-headingC text-[20px] font-sans "
          />
          <Text
            as="h1"
            text={
              "misspelled the word while searching for it. Maybe try a search?"
            }
            className="text-headingC text-[20px] font-sans mb-10"
          />
          <div className="relative mb-10">
            <Flex>
            <input type="text" placeholder="Type To Search" className="p-4 border w-[700px]  border-inputborder" />
            <span><FaSearch className=" top-1/2 -translate-y-1/2 absolute left-[670px] "/></span>
            </Flex>
          </div>
          <Link to={'/'}>
          <Button text="Back to Home" className={'py-3 text-sm font-bold font-sans text-center w-[170px] mb-10'}/>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default Error;
