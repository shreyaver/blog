import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './NotFoundPage.css';

const NotFoundPage = (props) => {
  return (
    <div>
      <Header />
      <div className = "Not-found-page"> 
      {/* <i class="icomoon icon-confused"></i> */}
      Page Not Found
      </div>
      <Footer />
    </div>
  );
}

export default NotFoundPage;