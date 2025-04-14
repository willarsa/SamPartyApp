import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function ColorfulText({text}){
    const colors = ['#ff371b', '#34A853', '#ffc81b', '#4285F4']
    
      return ( /*the map function takes each char at its index and applies the function with the span in it*/
        <h1 style={{ display: 'flex', flexWrap: 'wrap' }}> 
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="animated-letter"
              style={{
                color: colors[index % colors.length],
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}   
            </span> /* {char === ' ' ? '\u00A0' : char} is a ternary expression for if/else. if blank use \u00A0, else just the character. \u00A0 is a non-breaking space*/
          ))}
        </h1>
      );
    }
    
export function RotatingBox1({text}){
    function handleClick() {
        navigate("/SamsPartyApp/GameSelect");
      }

      return(
        <button button onClick={handleClick} className="option clip-one bounce-button">{text}</button>
      );
    }
    
export function RotatingBox2({text}){
    function handleClick() {
        alert("Join Button Pressed");
      }

      return(
        <button button onClick={handleClick} className="option clip-two bounce-button2">{text}</button>
      );
    }

