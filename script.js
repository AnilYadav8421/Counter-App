const btns = document.querySelectorAll('.btn');
let value = document.querySelector('#value');
let count = 0;


btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        }
        else if(style.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }

        if(count < 0){
            value.style.color = 'red';
        }
        else if(count > 0){
            value.style.color = 'green';
        }
        else if(count === 0){
            value.style.color = '#000';
        }

        value.textContent = count;
    });
});