import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex item-center justify-between w-[100%] pt-6' >
    <div className='h-[39px] w-[191px] ml-[80px] '>
        <img className='h-[39px] w-[191px]' src="/logo.png" alt="" />
    </div>
    <div className="flex item-center gap-6 w-[35%] mr-[60px]">
        <ul className='flex items-center gap-[40px]   text-[18px] text-[#3A3740] font-[400]'>
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
        </ul>
        <button className=' flex justify-center items-center w-[128px] h-[48px] pt-[13px] pr-[40px] pb-[13px] pl-[40px] rounded-[32px] bg-gradient-to-bl from-[#06286E] to-[#164EC0] text-[18px] font-[500] text-white'>Login</button>
    </div>
   </nav>
  )
}

export default Navbar
