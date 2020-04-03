import React from 'react';
import { Comment as CommentModel } from 'types'
import { Body2 } from "./Text";
import { Box } from './Box';

interface CommentProps {
  comment: CommentModel;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {

  return (
    <Box mBottom='xs'>
      <Body2><strong style={{ fontWeight: 600 }}>{comment.owner.name.toLowerCase()}</strong> {comment.message}</Body2>
    </Box>
  )
};

export default Comment;