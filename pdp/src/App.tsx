import React from 'react';
import ReactDOM from 'react-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';
import Header from 'host/Header';
import Footer from 'host/Footer';
import SafeComponent from './SafeComponent';
import PDPContent from './PDPContent';
import { Route, BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <div className='mt-10 text-3xl mx-auto max-w-6xl'>
            <SafeComponent>
              <Header />
            </SafeComponent>
            <div className='my-10'>
              <Outlet />
            </div>
            <Footer />
          </div>
        }
      >
        <Route path='/products/:id' element={<PDPContent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById('app'));
