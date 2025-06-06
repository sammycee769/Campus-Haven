import React from 'react'

export default function Forgotpasword() {
  return (
    <>
     <div className='m-4 mb-0'>
                <div className='flex text-blue-600 justify-between p-4 pb-0 font-bold font-serif'>
                   CampusHaven
                   <a className="text-black underline" href="/login">Go Back</a>
                </div>
                <hr class="border-t border-gray-600"/>
    </div>
    <div className="flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-md p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Password reset</h1>
            <p className="mb-4 text-gray-700">
            input your email address to reset your password               
            </p>
    
            <label className="block font-semibold mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              className="w-full px-3 py-2 rounded-md border outline-none mb-4"
            />
    </div>
    </div>
    </>
  )
}
