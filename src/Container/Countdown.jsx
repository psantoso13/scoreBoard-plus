import { useState, useEffect } from 'react';
import img from "./waterflame.png"

const CountdownTimer = () => {
  const [time, setTime] = useState(1 * 60 * 100); // 15 minutes in 1/100 seconds
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 10); // 1/100 seconds

      return () => {
        clearInterval(interval);
      };
    }
  }, [running, time]);

  const formatTime = () => {
    const minutes = Math.floor(time / (60 * 100));
    const seconds = Math.floor((time / 100) % 60);
    const milliseconds = Math.floor(time % 100);
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;
  };

  const gameWhistle = () => {
    const peluit = new Audio('src/assets/mp3/gameWhistle.mp3');
    peluit.play()
  }

  const gameEnd = () => {
    const gameSelesai = new Audio('src/assets/mp3/airHorn.mp3');
    gameSelesai.play()
  }

  const startTimer = () => {
    setRunning(true);
    gameWhistle ();
  };

  const pauseTimer = () => {
    setRunning(false);
    gameWhistle ();
  };

  const resetTimer = () => {
    const konfirmasi = confirm('Reset Timer?')
    if(konfirmasi === true) {
      setTime(1 * 60 * 100);
    setRunning(false);
    }
  };

  if(time == 0) {
    gameEnd()
    setTime(1 * 60 * 100);
    setRunning(false)
  }

  return (
    <div style={{'background-image': `url(${img})`}} className="w-screen m-auto md:w-[400px] md:rounded-lg bg-no-repeat bg-center">
    <div className='m-auto text-center py-1 w-screen sm:w-[400px] bg-red-400 bg-opacity-60 md:rounded-lg'>
      <p className='mt-1 text-2xl font-bold text-zinc-300'>Game Countdown Timer</p>
      <div className='mt-1 mb-3 text-5xl font-bold text-zinc-100'>{formatTime()}</div>
      <div className='mb-3'>
        {!running ? (
          <button className='w-[100px] bg-green-300 px-5 mx-2 rounded-lg' onClick={startTimer}>
            <img src={"src/assets/img/whistlePlay.png"} />
          </button>
        ) : (
          <button className='w-[100px] bg-yellow-300 px-5 mx-2 rounded-lg' onClick={pauseTimer}><img src={"src/assets/img/whistlePause.png"} /></button>
        )}
        <button className='w-[100px] bg-slate-600 px-5 mx-2 rounded-lg' onClick={resetTimer}><img src={"src/assets/img/reset.png"} /></button>
      </div>
    </div>
    </div>
  );
};

export default CountdownTimer;
