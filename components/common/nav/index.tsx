import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';

const Container = styled.nav`
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.lightGray300};

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 15px;
    border-top: 1px solid ${({ theme }) => theme.gray200};

    li {
      width: calc(100% / 5);
      text-align: center;
      font-size: 12px;
      cursor: pointer;

      :not(&:last-of-type) {
        border-right: 1px solid ${({ theme }) => theme.gray200};
      }

      .image-container {
        margin-bottom: 4px;
      }
    }
  }
`;

const icons: Array<keyof typeof iconToUrl> = ['home', 'chat', 'doc', 'love', 'user'];
const urlToIcon = {
  '': 'home',
  chat: 'chat',
};
const iconToUrl = {
  home: '/',
  chat: '/chat/list',
  doc: '/',
  love: '/',
  user: '/',
};

const Nav = () => {
  const router = useRouter();
  const [url, setUrl] = useState('home');

  useEffect(() => {
    const [, path] = router.pathname.split('/');
    setUrl(urlToIcon[path as keyof typeof urlToIcon]);
  }, [router.pathname]);

  return (
    <Container>
      <ul>
        {icons.map((icon) => (
          <li key={icon}>
            <Link href={iconToUrl[icon as keyof typeof iconToUrl]}>
              <a>
                <div className="image-container">
                  <Image
                    src={`/assets/common/${icon}${icon === url ? '' : '-blank'}.svg`}
                    alt={icon}
                    width={23}
                    height={23}
                  />
                </div>
                <span>{icon.toUpperCase()}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Nav;
