import React from 'react';
import Routes from '../../Routes';
import Header from '../../containers/Header';
import Footer from '../../containers/Footer';
import './App.scss';

const App = () => (
  <div className="root_page">
    <Header />
    <main className="main">
      <Routes />
    </main>
    <Footer />
  </div>
);

export default App;
