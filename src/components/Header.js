import React, { Component } from 'react';

import { FaUserCircle } from 'react-icons/fa'; 

class Header extends Component {

  // Elemento escrito neste formato de classNamee precisa do método render()
  render() {
    return (
      <header>
        <div className="headerContent">
            <img src="http://localhost:8080/img/rocketseat.svg" />
            <div className="rightCorner">
                Meu perfil
                <span><FaUserCircle/></span>
            </div>
        </div>
      </header>
    )
  }
}

export default Header;