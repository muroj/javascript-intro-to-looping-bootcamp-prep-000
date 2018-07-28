function forLoop(a) {
  
  for (let i = 0; i < 25; i++) {
    
    if (i !== 1) {
      a.push("I am ${i} strange loops.");
    } else {
      a.push("I am ${i} strange loop.");
    }
  }
  
  return a;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  
  return "done"
}

function doWhileLoop(anArray) {
  do {
    
  } while
}