import './App.css';
import Header from './Components/Header/Header';
import IntroPage from './Components/IntroPage/IntroPage';
import Aboutus from './Components/Aboutus/Aboutus';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroPage />     
      <Aboutus />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
