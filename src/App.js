import './components/landing-page/LandingPage';
import { LandingPage, About } from './components/landing-page/LandingPage';
import { Projects } from './components/projects/Projects';
import { GitHub } from './components/github/GitHub';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <About />
      <Projects />
      <GitHub />
      <Footer />
    </div>
  );
}

export default App;
