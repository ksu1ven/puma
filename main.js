const pumaBusiness=['Пума любит делать кусь-кусь!', 'Пума любит кататься на качельках', 
'Заложник Пума убегает от Валика-абьюзера', 'Пуме пора спатки'
]
const imagesSrc=["play.jpg", "walk.jpg", "run.jpg", "sleep.jpg"]


const btnsArea=document.querySelector('.puma__btns');
const pumaDescription=document.querySelector('.puma__description');
const pumaImg=document.querySelector('.puma__img');

btnsArea.addEventListener('click', ()=> {
        if(!event.target.hasAttribute("id")) return
        let target=event.target;
        let targetBtnId=event.target.id;
        changeSlide (targetBtnId, target);              
})

document.addEventListener('animationend', ()=> {
    pumaImg.classList.remove('animation-right')

})

function changeSlide (targetBtnId, target) {
    let btns=btnsArea.children;
    for (let btn of btns) {
        btn.classList.remove('btn_active')}
    pumaImg.classList.add('animation-right')
    setTimeout(function () {
        pumaImg.src=imagesSrc[targetBtnId]
        pumaImg.classList.add('animation-from-left');
        pumaDescription.innerHTML=pumaBusiness[targetBtnId]
        },900)
    ;
    target.classList.add('btn_active')

}