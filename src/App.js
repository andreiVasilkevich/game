import React from 'react'
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { HomePage } from './pages/home-page';
import { Header } from './component/header';
import { store } from './redux';
import { GamePage } from './component/game-page';
import { OrderPage } from './component/order-page/order-page';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path='/app/:title' element={<GamePage />} >
            </Route>
            <Route path='/order' element={<OrderPage />} >
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>


  );
}

export default App;
