import React from 'react';

import EstilosGlobais from './styles/global';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      <Main />     
      <Footer />    
    </>
  )
}

export default App;