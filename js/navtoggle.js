function toggle(x){
var first = document.getElementsByClassName("list1");
var second = document.getElementsByClassName("list2");
var third = document.getElementsByClassName("list3");




switch (x) {
  case 1:
    
    for(let i=0; i< first.length; i++){
        first[i].style.display = "block";
  }
  

    for(let i=0; i< second.length; i++){
    second[i].style.display = "none";
    }

    for(let i=0; i< third.length; i++){
    third[i].style.display = "none";
    }

    break;
  case 2:
    for(let i=0; i< first.length; i++){
      first[i].style.display = "none";
      }

      for(let i=0; i< second.length; i++){
      second[i].style.display = "block";
      }

      for(let i=0; i< third.length; i++){
      third[i].style.display = "none";
      }
      break;
  case 3:
    for(let i=0; i< first.length; i++){
      first[i].style.display = "none";
      }

      for(let i=0; i< second.length; i++){
      second[i].style.display = "none";
      }

      for(let i=0; i< third.length; i++){
      third[i].style.display = "block";
      }
      break;
  default:
    break;
}


}


function resize(){
  var first = document.getElementsByClassName("list1");
  var second = document.getElementsByClassName("list2");
  var third = document.getElementsByClassName("list3");

  if ($(window).width() > 1222) { 
    

  for(let i=0; i< first.length; i++){
    first[i].style.display = "block";
    }

    for(let i=0; i< second.length; i++){
    second[i].style.display = "block";
    }

    for(let i=0; i< third.length; i++){
    third[i].style.display = "block";
    }
} 
else{
  for(let i=0; i< first.length; i++){
    first[i].style.display = "none";
    }

    for(let i=0; i< second.length; i++){
    second[i].style.display = "none";
    }

    for(let i=0; i< third.length; i++){
    third[i].style.display = "none";
    }
}
}





