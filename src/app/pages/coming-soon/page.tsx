'use client';
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import {FaArrowLeft} from 'react-icons/fa';

const ComingSoon: NextPage = () => {
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

  const handleComingSoon = () => {
    router.push('/pages/home');
  };

  return (
    
    <main className="flex min-h-screen max-w-screen flex-col bg-neutral-900 overflow-x-hidden overflow-y-hidden">
      <div className="z-10 w-screen max-w-screen items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-screen">
          <div className="flex flex-row items-center justify-between w-screen bg-neutral-800 h-14 shadow-black-xl">
            <div className='flex flex-row items-center justify-center ml-8'>
              <button className='text-2xl text-neutral-400' onClick={handleComingSoon}>
              <FaArrowLeft />
              </button>
            </div>
            <div className='flex flex-row items-center justify-center'> 
              <button className='text-3xl text-neutral-400 ml-10'>
              </button>
            </div>  
          </div>
          <div className="flex flex-row items-center justify-center w-screen">
            <h1 className="text-2xl font-bold text-center text-neutral-600 mt-5">{saudacao}, Marcos.</h1>
          </div>
          <div className="flex flex-row items-start justify-start w-screen">
            <h1 className="text-xl font-regular text-left text-neutral-600 mt-14 ml-3">
                <h1 className='text-2xl font-bold text-rose-500'>Por enquanto,</h1>essa funcionalidade não está diponível. Em breve traremos novidades para seu App favorito!
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center w-screen mt-24">
            <button className='rounded-xl bg-rose-500 p-4 font-bold'>Receber aviso</button>
          </div>
          <div className="flex flex-row items-center justify-center w-screen absolute bottom-0 pb-3">
            <h1 className='font-light text-xs text-neutral-600'>Effort App Beta - 052023</h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ComingSoon;
