import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
