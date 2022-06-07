
// 1
// function printTimer() {
//    setInterval(()=>{
//     document.write("timer")
//   },4000)
// }
// printTimer()


// 2
// function printCounter(params) {
//   setInterval(()=>{
//     document.write("counter")
//   },6000)
// }
// printCounter()


 // 3
// var myP = document.createElement("p")
// document.body.append(myP)
// var sthop;
// var btn= document.createElement("button");
// document.body.append(btn)
// btn.innerText="stop"
// function printILuvTimers() {
// sthop = setInterval(()=>{
//   myP.innerHTML+="i luv timers"
// },1000);
// }
// printILuvTimers()

// function stopILuvTimers() {
//   btn.onclick=()=>{
//     clearInterval(sthop)
//   }
// }


// 4
// var btn= document.createElement("button");
// document.body.append(btn);
// var myP = document.createElement("p");
// document.body.append(myP);
// var stopper;
// btn.innerText="stop"
// var counter = 0
// var namesArray= ["eldad","yaniv","yoni","nati","rami"];
// function printArray() {
//    stopper = setInterval(()=>{
//       myP.innerText +=namesArray[counter++];
//       console.log(namesArray);
//       if(counter == namesArray.length){
//         counter = 0
//       }
//     },1000)
// }
// printArray()

// function stopPrint() {
//   btn.onclick = ()=>{
//     clearInterval(stopper)
//   }
// }
// stopPrint()



// 5
// function getTimer(){
//  setInterval(()=>{
//     var time = new Date();
//     myP.innerText = time.getHours() + ":"+time.getMinutes() +":"+ time.getSeconds();
//   },1000)
// }
// getTimer()


// 6
// var input_id=document.getElementById("input_id");
// var stopper;
// function build() {
//   var minute = input_id.value -1
//   var sec = 59;
//   stopper=setInterval(function() {
//     if(minute < 0){
//       return timer.innerHTML= "time's up"
//     }
//     document.getElementById("timer").innerHTML = minute + " : " + sec;
//     sec--;
//     if (sec == 00) {
//       sec = 59;
//       minute --;
//     }
//   }, 1000);
// }

// function stopCount() {
//   clearInterval(stopper)
// } 


// 7
var input_id = document.getElementById("input_id");
function printHowMuchTime() {
  var today = new Date().getHours()+":"+ new Date().getMinutes();
 console.log(today);
  var hour = input_id.value;
  var result = today ;
  timer.innerText=result
}
var s = new Date()
console.log(s);