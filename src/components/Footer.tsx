import Nav from './Navigation';
import '@css/footer.css';

function Footer() {
  return (
    <footer>
      <div>
        <Nav
          items={[
            {
              href: '/',
              label: 'HOME',
            },
            {
              href: '/articles',
              label: 'ARTICLES',
            },
          ]}
        />
        <small>&copy;&nbsp;ソロキャン紹介サイト. All Rights Reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
