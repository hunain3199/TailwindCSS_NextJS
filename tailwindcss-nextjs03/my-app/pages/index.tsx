import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <ul className='flex space-x-3 space-y-3'>
          <li></li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div className="w-56 bg-red-500 rounded-lg border-2 border-yellow-400">
        I am a div
      </div>
    </>
  )
}
