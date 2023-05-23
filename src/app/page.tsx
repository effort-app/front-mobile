'use client';
import Image from 'next/image';

import Capibara from '../assets/images/arts/capibara.png';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-900 overflow-x-hidden overflow-y-hidden">
      <div className="z-10 w-full max-w-screen items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full">
          <Image 
            src={Capibara} 
            alt="Capibara" 
            width={500} 
            height={500} 
            className='absolute bottom-0 '
          />
          <div className="flex flex-row items-center justify-center w-full bg-neutral-700 h-14">
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <h1 className="text-2xl font-bold text-center text-neutral-600 mt-5">Como está sendo seu dia?</h1>
          </div>
          <div className="flex flex-row items-center justify-center w-full absolute bottom-0 w-full p-4">
            <input 
              className="w-screen h-12 bg-neutral-700 hover:bg-neutral-800 text-white font-light py-2 px-4 rounded-xl drop-shadow-xl placeholder-neutral-400" 
              placeholder="Escreva aqui..."
            />
          </div>
        </div>
      </div>
    </main>
  )
}
