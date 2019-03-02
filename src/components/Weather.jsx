import React, { Component } from "react";
import "../App.css";

const Weather = props => (
  <div className="weather__info">
    {props.city &&
      props.country && (
        <p className="weather__key">
          <img src={require("../img/icon2.png")} />
          Location :
          <span className="weather__value">
            {props.city},{props.country}
          </span>
        </p>
      )}
    {props.temperature && (
      <p className="weather__key">
        <img src={require("../img/icon1.png")} />
        Temperature :{" "}
        <span className="weather__value">{props.temperature}</span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        <img src={require("../img/humidity.png")} />
        Humidity : <span className="weather__value">{props.humidity}</span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        <img src={require("../img/condition.png")} />
        Conditions :<span className="weather__value"> {props.description}</span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
