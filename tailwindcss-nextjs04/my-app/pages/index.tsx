import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className="mx-4 bg-red-500 text-white m-[67px] w-[30vw]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptates porro, doloribus eveniet quae beatae maiores dolores, a soluta, vitae nisi recusandae officiis.
      </div>
    </>
  )
}
