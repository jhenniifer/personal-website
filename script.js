const about = document.getElementsByClassName('about');
let display = 0

function about(){
    if (display == 0){
        about.style.display = 'block';
        display = 1;
    } else{
        about.style.display = 'none';
        display = 0;
    }
}