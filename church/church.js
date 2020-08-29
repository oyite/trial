const navImg = document.getElementById('nav-img');
const navList = document.getElementById('nav-list');

  let toggle = false;
   navImg.addEventListener('click', ()=>{
       if(toggle == false){
           navList.style.visibility = "visible";
           navList.style.opacity = 1;
           toggle = true;
       }else if (toggle == true){
        navList.style.visibility = "hidden";
        toggle = false;
       }
   })