import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='flex_div_2'>
            <div>
                <Link href='/'>Home</Link>
            </div>
            <div className='gap-16 flex flex-row'>
                <Link href='/dashboard'>dashboard</Link>
                <Link href='/register'>register</Link>
                <Link href='/login'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar