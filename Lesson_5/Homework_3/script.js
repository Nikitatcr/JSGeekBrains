const modal = document.querySelector('.wrap');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click',function () {
    modal.classList.remove('animate__backInDown');
    modal.classList.add('animate__backOutUp')
    setTimeout(function(){
        modal.classList.add('hidden');
    },1000);
});

showBtn.addEventListener('click',function () {
    modal.classList.remove('animate__backOutUp','hidden');
    modal.classList.add('animate__animated','animate__backInDown');
});