//
// $('img').onmouseenter(function(){
//     $('.icon-span')
// })
const imgTag = document.getElementsByTagName('img');
const iconSpans = document.getElementsByClassName('icon-span');

imgTag.addEventListener('mouseenter', e => {
    iconSpans.style = 'display: block'
});