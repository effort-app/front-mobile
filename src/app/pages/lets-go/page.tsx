'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import link from 'next/link';

import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {IoPersonCircleSharp} from 'react-icons/io5';
import {MdOutlineCalendarViewMonth, MdOutlineExitToApp} from 'react-icons/md';
import Capibara from '../../../assets/images/arts/capibara.png';

export default function Home() {
  const router = useRouter();
  const [saudacao, setSaudacao] = useState('');
  const [mensagem, setMensagem] = useState('');


  useEffect(() => {
    const horaAtual = new Date().getHours();

    if (horaAtual >= 0 && horaAtual < 6) {
      setSaudacao('Boa madrugada');
    } else if (horaAtual >= 6 && horaAtual < 12) {
      setSaudacao('Bom dia');
    } else if (horaAtual >= 12 && horaAtual < 18) {
      setSaudacao('Boa tarde');
    } else {
      setSaudacao('Boa noite');
    }
  }, []);

  const handleEnviarMensagem = () => {
    // Aqui você pode adicionar a lógica para lidar com o envio da mensagem
    console.log('Mensagem enviada:', mensagem);
    setMensagem(''); // Limpa o conteúdo do input após o envio
  };
  
  const handleComingSoon = () => {
    router.push('pages/coming-soon');
  };

  const handleExitApp = () => {
    router.push('/');
  };


  return (
    
    <main className="flex min-h-screen max-w-screen flex-col bg-neutral-900 overflow-x-hidden overflow-y-hidden">
      <div className="z-10 w-screen max-w-screen items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-screen">
          <div className="flex flex-row items-center justify-around w-screen bg-neutral-800 h-14 shadow-black-xl">
            <div className='flex flex-row items-center justify-center mr-32'>
              <button className='text-4xl text-neutral-400' onClick={handleComingSoon}>
                <IoPersonCircleSharp />
              </button>
            </div>
            <div className='flex flex-row items-center justify-center'> 
              <button className='text-3xl text-neutral-400 ml-10' onClick={handleComingSoon}>
                <MdOutlineCalendarViewMonth />
              </button>
              <button className='text-3xl text-neutral-400 ml-5' onClick={handleExitApp}>
                <MdOutlineExitToApp />
              </button>
            </div>  
          </div>
          <div className="flex flex-row items-center justify-center w-screen">
            <h1 className="text-2xl font-bold text-center text-neutral-600 mt-5">{saudacao}, Marcos.</h1>
          </div>
          <div className="flex flex-row items-center text-center justify-center w-52 mt-5 rounded-xl bg-rose-500 p-5">
            <h1>Percebi que as 19 você está livre, oque acha desse horário?</h1>
          </div>
          <div className="flex flex-row items-center justify-center w-screen">
            <div className="text-center flex flex-col items-center justify-center w-24 mt-5 rounded-xl bg-rose-500 hover:bg-rose-700 p-4 mr-2">
              Ótimo! ✅ 
            </div>
            <div className="text-center flex flex-col items-center justify-center w-24 mt-5 rounded-xl bg-rose-500 hover:bg-rose-700 p-4 ml-2">
              Negativo 👎
            </div>
          </div>
          <div className="flex flex-row items-center justify-center w-screen fixed bottom-0">
            <Image 
              src={Capibara} 
              alt="Capibara" 
              width={500} 
              height={500} 
            />
          </div>
          <div className="flex flex-row items-center justify-center w-screen absolute bottom-0 pb-3 mx-14">
            <div className="relative mx-10">
              <input 
                className="w-80 h-12 bg-neutral-700 hover:bg-neutral-800 text-white font-light px-5 rounded-xl placeholder-neutral-400" 
                placeholder="Escreva aqui..."
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              />
              <button
                className="absolute right-0 top-0 bottom-0 bg-neutral-700 hover:bg-neutral-800 text-white text-2xl font-semibold py-2 px-4 rounded-r-xl"
                onClick={handleEnviarMensagem}
              >
                <BsFillArrowUpCircleFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
