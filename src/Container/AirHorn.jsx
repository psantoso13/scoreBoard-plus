import img from "./truckHorn.png"

const AirHorn = () => {

  const gameEnd = () => {
    const gameSelesai = new Audio('src/assets/mp3/airHorn.mp3');
    gameSelesai.play()
  }
  const gabut = () => {
    gameEnd ();
  };


  return (
    <div style={{'background-image': `url(${img})`}} className="w-screen m-auto md:w-[400px] md:rounded-lg bg-no-repeat bg-center">
    <div className='m-auto text-center mt-2 py-1 w-screen sm:w-[400px] bg-emerald-500 bg-opacity-60 md:rounded-lg'>
      <div className='my-3'>
      <button className='w-[120px] bg-amber-200 py-5 px-5 mx-2 rounded-lg' onClick={gabut}>
            <img src={"src/assets/img/airHorn.png"} />
          </button>
      </div>
    </div>
    </div>
  );
};

export default AirHorn;
