import React from 'react';
import './Article.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'
import UserInfo from '../UserInfo';

const Like = () => {
    return (
        <button className='likeValue'>{'♡ 0'}</button>
    )
}


const Article = ({ author, description, createdAt, title, tagList, slug, full }) => {
    // console.log(tagList)
    const link = full ? (
        <h1 className='articleTitle'>{title}</h1>
    ) : ( <Link key={slug}
            to={`articles/${slug}`}>
            <h1 className='articleTitle'>{title}</h1>
        </Link> )

    return (
        <div className='article'>

            <div className='info'>
                <div className='title'>
                    {link}
                    <Like/>
                </div>
                
                <div className='tagBox'>
                    {tagList.map(el => el ? <button className='tag' key ={uuidv4()}>{el}</button> : null)}
                </div>
                <p className='description'>{description}</p>
            </div>

            <UserInfo author={author} createdAt={createdAt} slug={slug} full={full}/>
        </div>
    )
}

export default Article;