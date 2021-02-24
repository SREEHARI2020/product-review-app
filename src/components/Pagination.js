import React from 'react'
import './Pagination.css'

export const Pagination = ({totalposts,postsperpage,paginate}) => {

    const PageNumbers=[];
    for(let i=1;i<=Math.ceil(totalposts/postsperpage) ;i++)
        {
            PageNumbers.push(i);
        }
    return (
        <nav>
            <ul className='pagination'>
               {
               PageNumbers.map(number=>(<li key={number} className='page-item'>

               <button onClick={()=>paginate(number)}  className='page-link'>{number}</button>

               </li>
               ))
               } 
            </ul>
        </nav>
    )
}
