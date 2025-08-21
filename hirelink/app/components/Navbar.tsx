import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-blue-800 text-white montserrat'>
        <div className='flex justify-between items-center py-4 px-10'>
            <div>
                <h1 className="text-3xl">HireLink</h1>
            </div>

            <div className='flex space-x-10'>
                <button>Hiring Search</button>
                <button>Profile</button>
                <button>Explore Companies</button>
            </div>

            <div>
                <button>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar