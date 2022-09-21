import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import  userEvent from'@testing-library/user-event'
import {render, screen} from '@testing-library/react'

//Testing import component

import Header from "./Header";

describe('All testings', () => { 
  let header,img;

  beforeEach(()=>{
    return(Header);

    header=screen.getAllByAltText("Emoji Search")
    
  })

  test('Header içeriği var mı?', () => { 
   
   })
 })