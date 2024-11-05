import React from 'react';
import App from '../App';
import { MenuData } from './MenuData';
import {Logo} from '../assets/icons'



function MenuSidebar() {
  return (
    
     

     <div className="Sidebar">
      <span className="header"><img src={Logo} alt="" /></span>
      <h2>Hiphonic</h2>

      <ul className="List">
        {MenuData.map((val,key)=> {
          return (
          <li 
          key ={key} 
          className="row"
          onClick={()=>{window.location.pathname = val.link}}> 
            {" "}
             <div id="icons">{val.icon}</div>
             <div id="name">
              {val.title}
             </div>
             </li>);
        })}
        </ul>
     </div>

  );
}

export default MenuSidebar;

