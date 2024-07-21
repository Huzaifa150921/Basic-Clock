setInterval(() => {
    d=new Date();
    hours=d.getHours();
    min=d.getMinutes();
    sec=d.getSeconds();
     
    hrotate=30*hours+min/2;
    mrotate=6*min;
    srotate=6*sec;

    hour.style.transform=`rotate(${hrotate}deg)`;
    minutes.style.transform=`rotate(${mrotate}deg)`;
    seconds.style.transform=`rotate(${srotate}deg)`;

}, 1000);