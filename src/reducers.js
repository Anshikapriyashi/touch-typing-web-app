// reducers.js
const initialState = {
      currentKey: '',
      typingStarted: false,
      typingStopped: false,
      input: '',
      totalKeysPressed: 0,
      accuracy: 100,
    };
    
    const generateRandomKey = () => {
      const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
      const randomIndex = Math.floor(Math.random() * keys.length);
      return keys[randomIndex];
    };
    
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case 'START_TYPING':
          return {
            ...state,
            typingStarted: true,
            typingStopped: false,
          };
        case 'STOP_TYPING':
          return {
            ...state,
            typingStopped: true,
          };
        case 'UPDATE_INPUT':
          return {
            ...state,
            input: action.payload,
          };
          case 'GENERATE_RANDOM_KEY':
            const newKey = generateRandomKey();
            return {
              ...state,
              currentKey: newKey,
            };
          
        case 'UPDATE_TOTAL_KEYS_PRESSED':
          return {
            ...state,
            totalKeysPressed: action.payload,
          };
          case 'CALCULATE_ACCURACY':
            const { input, totalKeysPressed, currentKey } = state;
            const incorrectKeys = Array.from(input).filter((key, index) => key !== currentKey.charAt(index));
            const accuracy = ((totalKeysPressed - incorrectKeys.length) / totalKeysPressed) * 100;
            return {
              ...state,
              accuracy: isNaN(accuracy) ? 0 : accuracy,
            };
          

        default:
          return state;
      }
    };
    
    export default reducer;
    