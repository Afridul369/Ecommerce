import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Pagination from './Pagination'
import Text from './Text'
import { FaAngleRight } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  let data = useSelector(state=>(state.breadCrumb.previousValue))
  return (
    <div>
       
    <Container className={'pb-[200px]'}>
      <div className="py-16">
        <Text as='h1' text={'Products'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-1'/>
        <Flex className={'items-center '}>
          <Link to={data=="Home"?'/':`/${data}`}>
            <Text as='p' text={`${data}`} className='text-headingC text-[12px] font-sans '/>
          </Link>
          <FaAngleRight className='text-headingC text-sm'/>
          <Text as='p' text={'Shop'} className='text-headingC text-[12px] font-sans '/>
        </Flex>
      </div>
      <Flex >
        <div className="w-3/12"></div>
        <div className="w-9/12">
        <Pagination itemsPerPage={12} />
        </div>
      </Flex>
    </Container>

    </div>
  )
}

export default AllProducts