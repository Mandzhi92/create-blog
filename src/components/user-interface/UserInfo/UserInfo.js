import React from 'react'
import { format } from 'date-fns'

const UserInfo = ({author, createdAt }) => {
    const dateRelease = format(new Date(createdAt), 'MMMM d, yyyy')
    // console.log(author)
    const {username, image} = author;
    
    return(
        <div className='userInfo'>

            <div className='userName'>
                <div className='name'>{username}</div>
                <span className='date'>{dateRelease}</span>
            </div>

            <div className='avatar'>
                <img className='userIcon' src={image} alt='#'/>
            </div>
            
        </div>
    )
}
export default UserInfo