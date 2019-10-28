import React from 'react';

import {PostCardStyle, PostUserStyle, PostTextStyle} from '../styles/posts';

import PostCommentComponent from './PostComment';

function PostCard({data}) {
  return (
    <PostCardStyle>
      <PostUserStyle>
        <img className="avatar"  src={data.author.avatar}></img>
        <p>{data.author.name}<small>{data.date}</small></p>
      </PostUserStyle>
    
      <PostTextStyle><p>{data.content}</p></PostTextStyle>

      {data.comments.map(comment => <PostCommentComponent key={comment.id} data={comment} />)}
    
    </PostCardStyle>     
  )
}

export default PostCard;