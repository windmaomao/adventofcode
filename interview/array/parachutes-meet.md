# Two Robots with Parachuts 

Two Robots with parachutes land on a one dimensional planet (think of the landing on an infinite line. Both robots are loaded to execute the same program once they land. The following functions are available for execution: 

- isParachutePresent() returns true if a parachute is present at the current position 
- dropParachute() leave the parachute at the current position 
- left () moves left one step in one unit of time 
- right (), moves right one step in one unit of time 
- sleep() sleeps for one unit of time

Write a program using the above functions that will make the robots find each other. What is the time complexity of your algorithm? You can use if statements, for or while loops in your program. Assume that the program will just end when the robots meet each other.

```javascript

A and B have to move to left or right at the same time ?



	                           A         B                         
<------------------------------------------------------------------->
                     a         b
 
                                 
dropParachute()
let i = 0, catchUp = false

while (done) {
    
  if (isParachutePresent()) {
      catchUp = true
  }

  if (catchUp) {
      right()
  } else {
      right()
      sleep()
  }  
}


A -> B -> C -> D

```