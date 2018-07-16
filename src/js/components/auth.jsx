import React from "react";
import Logo from './logo.jsx';

class Auth extends React.Component {
  render () {
    return (
      <div>
        <Logo />
        <h1>Log in</h1>
        <input type="test" placeholder="email" />
        <input type="test" placeholder="password" />
        <button>Log in</button>
        
        <style jsx>{`
          div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          Logo {
            flex: 1;
            justify-content: center;
          }
        `}</style>
      </div>
    )
  }
};

export default Auth;