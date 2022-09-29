import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { HomePage } from './components/home-page/home-page';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}>
          </Route>
        </Routes>
      </div >
    </Router>
  );
}
export default App;
