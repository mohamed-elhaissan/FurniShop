const spanArray = document.querySelectorAll('.menu span');
const menu = document.querySelector('.menu');




var spanDone = true;
menu.addEventListener('click',function(){
    if(spanDone){
        spanArray[0].classList.add('retate');
        spanArray[2].classList.add('ReverseRetate');
        spanArray[1].classList.add('none');
        spanDone = false;
    }
    else {
        spanArray[0].classList.remove('retate');
        spanArray[2].classList.remove('ReverseRetate');
        spanArray[1].classList.remove('none');
        spanDone = true;
    }
    
})