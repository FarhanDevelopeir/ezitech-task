import React, { useState } from 'react'

const Header = () => {
  const [openToggle, setOpenToggle] = useState(false)
  const [openKeys, setKeys] = useState(false)

  const toggle=()=>{
    setOpenToggle(!openToggle)
    // setKeys(!openKeys)
  }
  const keys=()=>{
    setKeys(!openKeys)

  }
  return (
    <div className='bg-none text-white absolute w-full'>
      <header >
  <nav class="flex  w-[100%] border-b-2 items-center justify-between lg:justify-around p-6 lg:px-8" aria-label="Global">
    <div class="flex ">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-10 w-auto" src="http://ezitech.org/wp-content/uploads/2023/02/EZITECH-LOGO-1.png" alt=""/>
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button"
      onClick={toggle}
      class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <div class="relative">
        <button type="button" class="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white" aria-expanded="false">
          HOME
         
        </button>

       
       
      </div>

      <a href="#" class="text-lg font-semibold leading-6 text-white">ABOUT US</a>
      <a href="#" class="text-lg font-semibold leading-6 text-white">CERTIFICATIONS</a>
      <a href="#" class="text-lg font-semibold leading-6 text-white">INTERNSHIPS</a>
      <a href="#" class="text-lg font-semibold leading-6 text-white">SEMINARS</a>
      <a href="#" class="text-lg font-semibold leading-6 text-white">BONUS</a>
      <a href="#" class="text-lg font-semibold leading-6 text-white">LOGIN</a>

    </div>
    <div class=" hidden lg:flex lg:w-[10%] lg:justify-between    ">
    <div class="inline-block align-middle  h-[30px] min-h-[1em]  w-0.5 self-stretch  bg-neutral-400 opacity-100 dark:opacity-50"></div>
    <div className='  '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
    class=" h-6 inline-block align-middle">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>
    </div>

<div className='border-2 p-1  hover:bg-blue-700 hover:border-cyan-700 cursor-pointer  '>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

</div>

    </div>
  </nav>

  {openToggle ? <div class="lg:hidden" role="dialog" aria-modal="true">
 
 <div class="fixed inset-0 z-10"></div>
 <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
   <div class="flex items-center justify-between">
     <a href="#" class="-m-1.5 p-1.5">
       <span class="sr-only">Your Company</span>
       <img class="h-10 w-auto" src="http://ezitech.org/wp-content/uploads/2023/02/EZITECH-LOGO-1.png" alt=""/>
     </a>
     <button type="button"
     onClick={toggle}
     class="-m-2.5 rounded-md p-2.5 text-gray-700">
       <span class="sr-only">Close menu</span>
       <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
         <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
       </svg>
     </button>
   </div>
   <div class="mt-6 flow-root">
     <div class="-my-6 divide-y divide-gray-500/10">
       <div class="space-y-2 py-6">
         <div class="-mx-3">
           <button
           onClick={keys}
           type="button" class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
             Product
             
             <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
               <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
             </svg>
           </button>
           
           {openKeys?
           <div class="mt-2 space-y-2" id="disclosure-1">
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50">Analytics</a>
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50">Engagement</a>
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50">Security</a>
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50">Integrations</a>
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50">Automations</a>
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50">Watch demo</a>
           <a href="#" class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50">Contact sales</a>
         </div>
           :''}
         </div>
         <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Features</a>
         <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Marketplace</a>
         <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50">Company</a>
       </div>
       <div class="py-6">
         <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50">Log in</a>
       </div>
     </div>
   </div>
 </div>
</div>:''}
</header>
    </div>
  )
}

export default Header