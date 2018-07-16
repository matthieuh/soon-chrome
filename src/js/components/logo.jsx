import React from "react";
import icon from "../../img/logo.png"

class Logo extends React.Component {
  render () {
    return (
      <div>
        <img src={icon} width="106" height="29" />
        <style jsx>{`
          img {
            width: 106px;
            height: 29px;
          }
        `}</style>
      </div>
    )
  }
};

export default Logo;