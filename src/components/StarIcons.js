import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './StarIcons.css';
const StarIcons = ({limit,name}) => {

    let array=[];
    for(let i=1;i<=limit ;i++)
    {
     array.push(<StarIcon/>)
  }
    return (
        <div className="Review-stars">
            <div>{name}</div>
             <div>{array.map(item=>(item))}</div>
        </div>
    )
}

export default StarIcons

