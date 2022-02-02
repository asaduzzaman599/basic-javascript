// grading check system with if-else
console.log("Grading System");      //Grading System
/*
    input       output
  90 - 100 --->  'A+'
  80 - 89  --->  'A'
  70 - 79  --->  'A-'
  60 - 69  --->  'B'
  50 - 59  --->  'C'  
  40 - 49  --->  'D'
  0  - 40  --->  'Sorry Fail'
    Other  --->  'Invalid Input'

    */

let examMark = "50";


if(!(examMark <= 100 && examMark >= 0) || typeof examMark != "number"){ // for let examMark = more then 100/ less then 0/ string/ invalid input
     console.log("Invalid Input");                                      //output :Invalid Input
}
else if(examMark <= 100 && examMark >= 90){        // for let examMark = 90 - 100
    console.log("A+");                             //output : A+
}
else if(examMark >= 80){        // for let examMark = 80 - 89
    console.log("A");           //output : A
}
else if(examMark >= 70){        // for let examMark = 70 - 79
    console.log("A-");           //output : A-
}
else if(examMark >= 60){        // for let examMark = 60 - 69
    console.log("B");           //output : B
}
else if(examMark >= 50){        // for let examMark = 50 - 59
    console.log("C");           //output : C
}
else if(examMark >= 40){        // for let examMark = 40 - 49
    console.log("D");           //output : D
}
else {                          // if all condition avobe false
    console.log("Sorry Fail");  //output : Sorry Fail
}


// Traffic Signal system with if-else

console.log("Traffic Signal System");       //Traffic Signal System
/*
  input        output
  Green   --->  'GO'
  Yellow  --->  'Wait'
  Red     --->  'Stop'
   Other  --->  'Invalid Input'

    */

let light = 'grEEn';

light = light.toLowerCase();

if( light == 'red' || light == 'green' || light == 'yellow'){    //let light = red/Red/RED/yellow/Yellow/YELLOW/green/Green/Green  condition: true
    if( light == 'red'){                //let light = red/Red//RED  condition: true
        console.log("Stop");            //output : Stop
    }
    else if( light == 'yellow'){        //let light = yellow/Yellow/YELLOW  condition: true
        console.log("Wait");            //output : Wait
    }
    else{                               //let light = green/Green/GREEN  
        console.log("Go");              //output : Go
    }
}else{                                  // let light = invalid input
    console.log("Invalid Input");       //output : Invalid Input
}