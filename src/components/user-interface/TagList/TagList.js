import React from 'react'
import { v4 as uuidv4 } from 'uuid'; 



const TagList = ({tagList}) => {
    console.log(tagList)
    const createTagList = (list) => {
        list.map(el =>  
        <li className='tags' key ={uuidv4()}>{el}</li>
        )
    }
    const tags = tagList ? createTagList(tagList) : null
    return <ul className='tagBox'>{tags}</ul>
}

export default TagList;