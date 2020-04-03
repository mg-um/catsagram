import React from 'react';
import styled from 'styled-components';
import { Comment as CommentModel } from 'types';
import Comment from './Comment';
import { sizeToPx } from './Box';

interface CommentsProps {
  comments: CommentModel[];
}

const Comments: React.FC<CommentsProps> = ({ comments }) => {

  const [showComments, setShowComments] = React.useState(false);

  const handleShowComments = () => {
    setShowComments(true);
  }

  if (comments.length === 0) {
    return null;
  }

  return (
    <CommentsContainer>
      {showComments ?
        <>
          <SmallSeparator />
          {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
        </>
        :
        <ShowCommentsButton onClick={handleShowComments}>
          View all {comments.length} comments
        </ShowCommentsButton>
      }
    </CommentsContainer>
  )

}

export default Comments;

const ShowCommentsButton = styled.div`
  white-space: nowrap;
  width: 100%;
  cursor: pointer;
  padding: ${sizeToPx('sm')};
  color: #999;
  outline: unerline;
  font-size: 14px;
`

const CommentsContainer = styled.div`
  width: 100%;
`;

const SmallSeparator = styled.div`
  border-top: 1px solid rgba(219,219,219);
  width: 60px;
  margin: 4px 0px;
`