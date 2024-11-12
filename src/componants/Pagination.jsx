import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Products from './Products'
import ShopProduct from './ShopProduct';
import Data from '../componants/Data'
import Puta from '../assets/puta.png'




function Items({ currentItems }) {
  return (
    <>
      <div className="flex flex-wrap gap-x-2">
      {currentItems &&
        currentItems.map((item) => (
          <div className=''>
            <ShopProduct title={item.title} image={item.image} price={item.price} tag={item.tag}/>
          </div>
        ))}
      </div>
    </>
  );
}

function Pagination({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);


  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default Pagination