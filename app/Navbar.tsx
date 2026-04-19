'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react'


const Navbar = () => {
  const {status, data: session} = useSession();

  if (status === 'loading') return null;

  return (
    <div className='flex bg-slate-200 p-5 space-x-3'>
      <Link href='/' className='mr-5'>Next.js</Link>
      <Link href='/users'>Users</Link>
      { status === 'authenticated' &&
        <div className='flex space-x-3'>
          <span>{session.user?.name}</span>
          <Link href="/api/auth/signout" className='ml-3'>Sign Out</Link>
        </div>
      }
      { status === 'unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
    </div>
  )
}

export default Navbar
