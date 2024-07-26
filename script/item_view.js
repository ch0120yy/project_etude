
const small_s = new Swiper('.small_slide',{
    autoplay:{delay:3000},
    loop:false,
    slidesPerView:4, //실제 이미지 개수보다 최소 한 개는 적게 작성
    spaceBetween:10,
})
// swiper-slide 6개 개별 클릭 시
// img 경로를 확인하고 해당 경로를 big_view의 img 경로에 대입
const small_slide = document.querySelectorAll('.small_slide .swiper-slide')
const big_view = document.querySelector('.big_view')
console.log(small_slide,big_view)
// 사용 js : for, addEventListener, children, src
for(let i of small_slide){
    console.log(i)
    i.addEventListener('click',()=>{
        big_view.children[0].src = i.children[0].src
    })
}