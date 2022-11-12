import { ThemeProvider } from "styled-components";
// import { Navigation } from "swiper";
import GlobalStyles from "./styles/globalStyles";
import {light} from './styles/themes'

import Navigation from './components/navigation/navigation';
import Home from './section/home/index';
import AboutUs from './section/aboutus/index';
import Roadmap from './section/roadmap/index';
import Showcase from './section/showcase/index';
import Team from './section/team/index';
import Footer from './section/footer/index';


function App() {
  return (
    <>

    <GlobalStyles/>

    <ThemeProvider theme={light}>
    <Navigation/>
    <Home/>
    <AboutUs />
    <Roadmap />
    <Showcase />
    <Team />
    <Footer />
    </ThemeProvider>
    
    </>
  );
}

export default App;
