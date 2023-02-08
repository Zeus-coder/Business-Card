import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import CardInfo from './components/CardInfo';
import PictureHolder from './components/PictureHolder';

import '../src/App.css';



function Page(){
  return(
    <>
      <PictureHolder/>
      <CardInfo/>
      <Footer/>

    </>
  )

};





const root  = ReactDOM.createRoot(document.getElementById("root"));


root.render(<Page/>)