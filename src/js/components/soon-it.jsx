import React from "react";
import { hot } from "react-hot-loader";
import Auth from './auth.jsx';

class SoonIt extends React.Component {
  render () {
    return (
      <div>
        <Auth />

        <style jsx>{`
          div {
            width: 260px;
            padding: 20px 16px;
            background: -webkit-linear-gradient(120deg, #e60ba1, #ff6663);
            background: linear-gradient(-30deg, #e60ba1, #ff6663);
            flex: 1;
            color: white;
          }
        `}</style>
      </div>
    )
  }
};

export default hot(module)(SoonIt)