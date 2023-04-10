import { useState, useEffect } from "react";

function Timer() {
    const [time, setTime] = useState({
        minutes: 9,
        seconds: 59,
    });

    useEffect(() => {
        const timer = setInterval(() => {
        if (time.seconds === 0) {
            if (time.minutes === 0) {
            clearInterval(timer);
            alert("time is over");
            } else {
            setTime((prevTime) => ({
                minutes: prevTime.minutes - 1,
                seconds: 59,
            }));
            }
        } else {
            setTime((prevTime) => ({
            ...prevTime,
            seconds: prevTime.seconds - 1,
            }));
        }
        }, 1000);

        return () => clearInterval(timer);
    }, [time]);

    return (
        <div>
            <p>{`${time.minutes}${time.seconds < 10 ? "0" : ""} min ${time.seconds} sec to discount`}</p>
        </div>
    );
}

export default Timer;