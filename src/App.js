import Header from './components/Header';
import TextTile1 from './components/TextTile1';
import ImageTile from './components/ImageTile';
import Banner1 from './components/Banner1';
import TextTile2 from './components/TextTile2';
import IconTile from './components/IconTile';
import Banner2 from './components/Banner2';
import StarTile from './components/StarTile';
import CarouselContainer from './components/CarouselContainer';
import Footer from './components/Footer';

import './App.css';
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TextTile1 />
      <ImageTile />
      <Banner1 />
      <TextTile2 />
      <IconTile />
      <Banner2 />
      <StarTile />
      <CarouselContainer />
      <Footer />
    </div>
  );
}

export default App;
