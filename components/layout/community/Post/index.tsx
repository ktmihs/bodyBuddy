import styled from '@emotion/styled';
import Image from 'next/image';
import { CommentCount, PostMetaInfo } from '@components/common/meta';
import { TopButton } from '@components/common/button';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { fetchPostingsByField } from '@api/firebase';
import { field } from '@data';

const PostListContainer = styled.div`
  height: 800px;
  overflow: auto;
  .observer {
    background-color: transparent;
    height: 5px;
  }
`;
const Post = styled.article`
  position: relative;
  height: 100px;
  padding: 3%;
  margin-left: 10px;
  margin-top: 5%;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    width: calc(100% - 120px);
    height: 80%;
    &:visited,
    & {
      color: inherit;
    }
    p {
      font-size: 16px;
    }

    p:nth-of-type(1) {
      font-weight: bold;
      margin-bottom: 5%;
    }
    p:nth-of-type(2) {
      line-height: 1.1;
      display: -webkit-box;
      word-wrap: break-word;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 10px;
  img {
    object-fit: cover;
  }
`;
const MetaContainer = styled.div`
  display: flex;
  margin-bottom: 0;

  div:nth-of-type(1) {
    width: 50%;
    align-self: flex-end;
  }
`;

const PostList = ({
  selectedItem,
  setStartAfter,
  startAfter,
  setPostList,
  postList,
}: PostListProps) => {
  const containerRef = useRef(null);
  const target = useRef(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const onIntersect = async ([entry]: any, observer: IntersectionObserver) => {
    if (entry.isIntersecting && !isLoaded && startAfter !== null) {
      observer.unobserve(entry.target);
      setIsLoaded(true);
      const result = await fetchPostingsByField(field[+selectedItem], startAfter);
      await setPostList((currentList: post[]) => [...currentList, ...(result?.result as post[])]);
      await setStartAfter(result?.key);
      setIsLoaded(false);
    } else return;
  };

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(target.current);
    }
    return () => {
      observer && observer.disconnect();
      setIsLoaded(false);
    };
  }, [startAfter]);

  return (
    <PostListContainer ref={containerRef}>
      {postList.map((post) => (
        <Post key={post.id}>
          <Link
            href={{
              pathname: `/community/${post.id}`,
            }}
            as={`/community/${post.id}`}
          >
            <a>
              <p>{post.title}</p>
              <p>{post.content}</p>

              {post.images?.length ? (
                <ImageContainer>
                  <Image src={post.images[0]} alt="첨부한 사진" width="100" height="80" />
                </ImageContainer>
              ) : (
                ''
              )}
            </a>
          </Link>

          <MetaContainer>
            <PostMetaInfo nickname={post.nickname} dateTime={post.creationDate} className="list" />
            <CommentCount comment={post.totalComments} />
          </MetaContainer>
        </Post>
      ))}
      <div className="observer" ref={target} />
      <TopButton containerRef={containerRef} />
    </PostListContainer>
  );
};

export default PostList;
