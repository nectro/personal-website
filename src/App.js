import './App.css';
import Header from './Components/Header/Header';
import IntroPage from './Components/IntroPage/IntroPage';
import Aboutus from './Components/Aboutus/Aboutus';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroPage />     
      <Aboutus />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
