export const Capitalize = (data:string):string => {
    let result = "";
    let stringArray = data.split("")
    result = stringArray[0].toUpperCase() + stringArray.slice(1).join("");
    return result;
  };