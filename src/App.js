import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTyping, stopTyping, updateInput, generateRandomKey, calculateAccuracy, updateTotalKeysPressed } from './actions';

import './styles.css';

const App = () => {
  const dispatch = useDispatch();
  const currentKey = useSelector((state) => state.currentKey);
  const typingStarted = useSelector((state) => state.typingStarted);
  const typingStopped = useSelector((state) => state.typingStopped);
  const input = useSelector((state) => state.input);
  const totalKeysPressed = useSelector((state) => state.totalKeysPressed);
  const accuracy = useSelector((state) => state.accuracy);
  useEffect(() => {
      if (typingStarted && !typingStopped) {
        const timer = setTimeout(() => {
          dispatch(stopTyping());
          dispatch(calculateAccuracy());
        }, 300000); // 5 minutes in milliseconds
    
        return () => {
          clearTimeout(timer);
          if (!typingStopped) {
            dispatch(calculateAccuracy());
          }
        };
      }
    }, [typingStarted, typingStopped, dispatch]);
    
  
      

  useEffect(() => {
    if (!typingStarted) {
      dispatch(generateRandomKey());
    }
  }, [typingStarted, dispatch]);

  const handleKeyDown = (event) => {
      if (!typingStarted) {
        dispatch(startTyping());
      }
    
      if (event.key === currentKey) {
        dispatch(updateInput(input + event.key));
        dispatch(generateRandomKey());
        dispatch(updateTotalKeysPressed(totalKeysPressed + 1));
      } else {
        // Handle incorrect key entry
        dispatch(stopTyping());
        dispatch(calculateAccuracy());
      }
    };
    
  const handleKeyUp = () => {
    if (typingStarted && !typingStopped) {
      dispatch(stopTyping());
      dispatch(calculateAccuracy());
    }
  };

  return (
    <div className="container">
      <div className="current-key">Current Key: {currentKey}</div>
      <input type="text" className="typing-box" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} autoFocus />
      <div className="info">Input: {input}</div>
      <div className="info">Total Keys Pressed: {totalKeysPressed}</div>
      <div className="info">Accuracy: {accuracy}%</div>
    </div>
  );
};

export default App;
