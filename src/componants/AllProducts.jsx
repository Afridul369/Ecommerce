import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Pagination from './Pagination'

const AllProducts = () => {
  return (
    <div>
       
    <Container className={'py-[200px]'}>
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