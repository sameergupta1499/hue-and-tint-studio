function convertToObject(arr) {
    if (!arr || arr.length === 0) {
      return [];
    }
  
    const sizeToValue = {
      "m": 1.77777777778,
      "ss": 1,
      "sm": 1.25,
      "l": 0.52356,
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
  