var katzDeliLine = [];

function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(`${personName}`);
  return (`Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  let i =0;
  while (i < katzDeliLine.length){
  i++;
  }
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    
    return (`Currently serving ${katzDeliLine.shift()}.`);
  }
}

var line = [];

function currentLine(katzDeliLine){
  for (let j=0; j <katzDeliLine.length; j++){
<<<<<<< HEAD
    line.push(j+1+'.'+' '+ katzDeliLine[j]);
=======
    line.push(j+1+'.'+katzDeliLine[j]);
>>>>>>> 13a5d4dc099af21d821d6e07b39fb08659995fbe
  }
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
<<<<<<< HEAD
    return ("The line is currently: " + line.join(', '))
=======
    return ("The line is currently:" + line)
>>>>>>> 13a5d4dc099af21d821d6e07b39fb08659995fbe
  }
  
}
  
  


<<<<<<< HEAD
/*takeANumber(katzDeliLine, "Ada");
=======
takeANumber(katzDeliLine, "Ada");
>>>>>>> 13a5d4dc099af21d821d6e07b39fb08659995fbe
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

currentLine(katzDeliLine);

nowServing(katzDeliLine);

currentLine(katzDeliLine);

takeANumber(katzDeliLine, "Matz");
currentLine(katzDeliLine);
nowServing(katzDeliLine);
<<<<<<< HEAD
currentLine(katzDeliLine);*/
=======
currentLine(katzDeliLine);
>>>>>>> 13a5d4dc099af21d821d6e07b39fb08659995fbe
