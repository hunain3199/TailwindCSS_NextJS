import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div className="bg-red-900 text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis totam, consequuntur dolores explicabo voluptatibus mollitia impedit blanditiis ipsum dolor nam fugit maxime, iure sint.
     </div>
    </>
  )
}
