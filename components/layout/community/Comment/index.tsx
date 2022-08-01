import { addCommunityComment, deleteCommunityComment, updateCommunityComment } from '@api/firebase';
import { EditorGroup } from '@components/common/buttongroup';
import { PostMetaInfo } from '@components/common/meta';
import { RightButtonModal } from '@components/common/modal';
import styled from '@emotion/styled';
import Image from 'next/image';
import { FormEvent, useRef, useState } from 'react';

const WriteComment = styled.form`
  margin-top: 15px;
  padding-left: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  textarea {
    width: calc(100% - 50px);
    height: 50px;
    padding: 2% 5% 10% 2%;
    border-color: ${({ theme }) => theme.lineGray};
    resize: none;
  }

  button {
    width: 50px;
    height: 30px;
    margin: 10px 20px;
    background-color: ${({ theme }) => theme.purple};
    color: white;
    border: none;
    align-self: flex-end;
    cursor: pointer;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .updateComment {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    width: 300px;
    height: 300px;
    overflow: hidden;
    text-align: center;
    border-radius: 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);

    h4 {
      padding: 5%;
      font-size: 14px;
      font-weight: bold;
      border-bottom: 1px solid ${({ theme }) => theme.lightGray};
      margin-bottom: 15px;
    }
    textarea {
      border: none;
      line-height: 1.4;
      padding: 2%;
      resize: none;
      width: 80%;
      height: 100px;
    }
    div {
      position: absolute;
      width: 100%;
      bottom: 0;
      display: flex;
    }
    button {
      border: none;
      width: 50%;
      height: 45px;
      &:nth-of-type(1) {
        background-color: #f6f6f6;
        color: ${({ theme }) => theme.purple};
      }
      &:nth-of-type(2) {
        background-color: ${({ theme }) => theme.purple};
        color: white;
      }
    }
  }
`;

const CommenGroup = styled.div`
  padding-bottom: 20px;
  div[role~='none'] {
    margin-top: 5%;
    border-top: 1px solid ${({ theme }) => theme.lineGray};
  }

  h3 {
    margin-left: 20px;
    font-weight: bold;
    padding: 5% 0;
  }
`;

const ImageContainer = styled.div`
  margin-left: 20px;
`;

const Commentor = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 10px;
  padding: 10px 0;

  div:nth-of-type(2) {
    align-items: center;
  }

  p {
    width: 90%;
    margin-left: 20px;
    line-height: 1.3;
    padding-bottom: 1%;
  }
  &[class~='myComment'] {
    background-color: ${({ theme }) => theme.lightPurple};
    padding-bottom: 20px;

    div:nth-of-type(n + 2) {
      width: 30%;
    }
    a,
    button {
      line-height: 1.6;
    }
  }
`;

const Comments = ({ postId, comments, setComments }: commentType) => {
  const userId = 'mqcMcOXqvJwGR20waScC';
  const newComment = useRef<HTMLTextAreaElement>(null);
  const updatedComment = useRef<HTMLTextAreaElement>(null);

  const [isDeleteMode, onChangeDeleteMode] = useState<boolean>(false);
  const [isEditingMode, onChangeEditingMode] = useState<boolean>(false);
  const [selectedComment, onChangeSelectedComment] = useState<string>('');

  const changeSelectedComment = (id: string) => {
    onChangeSelectedComment(id);
  };

  const getMyComment = () => {
    if (!selectedComment) return;
    return comments.filter(({ id }) => id === selectedComment).map(({ content }) => content);
  };

  const updateComment = () => {
    if (!updatedComment.current || !updatedComment.current.value) return;
    updateCommunityComment(selectedComment, updatedComment.current.value);
    setComments(
      comments.map((comment) =>
        comment.id === selectedComment
          ? {
              ...comment,
              content: updatedComment.current ? updatedComment.current.value : comment.content,
            }
          : comment
      )
    );
    onChangeEditingMode(false);
  };

  const deleteComment = () => {
    if (!selectedComment) return;
    deleteCommunityComment(selectedComment);
    setComments(comments.filter(({ id }) => id !== selectedComment));
    onChangeDeleteMode(false);
  };

  const uploadComment = async (e: FormEvent<HTMLFormElement>) => {
    if (!newComment.current || !newComment.current.value) return;
    e.preventDefault();
    const newData = {
      communityId: postId,
      content: newComment.current.value,
      creationDate: new Date(),
      userId: userId,
    };
    const nickname = await addCommunityComment(newData);
    setComments([...comments, { ...newData, nickname }]);
    newComment.current.value = '';
  };

  return (
    <CommenGroup>
      <div role="none"></div>
      <h3>댓글</h3>
      {comments.map((comment) => (
        <Commentor
          key={comment.id}
          className={userId === comment.userId ? 'myComment' : ''}
          onClick={() => changeSelectedComment(comment.id)}
        >
          <ImageContainer>
            <Image
              className="profile"
              src="/assets/common/profile.svg"
              alt="프로필"
              width="30"
              height="30"
            />
          </ImageContainer>
          <PostMetaInfo
            nickname={comment.nickname}
            dateTime={new Date(comment.creationDate)}
            className="comment"
          ></PostMetaInfo>
          {userId === comment.userId ? (
            <EditorGroup
              className="comment"
              onChangeEditingMode={onChangeEditingMode}
              onChangeDeleteMode={onChangeDeleteMode}
            />
          ) : (
            ''
          )}
          <p>{comment.content}</p>
        </Commentor>
      ))}

      {isDeleteMode ? (
        <ModalContainer>
          <RightButtonModal
            modalContent="댓글을 삭제하시겠습니까?"
            rightButtonContent="댓글 삭제"
            onClickedRightBtn={deleteComment}
            isModalState={isDeleteMode}
            onChangeSetState={onChangeDeleteMode}
          />
        </ModalContainer>
      ) : (
        ''
      )}
      {isEditingMode ? (
        <ModalContainer>
          <div className="updateComment">
            <h4>댓글 수정</h4>
            <textarea className="update" ref={updatedComment} defaultValue={getMyComment()} />
            <div className="buttonGroup">
              <button onClick={() => onChangeEditingMode(false)}>취소</button>
              <button onClick={updateComment}>작성 완료</button>
            </div>
          </div>
        </ModalContainer>
      ) : (
        ''
      )}

      <WriteComment onSubmit={uploadComment}>
        <textarea className="post" ref={newComment} placeholder="댓글을 작성하세요" />
        <button>등록</button>
      </WriteComment>
    </CommenGroup>
  );
};

export default Comments;
