import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <nav className='px-4 py-4 bg-purple-400 text-white'>
      <ul className='flex'>
        <li className='mx-2 cursor-pointer bg-zinc-400'>Home</li>
        <li className='mx-2 cursor-pointer'>About</li>
        <li className='mx-2 cursor-pointer'>Contact</li>
      </ul>
    </nav>
      <h1 className="text-3xl font-italic underline my-12">
      Hello world!
    </h1>
    
    </>
  )
}
