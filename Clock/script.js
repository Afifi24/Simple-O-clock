const toggle = document.querySelector('.toggle')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const seconde = document.querySelector('.seconde')
const body = document.body
let dater = document.querySelector('.dater')
let timer = document.querySelector('.timer')

// Dark and light  mode 


toggle.addEventListener('click', () =>{
    if(body.classList.contains('dark')){
        body.classList.remove('dark')
        toggle.innerHTML = 'Dark Mode'
        toggle.classList.remove('light')
    }else{
        body.classList.add('dark')
        toggle.innerHTML = 'Light Mode'
        toggle.classList.add('light')
        
    }

})
const months = ['Jan','Feb', 'Mar', 'Apr', 'May', 'jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
const days = ['Monday','Thuesday','Wenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// const scale = (num,in_min,in_max,out_min,out_max)=>{ 
//     return(num - in_min)*(out_max - out_min)/(in_max - in_min) + out_min;
    const scale = (num, in_min, in_max, out_min, out_max)=>{
        return (num - in_min)*(out_max - out_min)/(in_max - in_min) + out_min;
    }


function setTime(){
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let secondes = time.getSeconds()
    let forhours = hours % 12
    let daay = time.getDay()
    let moonth  = time.getMonth()
    let date = time.getDate()

    // hourEl.style.transform = `translate(-50%,-100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`


    hour.style.transform = `translate(-50%,-100%) rotate(${scale(forhours,0,11,0,360)}deg)`
    minute.style.transform = `translate(-50%,-100%) rotate(${scale(minutes,0,59,0,360)}deg)`
    seconde.style.transform = `translate(-50%,-100%) rotate(${scale(secondes,0,59,0,360)}deg)`

    // timer.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}`:minutes }:${secondes<10 ? `0${secondes}`:secondes} ${ampm}`

    timer.innerHTML = `${hours<10 ? `0${hours}`: hours}:${minutes<10 ? `0${minutes}`: minutes}: ${secondes<10 ? `0${secondes}`: secondes}`
    dater.innerHTML = `${days[daay]}, ${months[moonth]} <span>${date}</span>`
}
setTime()
setInterval(setTime,1000)
