import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Header";
import Middle from "./Middle";
import Footer from "./Footer";

function Home() {
    return (
        <>

                <Header></Header>
                <Middle></Middle>
                <Footer></Footer>
                <div style={{backgroundImage: `url("https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-film-video-tape-gray-banner-image_14622.jpg")`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100vw',
                    height: '84vh' }}>
                </div>



        </>
    );
}

export default Home;