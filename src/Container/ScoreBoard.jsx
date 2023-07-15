import {useState} from "react";
import img from "./waterflame.png"
import bg from "./bg.png"

const ScoreBoard = () => {
  const [countL, setCountL] = useState(0);

  const count1kiri = () => {
    setCountL(prevCountL => prevCountL + 1);
  }

  const count2kiri = () => {
    setCountL(prevCountL => prevCountL + 2);
  }

  const count3kiri = () => {
    setCountL(prevCountL => prevCountL + 3);
  }

  const [countR, setCountR] = useState(0);

  const count1kanan = () => {
    setCountR(prevCountR => prevCountR + 1);
  }

  const count2kanan = () => {
    setCountR(prevCountR => prevCountR + 2);
  }

  const count3kanan = () => {
    setCountR(prevCountR => prevCountR + 3);
  }

  const resetHitung = () => {
    const hapusScore = confirm('Reset Score Board?')
     if(hapusScore === true) {
      setCountL(0);
      setCountR(0);
     }
  }

  return (
    <div style={{'background-image': `url(${bg})`}} className="w-screen m-auto md:w-[400px] md:rounded-lg bg-no-repeat bg-center">

      <div className="w-screen m-auto md:w-[400px] md:rounded-lg bg-amber-200 bg-opacity-60 mt-2 pt-8 pb-10">
        <div className="flex justify-center">
          <img className=" w-[50px]" src={img} />  
          <p className="mb-3 text-center text-5xl font-bold">Score Board</p>
        </div>
        <div>
        <div className="grid grid-cols-12">
            <p className="col-span-1"></p>
            <p className="w-[110px] bg-slate-300 text-slate-800 rounded-md m-auto col-span-4 text-center text-xl font-bold mt-5">Home</p>
            <p className="col-span-2"></p>
            <p className="w-[110px] bg-slate-300 text-slate-800 rounded-md m-auto col-span-4 text-center text-xl font-bold mt-5">Away</p>
            <p className="col-span-1"></p>
          </div>
          <div className="grid grid-cols-12">
            <p className="col-span-1"></p>
            <p className="w-[110px]  py-1 pb-2 bg-slate-600 text-slate-100 rounded-md m-auto col-span-4 text-center text-6xl font-extrabold mt-3 mb-10">{countL}</p>
            <p className="col-span-2"></p>
            <p className="w-[110px]  py-1 pb-2 bg-slate-600 text-slate-100 rounded-md m-auto col-span-4 text-center text-6xl font-extrabold mt-3 mb-10">{countR}</p>
            <p className="col-span-1"></p>
          </div>
          <div className="grid grid-cols-11">
            <p className="col-span-1"></p>
            <div className="flex justify-between col-span-4">
              <button className="w-fit px-1 bg-green-400 rounded-md font-bold" onClick={count1kiri}>+1</button>
              <button className="w-fit px-1 bg-yellow-400 rounded-md font-bold" onClick={count2kiri}>+2</button>
              <button className="w-fit px-1 bg-red-400 rounded-md font-bold" onClick={count3kiri}>+3</button>
            </div>
            <p className="col-span-1"></p>
            <div className=" flex justify-between col-span-4">
              <button className="w-fit px-1 bg-green-400 rounded-md font-bold" onClick={count1kanan}>+1</button>
              <button className="w-fit px-1 bg-yellow-400 rounded-md font-bold" onClick={count2kanan}>+2</button>
              <button className="w-fit px-1 bg-red-400 rounded-md font-bold" onClick={count3kanan}>+3</button>
            </div>
            <p className="col-span-1"></p>
          </div>
        </div>
        <div className="grid place-content-center">
          <button onClick={resetHitung} className="w-fit px-2 bg-zinc-800 rounded-md font-bold text-zinc-100 m-auto text-lg text-center mt-8">Reset Score</button>
        </div>
      </div>
    </div>
  )
}

export default ScoreBoard