import { Routes, Route, Link } from "react-router-dom";
import LeaderLogin from "./Login/LeaderLogin";
import LeaderJoin from "./Login/LeaderJoin";
import Main from "./main/Main";
import MemberLogin from "./Login/MemberLogin";
import MemberJoin from "./Login/MemberJoin";
import Auction from "./auction/Auction";
import background from "./main/videos/mainvideo.mp4";
import "./App.css";
import AuctionArticle from "./auction/AuctionArticle";

function App() {
  //tq 욕함? ('-` ;;)
  return (
    <div className="mainbody">
      <div className="mainvideo">
        <video loop autoPlay muted>
          <source src={background} type="video/mp4" />
        </video>
        <div className="app_body">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/leaderlogin" element={<LeaderLogin />} />
            <Route path="/leaderjoin" element={<LeaderJoin />} />
            <Route path="/memberlogin" element={<MemberLogin />} />
            <Route path="/memberjoin" element={<MemberJoin />} />
            <Route path="/auction" element={<Auction />} />
            <Route path="/auction/JSA" element={<AuctionArticle />} />
            <Route path="/auction/JSB" element={<AuctionArticle />} />


            {/* <Route path="/App" element={<AuctionArticle />} />
            <Route path="/JSA" element={<AuctionArticle />} />
            <Route path="/JSB" element={<AuctionArticle />} />
            <Route path="/SprA" element={<AuctionArticle />} />
            <Route path="/SprB" element={<AuctionArticle />} />
            <Route path="/SAMUL" element={<AuctionArticle />} />
            <Route path="/SIGAK" element={<AuctionArticle />} />
            <Route path="/UNUH" element={<AuctionArticle />} />
            <Route path="/CLDA" element={<AuctionArticle />} />
            <Route path="/CLDB" element={<AuctionArticle />} /> */}


          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
