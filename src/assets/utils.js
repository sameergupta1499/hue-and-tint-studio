function convertToObject(arr) {
    if (!arr || arr.length === 0) {
      return [];
    }
  
    const sizeToValue = {
      "m": 1.77777777778,  //1920/1080    & 0.5625
      "ss": 1,     
      "sm": 1.25,          //1200/960    & .8
      "l": 0.52356,   // 628/1200        & 1.910828
      "ls": 0.234375,  // 450/1920       & 4.2666666
      "lm": 0.5208333,  // 1000/1920     & 1.92
      "ll": 0.4,        //  1000/2500    & 2.50
    };

    ////experimental width 

    // const sizeToValue = {
    //   "m": 0.5625,
    //   "ss": 1,     
    //   "sm": .8,
    //   "l": 1.910828,
    //   "ls": 4.2666666,
    //   "lm": 1.92,
    //   "ll": 2.50,
    // };
    
  
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
  