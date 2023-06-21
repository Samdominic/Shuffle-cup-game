let imageSrc = ["C:/Users/Sam/Projects/shuffleGame/images/blue-cup1.svg", "C:/Users/Sam/Projects/shuffleGame/images/blue-cup1.svg", "C:/Users/Sam/Projects/shuffleGame/images/blue-cup1.svg"]
// let heading = document.createElement('h1');
// heading.id = "heading"
// heading.style.color = "whitesmoke";
// heading.style.fontFamily = "sans-serif"
// heading.style.position ="relative";
// heading.style.left ="-120px";
// heading.innerText = "Can you find me??"
// document.getElementById('div').appendChild(heading);
$(document).ready(function(){
  let imageSrc = ["C:/Users/Sam/Projects/shuffleGame/images/blue-cup1.svg", "C:/Users/Sam/Projects/shuffleGame/images/blue-cup1.svg", "C:/Users/Sam/Projects/shuffleGame/images/blue-cup1.svg"]
  let heading ="<h1 id='heading'>Can you find me??</h1>";
  $("#div").append(heading);
  $("#heading").css({"color":"whitesmoke","position":"relative","left":"-50px"});

//refresh button
// let btn = document.createElement('button');
// btn.innerHTML = "Refresh !"
// btn.type = "button"
// btn.style.position = "relative";
// btn.style.left = "25%";
// btn.style.top = "50px"
// btn.style.borderRadius = "10px"
// btn.style.backgroundColor = " rgb(236, 114, 0)";
// btn.style.color = "white";
// btn.style.padding = "10px";
// btn.style.border = "2px solid blue";
// document.getElementById('div').appendChild(btn);
// btn.addEventListener("click", function () {
//   document.getElementById('img1Id').className = "";
//   document.getElementById('img2Id').className = "";
//   document.getElementById('img3Id').className = "";
//   points = 0;
//   setTimeout(() => {
//   document.getElementById('img1Id').className = "anime"
//   document.getElementById('img2Id').className = "anime"
//   document.getElementById('img3Id').className = "anime"
//   document.getElementById('img1Id').style.animationDuration = '2s';
//   document.getElementById('img2Id').style.animationDuration = '2s';
//   document.getElementById('img3Id').style.animationDuration = '2s';
//   document.getElementById('points').innerHTML = "Points :" + points;
// }, 100);
// })
let btn = "<button id='refresh' type='button'>Refresh !</button>";
$("#div").append(btn);
$("#refresh").css({"position":"relative","left":"25%","top":"50px","borderRadius":"10px","backgroundColor":"rgb(236,114,0)","color":"white","padding":"10px","border":"2px solid blue"})
$("#refresh").on("click",function(){
$("#img1Id").removeClass("anime");
$("#img2Id").removeClass("anime");
$("#img3Id").removeClass("anime");
 $("#points").text("Points :"+0)
setTimeout(() => {
  $("#img1Id").addClass("anime");
  $("#img2Id").addClass("anime");
  $("#img3Id").addClass("anime");
}, 100);
});

//small image
// let imgsm = document.createElement('img');
// imgsm.src = "C:/Users/Sam/Projects/shuffleGame/images/ball.png";
// document.getElementById('heading').appendChild(imgsm);
let imgsm ="<img id='imgsm'></img>";
$("#heading").append(imgsm);
$("#imgsm").attr("src","C:/Users/Sam/Projects/shuffleGame/images/ball.png");

//Points 
// let points = 0;
// let h2 = document.createElement('h2');
// h2.id = "points";
// h2.innerText = "Points :" + points;
// document.body.appendChild(h2);
// h2.style.position = "absolute";
// h2.style.left = "550px";
// h2.style.top ="410px";
// h2.style.color="white"
let points =0;
let points1 =$("<h2 id='points'></h2").text("Points :"+points);
$("body").append(points1);
$("#points").css({"position":"absolute","left":"550px","top":"480px","color":"white"})



//create imagetag ang add imageId and imagesrc
for (let i = 0; i <= imageSrc.length - 1; i++) {
  // let imageTag = document.createElement('img');
  // imageTag.style.height = "300px";
  // imageTag.style.width = "300px"
  // imageTag.src = imageSrc[i];
  // document.getElementById('div').appendChild(imageTag);
  let imageTag =$("<img id='ball' src='"+imageSrc[i]+"'></img>");
  $('#div').append(imageTag);
  if (i == 0) {
    $("#ball").attr("id","img1Id")
  }
  else if (i == 1) {
   $("#ball").attr("id","img2Id")
  }
  else {
    $("#ball").attr("id","img3Id")
  }
}

//Speed increase and decrease.
// let increase = document.createElement('button');
// let decrease = document.createElement('button');
// increase.innerText = "Increase Speed";
// increase.style.position = "relative";
// increase.style.left = "-350px"
// increase.style.top = "50px"
// increase.style.borderRadius = "10px"
// increase.style.backgroundColor = "black";
// increase.style.color = "white";
// increase.style.padding = "10px";
// increase.style.border = "2px solid blue";

let increase =$("<button id='increase'></button>").text("Increase Speed");
let decrease =$("<button id='decrease'></button>").text("Decrease Speed");
$('div').append(increase);
$("#increase").css({"position":"relative","left":"-350px","top":"50px","borderRadius":"10px","backgroundColor":"black","color":"white","padding":"10px","border":"2px solid gray"});

$('div').append(decrease);
$("#decrease").css({"position":"relative","left":"-340px","top":"50px","borderRadius":"10px","backgroundColor":"red","color":"white","padding":"10px","border":"2px solid gray"})
// increase.addEventListener("click", () => {
//   document.getElementById('img1Id').className = "";
//   document.getElementById('img2Id').className = "";
//   document.getElementById('img3Id').className = "";
//   setTimeout(() => {
//     if(click ==0 ||click == 1){
//     document.getElementById('img1Id').style.animationDuration = '0.5s';
//     document.getElementById('img2Id').style.animationDuration = '0.5s';
//     document.getElementById('img3Id').style.animationDuration = '0.5s';
//     document.getElementById('img1Id').className = "anime"
//     document.getElementById('img2Id').className = "anime"
//     document.getElementById('img3Id').className = "anime"
//   }
//   else{
//       document.getElementById('img1Id').style.animationDuration = '0.5s';
//       document.getElementById('img2Id').style.animationDuration = '0.5s';
//       document.getElementById('img3Id').style.animationDuration = '0.5s';
//       document.getElementById('img1Id').className = "shuffle"
//       document.getElementById('img2Id').className = "shuffle"
//       document.getElementById('img3Id').className = "shuffle"
//   }
//   }, 100);
// })
$("#increase").on("click",function(){
  $("#img1Id").removeClass("anime");
$("#img2Id").removeClass("anime");
$("#img3Id").removeClass("anime");
$("#img1Id").removeClass("shuffle");
$("#img2Id").removeClass("shuffle");
$("#img3Id").removeClass("shuffle");
setTimeout(() => {
  if(click == 0 || click ==1){
    $("#img1Id").css("animationDuration","0.5s");
    $("#img2Id").css("animationDuration","0.5s");
    $("#img3Id").css("animationDuration","0.5s");
    $("#img1Id").addClass("anime");
  $("#img2Id").addClass("anime");
  $("#img3Id").addClass("anime");
  }
  else{
    $("#img1Id").css("animationDuration","0.5s");
    $("#img2Id").css("animationDuration","0.5s");
    $("#img3Id").css("animationDuration","0.5s");
    $("#img1Id").addClass("shuffle");
  $("#img2Id").addClass("shuffle");
  $("#img3Id").addClass("shuffle");
  }
}, 100);
})

// decrease.innerText = "Decrease Speed";
// decrease.style.position = "relative";
// decrease.style.left = "-340px"
// decrease.style.top = "50px"
// decrease.style.borderRadius = "10px"
// decrease.style.backgroundColor = "red";
// decrease.style.color = "white";
// decrease.style.padding = "10px";
// decrease.style.border = "2px solid gray";
// document.getElementById('div').appendChild(increase);
// document.getElementById('div').appendChild(decrease);
// decrease.addEventListener("click", () => {
//   document.getElementById('img1Id').className = "";
//   document.getElementById('img2Id').className = "";
//   document.getElementById('img3Id').className = "";
//   setTimeout(() => {
//     if(click ==0 ||click == 1){
//     document.getElementById('img1Id').style.animationDuration = '2.5s';
//     document.getElementById('img2Id').style.animationDuration = '2.5s';
//     document.getElementById('img3Id').style.animationDuration = '2.5s';
//     document.getElementById('img1Id').className = "anime"
//     document.getElementById('img2Id').className = "anime"
//     document.getElementById('img3Id').className = "anime"
//     }
//     else{
//       document.getElementById('img1Id').style.animationDuration = '2.5s';
//       document.getElementById('img2Id').style.animationDuration = '2.5s';
//       document.getElementById('img3Id').style.animationDuration = '2.5s';
//       document.getElementById('img1Id').className = "shuffle"
//       document.getElementById('img2Id').className = "shuffle"
//       document.getElementById('img3Id').className = "shuffle"
//   }
//   }, 100);
// })
$("#decrease").on("click",function(){
  $("#img1Id").removeClass("anime");
$("#img2Id").removeClass("anime");
$("#img3Id").removeClass("anime");
$("#img1Id").removeClass("shuffle");
$("#img2Id").removeClass("shuffle");
$("#img3Id").removeClass("shuffle");
setTimeout(() => {
  if(click == 0 || click ==1){
    $("#img1Id").css("animationDuration","2.5s");
    $("#img2Id").css("animationDuration","2.5s");
    $("#img3Id").css("animationDuration","2.5s");
    $("#img1Id").addClass("anime");
  $("#img2Id").addClass("anime");
  $("#img3Id").addClass("anime");
  }
  else{
    $("#img1Id").css("animationDuration","2.5s");
    $("#img2Id").css("animationDuration","2.5s");
    $("#img3Id").css("animationDuration","2.5s");
    $("#img1Id").addClass("shuffle");
  $("#img2Id").addClass("shuffle");
  $("#img3Id").addClass("shuffle");
  }
}, 100);
})



//  let div2  = document.createElement('div');
//  div2.id = "div2";
//  document.getElementById('div').appendChild(div2);
// let ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png"];
// let click = 0;
// for(let i = 0 ;i<=2;i++){
//   let ball = document.createElement('img');
//   ball.src =ig[i];
//   document.getElementById('div2').appendChild(ball);
//   if(i==0){
//     ball.id ="ig1";
//     ball.className="ball";
//   }
//   else if(i==1){
//     ball.id ="ig2";
//     ball.className="ball";
//   }
//   else{
//     ball.id ="ig3";
//     ball.className="ball";
//   }
//   ball.hidden = true;
// }
let div2 =$("<div id='div2'></div>");
$("#div").append(div2);
let ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png"];
let click = 0;
for(let i = 0 ;i<=2;i++){
  let ball = $("<img id='ball1' src='"+ig[i]+"'></img>");
  $("#div2").append(ball);
  if(i==0){
   $("#ball1").attr("id","ig1");
   $("#ig1").addClass("ball");
  }
  else if(i==1){
    $("#ball1").attr("id","ig2");
    $("#ig2").addClass("ball");
  }
  else{
    $("#ball1").attr("id","ig3");
    $("#ig3").addClass("ball");
  }
 $(".ball").attr("hidden","true");
}



// document.getElementById('div2').style.position='relative'
// div2.style.top="-110px"
// document.getElementById('ig1').style.position = 'relative';
// document.getElementById('ig1').style.left ="-370px"
// document.getElementById('ig2').style.position = 'relative';
// document.getElementById('ig2').style.left ="-120px";
// document.getElementById('ig3').style.position = 'relative';
// document.getElementById('ig3').style.left ="130px"

$("#div2").css({"position":"relative","top":"-110px"});
$("#ig1").css({"position":"relative","left":"-370px"});
$("#ig2").css({"position":"relative","left":"-120px"});
$("#ig3").css({"position":"relative","left":"130px"});


 
//Click function for img1 ,img2,img3
// document.getElementById('img1Id').addEventListener('click', function () {
//   if(ig[0]=="C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
//     points +=10;
//     document.getElementById('points').innerHTML = "Points :" + points
//   }
//   else{
//     points -=5;
//     document.getElementById('points').innerHTML = "Points :" + points
//   }
//   click +=1;
//   document.getElementById('img1Id').className = "";
//   document.getElementById('img2Id').className = "";
//   document.getElementById('img3Id').className = "";
//   document.getElementById('img1Id').style.rotate = "30deg"
//   document.getElementById('img2Id').style.rotate = "30deg"
//   document.getElementById('img3Id').style.rotate="30deg";
//   document.getElementById('ig1').hidden = false;
//   document.getElementById('ig2').hidden = false;
//   document.getElementById('ig3').hidden = false;
//   setTimeout(() => {
//     setTimeout(() => {
//       document.getElementById('img1Id').style.rotate = "0deg";
//       document.getElementById('img2Id').style.rotate = "0deg";
//       document.getElementById('img3Id').style.rotate = "0deg";
//       if(click == 1){
//       document.getElementById('img1Id').className = "anime";
//       document.getElementById('img2Id').className = "anime";
//       document.getElementById('img3Id').className = "anime";
//       }
//     else if(click == 2){
//       document.getElementById('img1Id').className = "shuffle";
//       document.getElementById('img2Id').className = "shuffle";
//       document.getElementById('img3Id').className = "shuffle";
//     }
//       document.getElementById('ig1').hidden = true;
//       document.getElementById('ig2').hidden = true;
//       document.getElementById('ig3').hidden = true;
//       OnClick();
//     }, 1000);
//   });
  
// });

$("#img1Id").on("click",function(){
  if(ig[0]=="C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
        points +=10;
        $("#points").text("Points :" + points) ;
      }
      else{
        points -=5;
        $("#points").text("Points :" + points) ;
      }
     click +=1;
     $("#img1Id").removeClass("anime");
     $("#img2Id").removeClass("anime");
     $("#img3Id").removeClass("anime");
     $("#img1Id").removeClass("shuffle");
     $("#img2Id").removeClass("shuffle");
     $("#img3Id").removeClass("shuffle");
     $("#img1Id").css("rotate","30deg");
     $("#img2Id").css("rotate","30deg");
     $("#img3Id").css("rotate","30deg");
     $(".ball").attr("hidden",false);
     setTimeout(() => {
          setTimeout(() => {
            $("#img1Id").css("rotate","0deg");
            $("#img2Id").css("rotate","0deg");
            $("#img3Id").css("rotate","0deg");
            if(click == 1){
              $("#img1Id").addClass("anime");
              $("#img2Id").addClass("anime");
              $("#img3Id").addClass("anime");
            }
          else if(click == 2){
            $("#img1Id").addClass("shuffle");
            $("#img2Id").addClass("shuffle");
            $("#img3Id").addClass("shuffle");
          }
           $(".ball").attr("hidden",true);
            OnClick();
          }, 1000);
        });
});


$("#img2Id").on("click",function(){
  if(ig[1]=="C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
        points +=10;
        $("#points").text("Points :" + points) ;
      }
      else{
        points -=5;
        $("#points").text("Points :" + points) ;
      }
     click +=1;
     $("#img1Id").removeClass("anime");
     $("#img2Id").removeClass("anime");
     $("#img3Id").removeClass("anime");
     $("#img1Id").removeClass("shuffle");
     $("#img2Id").removeClass("shuffle");
     $("#img3Id").removeClass("shuffle");
     $("#img1Id").css("rotate","30deg");
     $("#img2Id").css("rotate","30deg");
     $("#img3Id").css("rotate","30deg");
     $(".ball").attr("hidden",false);
     setTimeout(() => {
          setTimeout(() => {
            $("#img1Id").css("rotate","0deg");
            $("#img2Id").css("rotate","0deg");
            $("#img3Id").css("rotate","0deg");
            if(click == 1){
              $("#img1Id").addClass("anime");
              $("#img2Id").addClass("anime");
              $("#img3Id").addClass("anime");
            }
          else if(click == 2){
            $("#img1Id").addClass("shuffle");
            $("#img2Id").addClass("shuffle");
            $("#img3Id").addClass("shuffle");
          }
           $(".ball").attr("hidden",true);
            OnClick();
          }, 1000);
        });
});

$("#img3Id").on("click",function(){
  if(ig[2]=="C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
        points +=10;
        $("#points").text("Points :" + points) ;
      }
      else{
        points -=5;
        $("#points").text("Points :" + points) ;
      }
     click +=1;
     $("#img1Id").removeClass("anime");
     $("#img2Id").removeClass("anime");
     $("#img3Id").removeClass("anime");
     $("#img1Id").removeClass("shuffle");
     $("#img2Id").removeClass("shuffle");
     $("#img3Id").removeClass("shuffle");
     $("#img1Id").css("rotate","30deg");
     $("#img2Id").css("rotate","30deg");
     $("#img3Id").css("rotate","30deg");
     $(".ball").attr("hidden",false);
     setTimeout(() => {
          setTimeout(() => {
            $("#img1Id").css("rotate","0deg");
            $("#img2Id").css("rotate","0deg");
            $("#img3Id").css("rotate","0deg");
            if(click == 1){
              $("#img1Id").addClass("anime");
              $("#img2Id").addClass("anime");
              $("#img3Id").addClass("anime");
            }
          else if(click == 2){
            $("#img1Id").addClass("shuffle");
            $("#img2Id").addClass("shuffle");
            $("#img3Id").addClass("shuffle");
          }
           $(".ball").attr("hidden",true);
            OnClick();
          }, 1000);
        });
});

// document.getElementById('img2Id').addEventListener('click', function () {
//   if(ig[1]=="C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
//     points +=10;
//     document.getElementById('points').innerHTML = "Points :" + points
//   }
//   else{
//     points -=5;
//     document.getElementById('points').innerHTML = "Points :" + points
//   }
//   click +=1;
//   document.getElementById('img1Id').className = "";
//   document.getElementById('img2Id').className = "";
//   document.getElementById('img3Id').className = "";
//   document.getElementById('img1Id').style.rotate = "30deg"
//   document.getElementById('img2Id').style.rotate = "30deg"
//   document.getElementById('img3Id').style.rotate="30deg";
//   document.getElementById('ig1').hidden = false;
//   document.getElementById('ig2').hidden = false;
//   document.getElementById('ig3').hidden = false;
//       setTimeout(() => {
//         document.getElementById('img1Id').style.rotate = "0deg";
//         document.getElementById('img2Id').style.rotate = "0deg";
//         document.getElementById('img3Id').style.rotate = "0deg";
//         if(click == 1){
//           document.getElementById('img1Id').className = "anime";
//           document.getElementById('img2Id').className = "anime";
//           document.getElementById('img3Id').className = "anime";
//           }
//         else if(click == 2){
//           document.getElementById('img1Id').className = "shuffle";
//           document.getElementById('img2Id').className = "shuffle";
//           document.getElementById('img3Id').className = "shuffle";
//         }
//         document.getElementById('ig1').hidden = true;
//         document.getElementById('ig2').hidden = true;
//         document.getElementById('ig3').hidden = true;
//         OnClick();
//       }, 1000);
// });
     
    // document.getElementById('img3Id').addEventListener('click', function () {
    //   if(ig[2]=="C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
    //     points +=10;
    //     document.getElementById('points').innerHTML = "Points :" + points
    //   }
    //   else{
    //     points -=5;
    //     document.getElementById('points').innerHTML = "Points :" + points
    //   }
    //   click +=1;
    //   document.getElementById('img1Id').className = "";
    //   document.getElementById('img2Id').className = "";
    //   document.getElementById('img3Id').className = "";
    //   document.getElementById('img1Id').style.rotate = "30deg"
    //   document.getElementById('img2Id').style.rotate = "30deg"
    //   document.getElementById('img3Id').style.rotate="30deg";
    //   document.getElementById('ig1').hidden = false;
    //   document.getElementById('ig2').hidden = false;
    //   document.getElementById('ig3').hidden = false;
    //       setTimeout(() => {
    //         document.getElementById('img1Id').style.rotate = "0deg";
    //         document.getElementById('img2Id').style.rotate = "0deg";
    //         document.getElementById('img3Id').style.rotate = "0deg";
    //         if(click == 1){
    //           document.getElementById('img1Id').className = "anime";
    //           document.getElementById('img2Id').className = "anime";
    //           document.getElementById('img3Id').className = "anime";
    //           }
    //         else if(click == 2){
    //           document.getElementById('img1Id').className = "shuffle";
    //           document.getElementById('img2Id').className = "shuffle";
    //           document.getElementById('img3Id').className = "shuffle";
    //         }
    //         document.getElementById('ig1').hidden = true;
    //         document.getElementById('ig2').hidden = true;
    //         document.getElementById('ig3').hidden = true;
    //         OnClick();
    //       }, 1000);
    //     });

  for (let i = ig.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = ig[i];
    ig[i] = ig[j];
    ig[j] = temp;
    let temp1 = imageSrc[i];
    imageSrc[i] = imageSrc[j];
    imageSrc[j] = temp1;
  }
$("#ig1").attr("src",""+ig[0]+"");
$("#ig2").attr("src",""+ig[1]+"");
$("#ig3").attr("src",""+ig[2]+"");
$("#imgId1").attr("src",""+imageSrc[0]+"");
$("#imgId2").attr("src",""+imageSrc[1]+"");
$("#imgId3").attr("src",""+imageSrc[2]+"");
  //  document.getElementById('ig1').src =ig[0];
  //    document.getElementById('ig2').src =ig[1];
  //  document.getElementById('ig3').src =ig[2];
  //   document.getElementById('imgId1').src =imageSrc[0];
  //   document.getElementById('imgId2').src =imageSrc[1];
  //   document.getElementById('imgId3').src =imageSrc[2]; 

  function OnClick(){
    if(click == 1){
      if(ig[0] == "C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
        $("#ig1").attr("src",""+ig[2]+"");
        $("#ig2").attr("src",""+ig[1]+"");
        $("#ig3").attr("src",""+ig[0]+"");
        ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png"];
      }
      else if(ig[1] == "C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
        $("#ig1").attr("src",""+ig[0]+"");
        $("#ig2").attr("src",""+ig[1]+"");
        $("#ig3").attr("src",""+ig[2]+"");
        ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png",];
      }
      else{
        $("#ig1").attr("src",""+ig[2]+"");
        $("#ig2").attr("src",""+ig[0]+"");
        $("#ig3").attr("src",""+ig[1]+"");
        ig =["C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png",];
      }
    }
    else if(click==2){
      click =0;
      if(ig[2] == "C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
        $("#ig1").attr("src",""+ig[1]+"");
        $("#ig2").attr("src",""+ig[2]+"");
        $("#ig3").attr("src",""+ig[0]+"");
        ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png",];
      }
      else if(ig[1] == "C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
         $("#ig1").attr("src",""+ig[2]+"");
         $("#ig2").attr("src",""+ig[0]+"");
          $("#ig3").attr("src",""+ig[1]+"");
        ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png"];
      }
      else if(ig[0] =="C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
        $("#ig1").attr("src",""+ig[0]+"");
        $("#ig2").attr("src",""+ig[2]+"");
        $("#ig3").attr("src",""+ig[1]+"");
        ig =["C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png"];
      }   
    }
  }

})
  //   function OnClick(){
  //     if(click == 1){
  //       if(ig[0] == "C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
  //         document.getElementById('ig1').src =ig[2];
  //         document.getElementById('ig2').src =ig[1];
  //         document.getElementById('ig3').src =ig[0];
  //         ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png"];
  //       }
  //       else if(ig[1] == "C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
  //         document.getElementById('ig1').src =ig[0];
  //         document.getElementById('ig2').src =ig[1];
  //         document.getElementById('ig3').src =ig[2];
  //         ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png",];
  //       }
  //       else{
  //         document.getElementById('ig1').src =ig[2];
  //         document.getElementById('ig2').src =ig[0];
  //         document.getElementById('ig3').src =ig[1];
  //         ig =["C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png",];
  //       }
  //     }
  //     else if(click==2){
  //       click =0;
  //       if(ig[2] == "C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
  //         document.getElementById('ig1').src =ig[1];
  //         document.getElementById('ig2').src =ig[2];
  //         document.getElementById('ig3').src =ig[0];
  //         ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png",];
  //       }
  //       else if(ig[1] == "C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
  //         document.getElementById('ig1').src =ig[2];
  //         document.getElementById('ig2').src =ig[0];
  //         document.getElementById('ig3').src =ig[1];
  //         ig =["C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/ball.png"];
  //       }
  //       else if(ig[0] =="C:/Users/Sam/Projects/shuffleGame/images/ball.png"){
  //         document.getElementById('ig1').src =ig[0];
  //         document.getElementById('ig2').src =ig[2];
  //         document.getElementById('ig3').src =ig[1];
  //         ig =["C:/Users/Sam/Projects/shuffleGame/images/ball.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png","C:/Users/Sam/Projects/shuffleGame/images/invisible.png"];
  //       }   
  //     }
  //   }

  // })