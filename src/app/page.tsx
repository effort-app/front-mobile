'use client';
import Image from 'next/image'

// import { Navbar, Text, Input } from '@nextui-org/react'

import Input from 'antd/lib/input'


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-black">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full">
          <Input className='bg-black'/>
        </div>
      </div>
    </main>
  )
}
