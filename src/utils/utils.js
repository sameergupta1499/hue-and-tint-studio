// Define the throttle function
function throttle(func, interval) {
    let lastExecutionTime = 0;
  
    return function (...args) {
      const currentTime = Date.now();
      if (currentTime - lastExecutionTime >= interval) {
        func(...args);
        lastExecutionTime = currentTime;
      }
    };
  }