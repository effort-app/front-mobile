'use client';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-5 bg-neutral-900">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-row items-center justify-center w-full">
          </div>
          <div className="flex flex-row items-center justify-center w-full">
            <h1 className="text-2xl font-bold text-center text-neutral-600">Como está sendo seu dia?</h1>
          </div>
          <div className="flex flex-row items-center justify-center w-full fixed bottom-0 w-full p-4">
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
