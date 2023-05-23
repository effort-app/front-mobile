'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import link from 'next/link';

import {BsFillArrowUpCircleFill} from 'react-icons/bs';
import {IoPersonCircleSharp} from 'react-icons/io5';
import {MdOutlineCalendarViewMonth} from 'react-icons/md';
import Capibara from '../assets/images/arts/capibara.png';
import Logo from '../assets/images/logos/dark-logo.png';

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
  
  const handleHome = () => {
    router.push('pages/home');
  };


  return (
    
    <main className="flex min-h-screen max-w-screen flex-col bg-neutral-900 overflow-x-hidden overflow-y-hidden">
      <div className="z-10 w-screen max-w-screen items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-screen">
          <div className="flex flex-row items-center justify-center w-screen">
            <h1 className="text-xl font-bold text-center text-neutral-600 mt-14">Bem vindo ao seu melhor amigo.</h1>
          </div>
          <div className="flex flex-row items-center justify-center w-screen mt-14">
            <Image 
              src={Logo} 
              alt="Effort" 
              width={120} 
              height={120} 
            />
          </div>
          <div className="flex flex-col items-center justify-center w-screen pb-3 mx-14 mt-24">
            <input 
              className="w-80 h-12 bg-neutral-700 hover:bg-neutral-800 text-white font-light px-5 rounded-xl placeholder-neutral-400" 
              placeholder="E-mail"
            />
            <input 
              className="w-80 h-12 mt-3 bg-neutral-700 hover:bg-neutral-800 text-white font-light px-5 rounded-xl placeholder-neutral-400" 
              placeholder="Senha"
              type='password'
            />
          </div>
          <div className="flex flex-row justify-center w-screen">
            <h1 className='font-light text-xs text-neutral-600'>Esqueceu a senha? <span className='font-bold'>Clique aqui.</span></h1>
          </div>
          <div className="flex flex-row items-center justify-center w-screen mt-8">
            <button className='rounded-xl bg-rose-500 p-4 font-bold w-40' onClick={handleHome}>Entrar</button>
          </div>
        </div>
      </div>
    </main>
  )
}
