import React from 'react';

import {PostCommentStyle} from '../styles/posts';

function PostComment({data}) {
  return (
    <PostCommentStyle>
      <img className="avatar" src={data.author.avatar} />
      <p>
        <span><strong>{data.author.name}</strong><small>{data.date}</small></span>
        {data.content}
      </p>
    </PostCommentStyle>     
     
  )
}

export default PostComment;