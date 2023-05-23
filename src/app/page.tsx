'use client';
import Image from 'next/image';

import Capibara from '../assets/images/arts/capibara.png';

export default function Home() {
  return (
    
    <main className="flex min-h-screen max-w-screen flex-col bg-neutral-900 overflow-x-hidden overflow-y-hidden">
      <div className="z-10 w-screen max-w-screen items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-screen">
          <Image 
            src={Capibara} 
            alt="Capibara" 
            width={500} 
            height={500} 
            className='absolute bottom-0 '
          />
          <div className="flex flex-row items-center justify-center w-screen bg-neutral-700 h-14">
          </div>
          <div className="flex flex-row items-center justify-center w-screen">
            <h1 className="text-2xl font-bold text-center text-neutral-600 mt-5">Boa noite</h1>
          </div>
          <div className="flex flex-row items-center justify-center w-screen absolute bottom-0 pb-3">
            <input 
              className="w-11/12 h-12 bg-neutral-700 hover:bg-neutral-800 text-white font-light px-5 rounded-xl placeholder-neutral-400" 
              placeholder="Escreva aqui..."
            />
          </div>
        </div>
      </div>
    </main>
  )
}
