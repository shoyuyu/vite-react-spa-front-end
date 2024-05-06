import { useState } from 'react';
import Nav from './Navigation';
// ロゴ画像のimport。このサイトはVite学習用に制作したものなので、ロゴ作成は棚上げ。
// import Logo from '/logo.svg';
import '@css/hamburger-menu.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <h1>
          {/* <img src={Logo} alt="サイト名" /> */}
          ソロキャン紹介サイト
        </h1>
        <div
          className={`hamburger ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <button type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      {isOpen && (
        <div className="slide-menu">
          <dl>
            <dt>ソロキャン紹介サイトの楽しみ方</dt>
            <dd>
              <Nav
                items={[
                  {
                    href: '/',
                    label: 'HOME',
                    description: 'ソロキャン紹介サイト トップ',
                  },
                  {
                    href: '/articles',
                    label: 'ARTICLES',
                    description: '全国のキャンプ場を紹介',
                  },
                ]}
              />
            </dd>
          </dl>
        </div>
      )}
    </>
  );
}

export default Header;
