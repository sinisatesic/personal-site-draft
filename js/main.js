
// $('img').onmouseenter(function(){
//     $('.icon-span').css({
//         'display':'block'
//     });
// });
const shadow = document.getElementsByClassName('shadow-enter');
const reverseShadow = document.getElementsByClassName('shadow-exit');

shadow.addEventListener('mouseenter', () => {
    shadow.style.display = 'block';
});

reverseShadow.addEventListener('mouseleave', () => {
    reverseShadow.style.display = 'block';
});