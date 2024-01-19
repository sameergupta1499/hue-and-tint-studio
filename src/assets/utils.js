function convertToObject(arr) {
    if (!arr || arr.length === 0) {
      return [];
    }
  
    const sizeToValue = {
      "m": 1.77777777778,
      "ss": 1,
      "sm": 1.25,
      "l": 0.52356,   // 628/1200
      "ls": 0.234375,  // 450/1920
      "lm": 0.5208333,  // 1000/1920 
      "ll": 0.4,        //  1000/2500 
    };
  
    return arr.map(item => {
      const type = item[2] && item[2].includes(".mp4") ? "video" : "image";
      const sizeValue = sizeToValue[item[1]];
  
      return {
        id: item[0],
        size: item[1],
        url: item[2],
        type: type,
        h: sizeValue,
      };
    });
  }
  
  export { convertToObject };
  