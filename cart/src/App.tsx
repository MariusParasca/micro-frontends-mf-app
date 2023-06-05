import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'host/Header';
import Footer from 'host/Footer';

import 'remixicon/fonts/remixicon.css';
import './index.scss';
import CartContent from './CartContent';

const App = () => (
  <div className='mt-10 text-3xl mx-auto max-w-6xl'>
    <Header />
    <div className='my-10'>
      <CartContent />
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
