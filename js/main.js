
// $('img').onmouseenter(function(){
//     $('.icon-span').css({
//         'display':'block'
//     });
// });
const imgTag = document.getElementsByTagName('img');
const iconSpans = document.getElementsByClassName('icon-span:hover');

imgTag.addEventListener('mouseenter', e => {
    iconSpans.style = 'transform: scale(2)'
});