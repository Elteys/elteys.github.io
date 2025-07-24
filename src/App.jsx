import { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import TextBox from './TextBox';
import Gallery from './Gallery';

export default function App() {
  const [view, setView] = useState('home');

  return (
    <>
      <Header />
      <Nav
        onShowHome={() => setView('home')}
        onShowGallery={() => setView('gallery')}
      />
      {view === 'home' && <TextBox />}
      {view === 'gallery' && <Gallery />}
    </>
  );
}
