import React from 'react'
import { FaFacebook,FaYoutube,FaInstagram,FaTwitter,FaTiktok } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from 'next/link';

const footer = () => {
  return (
    <div>
  <footer className='bg-gray-100 py-8 px-10 text-gray-800 flex justify-around'>
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
      <div>
        <h3 className='font-bold text-xl mb-4'>Core Courses</h3>
        <ul className='space-y-2 text-lg'>
          <li><a href='#'></a>Programming Fundamentals</li>
          <li><a href='#'></a>Web2 Using NextJS</li>
          <li><a href='#'></a>Earn as You Learn</li>
          
        </ul>
      </div>
      <div>
        <h3 className='font-bold text-xl mb-4'>Advanced Courses</h3>
        <ul className='space-y-2 text-lg'>
          <li><a href='#'></a>Web 3 and Metaverse</li>
          <li><a href='#'></a>Cloud-Native Computing</li>
          <li><a href='#'></a>Artificial Intelligence (AI) and Deep Learning</li>
          <li><a href='#'></a>Ambient Computing and IoT</li>
          <li><a href='#'></a>Genomics and Bioinformatics</li>
          <li><a href='#'></a>Network Programmability and Automation</li>
          
        </ul>
      </div>

      <div>
      <h3 className=' text-xl font-bold mb-4'>Social Links</h3>
      <div className='flex space-x-4 mb-4'>
        <Link href="/#"><FaFacebook/></Link>
        <Link href="/#"><FaYoutube /></Link>
        <Link href="/#"><FaTwitter/></Link>
        <Link href="/#"><FaInstagram/></Link>
        <Link href="/#"><FaTiktok /></Link>
      </div>
      <div>
        <a href="Mailto:education@governorsindhgmail.com" className='text-blue-500 underline flex items-center gap-3 '><CiMail/>education123@gmail.com</a>
      </div>

      </div >
       
    </div>
  </footer> 
  </div>
  )
}

export default footer