import logo from './logo.svg';
import './App.css';
import Recommendations from './components/Recommendation';
import Header from './components/Header';
import Comments from './components/Comments';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <section>
      <Header />
      <VideoPlayer />
      <Recommendations />
      <Comments />
    </section>
  );
}

export default App;
