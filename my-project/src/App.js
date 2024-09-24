import React, { useState } from 'react';
import { MdClear, MdAutorenew } from 'react-icons/md';
import selectnum from './img/selectnum.png';

const App = () => {
  
  const MainBalls = Array(69).fill();
  const Megaballs = Array(26).fill();

  const [selectedMainBalls, setSelectedMainBalls] = useState([]);
  const MainBallClick = (ball) => {
    if (selectedMainBalls.includes(ball)) {
      setSelectedMainBalls(selectedMainBalls.filter((num) => num !== ball));
    } else {
      if (selectedMainBalls.length < 5) {
        setSelectedMainBalls([...selectedMainBalls, ball]);
      } else {
        setSelectedMainBalls([...selectedMainBalls.slice(1), ball]);
      }
    }
  };

  const [selectedMegaBall, setSelectedMegaBall] = useState(null);
  const MegaBallClick = (ball) => {
    if (selectedMegaBall === ball) {
      setSelectedMegaBall(null);
    } else {
      setSelectedMegaBall(ball);
    }
  };

  const clearSelection = () => {
    setSelectedMainBalls([]);
    setSelectedMegaBall(null);
  };

  const autoSelect = () => {
    const randomMainBalls = [];
    while (randomMainBalls.length < 5) {
      const random = Math.floor(Math.random() * 69) + 1;
      if (!randomMainBalls.includes(random)) {
        randomMainBalls.push(random);
      }
    }
    const randomMegaBall = Math.floor(Math.random() * 26) + 1;

    setSelectedMainBalls(randomMainBalls);
    setSelectedMegaBall(randomMegaBall);
  };

  return (
    <div className='container flex flex-col items-center'>
      <div className='w-[80%] h-auto flex flex-row justify-between mt-5'>
        {/*-------------------------------------------- Main Ball----------------------------------------------- */}
        <div className='w-[820px] h-auto '>
          <h1 className='text-[26px] font-bold leading-7 underline'>
            Main Ball
          </h1>
          <div className='grid grid-cols-12 grid-row-6 mt-7 border bottom-2'>
            {MainBalls.map((_, index) => (
              <div
                key={index}
                className='w-[67px] h-[67px] flex items-center justify-center '
              >
                <button
                  className={`mainball family-selectnum ${
                    selectedMainBalls.includes(index + 1) ? 'main-selected' : ''
                  }`}
                  onClick={() => MainBallClick(index + 1)}
                >
                  {index + 1}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/*---------------------------------------------------------- Mega Ball--------------------------------------------------- */}
        <div className='w-[375px] h-auto grid-cols-12'>
          <h1 className='text-[26px] font-bold leading-7 underline'>
            Mega Ball
          </h1>
          <div className='grid grid-cols-5 grid-row-6 mt-7 border bottom-2'>
            {Megaballs.map((_, index) => (
              <div
                key={index}
                className='w-[67px] h-[67px] flex items-center justify-center '
              >
                <button
                  className={`megaball family-selectnum  ${
                    selectedMegaBall === index + 1 ? 'megaball-selected  ' : ''
                  }`}
                  onClick={() => MegaBallClick(index + 1)}
                >
                  {index + 1}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*--------------------------------------------- Selected Numbers --------------------------------------------- */}
      <div className='w-[80%] h-[127px] flex items-center mt-[31px] border bottom-2'>
        <div className='w-full h-auto flex justify-evenly items-center'>
          <img className='absolute mr-[680px]' src={selectnum} alt='' />
          <div className='w-[315px] h-[32px] text-[22px] family-selectnum relative'>
            Selected numbers:
          </div>

          {/* --------------------------------------------- display selected numbers ----------------------------------------------------------*/}
          <div className='w-[390px] h-[45px] flex items-center justify-center'>
            <div className='flex space-x-2'>
            
              {Array(5)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className='w-[45px] h-[45px] rounded-full border-2 flex justify-center items-center selected family-selectnum bg-[#D4AC54] text-black'
                  >
                    {selectedMainBalls[index] || ''}
                  </div>
                ))}
            </div>

            
            <div className='ml-4 w-[45px] h-[45px] rounded-full border-2 flex justify-center items-center bg-[#F44A33] text-white family-selectnum'>
              {selectedMegaBall || ''}
            </div>
          </div>
{/*---------------------------------------------------------- Clear button---------------------------------------------------------- */}
          <div className='w-[290px] h-[45px] flex justify-between items-center'>
            <button className='w-[111px] h-[45px] btn' onClick={clearSelection}>
              <span className=''>Clear</span>
              <MdClear className=' mx-1 ' />
            </button>
            {/*---------------------------------------------------------- Auto select button ----------------------------------------------------------*/}
            <button className='w-[159px] h-[45px] btn' onClick={autoSelect}>
              <span className='family'>Auto Select </span>
              <MdAutorenew className=' mx-2 ' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
