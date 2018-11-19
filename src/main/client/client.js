import React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from '../app/app';
import './client.scss';

window.mixpanel = {
  track(event){
    console.log(event);
  }
};

//yandex metrika
window.yaCounter = new Ya.Metrika({id: 48461990});


hydrate((
  <BrowserRouter>
    <App/>
  </BrowserRouter>
), document.getElementById("root"));
