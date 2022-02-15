import React, { useEffect, useState } from 'react';

const CountDown = () => {
    const [time, setTime] = useState("");
    
    useEffect(() => {
        let counDownDate = new Date("Mar 24, 2022 22:00:00").getTime();
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = counDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 *24)) / (1000  * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTime(days + " días " + hours + " horas " + minutes + " minutos " + seconds + " segundos ");
            if (distance < 0) {
                clearInterval(x);
                setTime("Countdown finished")
            }

        }, 1000);
    }, []);

  return (<div className='countdown'>
      <p>{time}</p>
  </div>);
};

export default CountDown;
