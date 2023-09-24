import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './component/Header/Header.jsx';
import Projects from './component/Content/Projects/Projects.jsx';
import VideoDemo from './component/Content/VideoDemo/VideoDemo';
import Works from './component/Content/Works/Works';
import Assistants from './component/Content/Assistants/Assistants';
import FormContact from './component/Content/FormContact/FormContact';
import Backed from './component/Content/Backed/Backed';
import Press from './component/Content/Press/Press';
import Podсasts from './component/Content/Podсasts/Podсasts';
import ChatContant from './component/Content/ChatContant/ChatContant';
import Footer from './component/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <div data-aos="fade-up">
        <Header />
        <div data-aos="fade-up">
          <Projects />
        </div>
        <div data-aos="fade-up">
          <VideoDemo />
        </div>
        <div data-aos="fade-up">
          <Works />
        </div>
        <div data-aos="fade-up">
          <Assistants />
        </div>
        <div data-aos="fade-up">
          <FormContact />
        </div>
        <div data-aos="fade-up">
          <Backed />
        </div>
        <div data-aos="fade-up">
          <Press />
        </div>
        <div data-aos="fade-up">
          <Podсasts />
        </div>
        <div data-aos="fade-up">
          <ChatContant />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
