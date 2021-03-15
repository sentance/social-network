import React from 'react';
import classes from './Paginator.module.css';

import Pagination from "react-js-pagination";

const Paginator = ({totalItemsCount, pageSize, onpageChanged, selectedPage}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize) ;
    let pages = [];
    
    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }

    
    const handlePageClick = (page) => {
        onpageChanged(page)
    };

    return (
        <div>
            <Pagination
                activePage={selectedPage}
                itemsCountPerPage={pageSize}
                totalItemsCount={pagesCount}
                pageRangeDisplayed={5}
                onChange={handlePageClick}
                activeClass={classes.active}
            />
      
            
        </div>
    )
}

export default Paginator