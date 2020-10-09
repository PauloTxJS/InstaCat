import React from 'react';

import Logo from './components/Logo';
import Photo from './components/Photo';

const Main = () => {

  return (
    <>
      <Logo />
      <Photo count={0} file={require("./assets/img/cat.png")} />
      <Photo count={0} file={require("./assets/img/cat2.png")} />
    </>
  );
    
};

export default Main;
