import React, {useEffect, useState} from 'react';
import classes from './Paginator.module.css';
import ReactPaginate from 'react-paginate';


const Paginator = ({totalItemsCount, pageSize, onpageChanged, selectedPage}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize) ;
    let pages = [];
    
    for(let i=1; i <= pagesCount; i++){
        pages.push(i)
    }
    
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(pagesCount);
    const [currentPage, setCurrentPage] = useState(selectedPage)
    
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setCurrentPage(selectedPage);
        onpageChanged(selectedPage+1)
    };

    return (
        <div>
            <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={classes.active}/>
            
        </div>
    )
}

export default Paginator