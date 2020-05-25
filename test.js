function findCamelCase(strs, complexString) {
  let subStrings = complexString.split(/(?=[A-Z])/);

  let returnValue = true;
  subStrings.map((str) => {
    if (!strs.includes(str.toLowerCase())) {
      returnValue = false;
      return;
    }
  });

  return returnValue;
}

console.log(findCamelCase(["is", "a", "right"], "IsARight"));
