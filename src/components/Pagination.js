import { Button } from '@material-ui/core';
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

               <Button variant="contained" color="secondary" onClick={()=>paginate(number)}  className='page-link'>{number}</Button>

               </li>
               ))
               } 
            </ul>
        </nav>
    )
}
