import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Middle from "./components/Middle";
import './index.css';

function App() {
  return (
    <div style={{backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-film-video-tape-gray-banner-image_14622.jpg")`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh' }}>
      
       
       <Header/>
       <main>
        <Container>
          <div className="mid">
            <Middle/>
          </div>

        </Container>
       </main>
       <Footer />
      
    </div>
  );
}

export default App;
