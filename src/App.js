import menu from './Assides/Images/Menu.svg'
import menuDark from './Assides/Images/MenuDark.svg';
// import trending from './Assides/Images/Trending.svg';
// import subscription from './Assides/Images/Subscription.svg';
// import watch from './Assides/Images/Watch.svg';
// import game from './Assides/Images/Game.svg';
// import history from './Assides/Images/History.svg';
// import library from './Assides/Images/Library.svg';
// import liked from './Assides/Images/Liked.svg';
// import music from './Assides/Images/Music.svg';
// import settings from './Assides/Images/Settings.svg';
// import showmore from './Assides/Images/Showmore.svg';
// import favourite from './Assides/Images/Favourite.svg';
import search from './Assides/Images/Search.svg';
import video from './Assides/Images/Video.svg';
import combinedShape from './Assides/Images/CombinedShape.svg';
import ring from './Assides/Images/Ring.svg';
import logo from './Assides/Images/Logo.svg'


// components
import Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside';
import './App.css';
//pages
import Home from './Pages/Home/Home';
import Channel from './Pages/Channel/Channel';
import Video from './Pages/Video/Video';
import useTheme from './Hook/useTheme';

import { Route, Routes } from 'react-router-dom';
function App() {
  let[theme]=useTheme()

  return (
    < div className={theme!=='dark'?'white__body':null}>
      <div className="container">
       <Header menu={menu} logo={logo} lupa={search} video={video} combination={combinedShape} menuDark={menuDark} ring={ring}  />
       </div>
        <div className="container">
      <Aside/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/channel/:id" element={<Channel ring={ring} lupa={search}/>} />
        <Route path="/video/:id" element={<Video/>} />
        <Route path="*" />
      </Routes>
      </div>
      
     
    </div>
  );
}

export default App;
