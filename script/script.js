const sub = document.querySelectorAll('.sub_menu')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')
console.log(sub,sub_bg)
sub_bg.style.height = '0'
sub_bg.style.transition = 'height 0.3s'
// 1. 숨기는 처리
for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden'
    i.style.transition = 'height 0.3s'
}
// 2. 메뉴 마우스 올리면 sub, sub.bg 보이기
nav.addEventListener('mouseover',()=>{
    sub_bg.style.height='331px';
    for(let i of sub){
        i.style.height = '331px';
        i.style.overflow = 'hidden'
    }
})
nav.addEventListener('mouseout',()=>{
    sub_bg.style.height='0';
    for(let i of sub){
        i.style.height = '0';
        i.style.overflow = 'hidden'
    }
})