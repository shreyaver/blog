import React from 'react';
import Header from '../Header/Header.Component';
import Footer from '../Footer/Footer.Component';
import './LoadingPage.Component.css';

const LoadingPage = (props) => {
  return (
    <div>
      <Header />
      <div className = "Loading-page"> 
      {/* <i class="icomoon icon-confused"></i> */}
      Loading...
      </div>
      <Footer />
    </div>
  );
}

export default LoadingPage;