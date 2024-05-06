import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Top from '@pages/Top';
import Articles from '@pages/Articles';
import '@css/common.css';
import '@css/header.css';
import '@css/top.css';
import '@css/articles.css';

function App() {
  return (
    <div>
      <div className="scroll-wrapper">
        <div className="scroll-bg">
          <span></span>
        </div>
        <div className="scroll-container">
          <div className="main-contents">
            <Header />
            <main>
              <Router>
                <Routes>
                  <Route path="/" element={<Top />} />
                  <Route path="/articles" element={<Articles />} />
                </Routes>
              </Router>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
