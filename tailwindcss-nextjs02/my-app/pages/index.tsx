import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <nav className='bg-purple-800 text-white flex justify-between'>
        {/* <img src="https://randomuser.me/api/portraits/men/75.jpg" className='pt-3 px-3 h-12 rounded-2xl' alt="" srcSet='' /> */}
        <span className='text-xl flex items-center mx-3'>Phones<h3 className='inline text-slate-900 font-extrabold'>ly</h3></span>
      <ul className='px-28 py-4 flex space-x-11 justify-end'>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About</li>
        <li className='cursor-pointer'>Catalogue</li>
        <li className='cursor-pointer'>Contact Us</li>
        </ul>
    </nav>
     <main className='bg-fuchsia-200 flex'>
      <div className="main py-40 pl-9">
        <div className='text-6xl'>
          The best phones in the town
        </div>
        <p className='py-3 w-1/2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed debitis aspernatur voluptas sunt aperiam, magni earum, commodi, molestias distinctio dicta esse dolore sint tempora.</p>
        <div className="buttons space-x-3 my-4">
          <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-700 mx-4">Buy Now</button>
          <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-slate-900 hover:bg-fuchsia-700 mx-4">Contact Us</button>
        </div>
      </div>
     </main>
    </>
  )
}
