import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useParams } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';

import TagList from '../../user-interface/TagList';
import { getOneArticle } from '../../../redux/store/asyncReducer';
import './OneArticle.css'


const OneArticle = ({article, error, getCurrentArticle}) => {
    const { id } = useParams()
    
    const {author, createdAt, title, tagList, body} = article
    // const dateRelease = format(new Date(createdAt), 'MMMM d, yyyy')
    const objAuthor = {...author}
    

    
    // const {username} = author
    // const tags = tagList.map(el => <button className='tag' key={uuidv4()}>{el}</button>)
    console.log(tagList)

    useEffect(() => {
        getCurrentArticle(id)
        return () => getCurrentArticle(null)
      }, [id, error, getCurrentArticle])

    return (
        <div className='wrapperArticle'>
            
            <div className='oneArticle'>
                <div className='articleOne'>
                    <div className='info'>
                        <h1 className='articleTitle'>{title}</h1>
                        <TagList tagList={tagList}/>
                        {/* <div>
                            {tagList.map(el => el ? <button className='tag' key ={uuidv4()}>{el}</button> : null)}
                        </div> */}
                        {/* {tagList} */}
                    </div>
                    <div className='userInfo'>
                        <div className='name'>
                            <div>{objAuthor.username}</div>
                            <span className='date'>{createdAt}</span>
                        </div>
                        <div className='avatar'>
                            <img className='userIcon' src={objAuthor.image} alt="#"/>
                        </div>
                    </div>

                    
                </div>

                <ReactMarkdown className='markDown' remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>

            </div>
        </div>
        
    )
}

function mapStateToProps(state) {
    // console.log(state)
    return {
        article: state.data.currentArticle,
        error: state.data.error
    }
}
function mapDispatchToProps(dispatch){
    return {getCurrentArticle: (id) => dispatch(getOneArticle(id))}
}

export default connect (mapStateToProps, mapDispatchToProps)(OneArticle);