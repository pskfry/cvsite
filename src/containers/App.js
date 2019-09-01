import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Projects from '../components/Projects/Projects';
import Content from '../components/UI/Content/Content';
import MainNav from '../components/UI/MainNav/MainNav';
import Picture from '../components/Layout/Picture/Picture';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
      <Picture />
      <MainNav />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
