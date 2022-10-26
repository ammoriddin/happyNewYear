const days = document.querySelector('.days'),
      hours = document.querySelector('.hours'),
      minutes = document.querySelector('.minutes'),
      seconds = document.querySelector('.seconds'),
      snows = document.querySelector('.snow')



let day = 0,hour = 0,min = 0, sec = 0;

setInterval(() => {
    timeFunc();
}, 1000);

setInterval(() => createSnow(),10);

const timeFunc = () => {
    let date = new Date()
    const newYear = new Date(date.getFullYear()+1, 0, 1, 0, 0, 0, 0);
    const dif = newYear - date;
    sec = Math.floor((dif / 1000) % 60);
    min = Math.floor((dif / 1000 / 60) % 60);
    hour = Math.floor((dif / (1000 * 60 * 60)) % 24);
    day = Math.floor((dif / (1000 * 60 * 60 * 24)));

    days.textContent = day;
    hours.textContent = hour;
    minutes.textContent = min;
    seconds.textContent = sec;
}

const createSnow =() => {
    const snow = document.createElement('i');
    snow.classList.add('fas', 'fa-snowflake');
    snow.style.left = Math.random() * window.innerWidth + 'px';
    snow.style.animationDuration = Math.random() * 3 + 2 + 's'
    snow.style.opacity = Math.random()
    snow.style.fontSize = (Math.random() * 10 + 10) + 'px';

    snows.appendChild(snow)

    setTimeout(() => {
        snow.remove();
    },3500)
    
}