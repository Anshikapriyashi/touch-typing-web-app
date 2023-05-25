// actions.js
export const startTyping = () => ({
      type: 'START_TYPING',
    });
    
    export const stopTyping = () => ({
      type: 'STOP_TYPING',
    });
    
    export const updateInput = (input) => ({
      type: 'UPDATE_INPUT',
      payload: input,
    });
    
    export const generateRandomKey = () => ({
      type: 'GENERATE_RANDOM_KEY',
    });
    
    export const updateTotalKeysPressed = (totalKeysPressed) => ({
      type: 'UPDATE_TOTAL_KEYS_PRESSED',
      payload: totalKeysPressed,
    });
    
    export const calculateAccuracy = () => ({
      type: 'CALCULATE_ACCURACY',
    });
    