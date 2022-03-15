const nav =document.querySelector('#navbar');

window.onscroll = () =>{
    if(window.scrollY > 10){
        nav.classList.add('on-scroll');
    }
    else{
        nav.classList.remove('on-scroll')
    }
}