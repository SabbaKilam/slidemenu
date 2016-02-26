//=====gather our variables=======  
var menu = document.getElementById("menu");
var front = document.getElementById("front");
var menuIsOpen = false;
var gapSize = 60;
  
//====Driver's Seat=====
menu.addEventListener("click", slideMenu);

//====Under the Hood=====
//(Robot factory)
function slideMenu(){
  if(menuIsOpen){
    closeMenu();
    menuIsOpen = false;
  }
  else{
    openMenu();
    menuIsOpen = true;    
  }
}
  
function openMenu(){
    front.style.left = gapSize+"%";
  	front.style.right = -gapSize+"%";
}
function closeMenu(){
    front.style.left = "0"; 
  	front.style.right = "0";  
}
//==================================