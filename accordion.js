const accordion = document.getElementsByClassName('blog__item');

for(i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('open');
    })
}