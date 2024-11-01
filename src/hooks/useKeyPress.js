import React from 'react';

const useKeyPress = (callback, key) => {
    React.useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.code === key) {
            callback();
          }
        }
        window.addEventListener('keydown', handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress)
        }
      }, [callback, key]);
}

export default useKeyPress;