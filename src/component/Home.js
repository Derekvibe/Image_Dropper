import React from 'react'

const Home = () => {
  return (
    < div className="flex flex-col justify-center items-center h-screen text-center">
    
        <h1 className='text-white lg:text-6xl sm:text-3xl font-semibold'>
            Dragger Drop
        </h1>

        <div className='border-2 rounded-md mt-6 mx-6 w-2/4 '>
            <h2 className='text-white text-xl mt-4 font-medium'>Hi Welcome to DraggerDrop</h2>
            <p className='text-white text-xs mt-2 italic font-medium'>..... Home of Multiple Image Drop.....</p>

            <form action="" className='mt-6'>
                <h3 className='text-3xl text-white font-semibold'>LOG IN</h3>
                <p className='mt-2 mx-12'>
                    <input type="email" placeholder='Email Address'
                    className='w-full p-2 rounded-md'/>
                </p>

                <p className='mt-2 mx-12'>
                    <input type="password" placeholder='Password' className='w-full p-2 rounded-md '/>
                </p>

                <button className='text-white border-2 py-1 px-3 bg-black rounded-md my-5 font-medium hover:bg-gray-400 hover:text-black'>
                    Let's Go
                </button>
                

            </form>

        </div>
    
    </div>
  );
}

export default Home;