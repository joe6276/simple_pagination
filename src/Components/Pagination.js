import React from 'react'

export const Pagination = ({postPerPage,totalPosts, paginate}) => {

    const pageNumber=[];


    for( let i =1 ; i <= Math.ceil(totalPosts/postPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <div>
            <nav>
                <ul className='pagination'>
                {pageNumber.map(number=>(
                    <li key ={number} className='page-item'>
                        <a  onClick={()=>{ paginate(number)}} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
