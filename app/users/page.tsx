import { Metadata } from 'next';
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Users',
  description: 'Browse and manage all users.',
};
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
    searchParams: Promise<{sortOrder?: string}>
}

const UsersPage = async ({searchParams}:Props) => {
    const { sortOrder } = await searchParams;
    return (
    <div>
        <h1 className='font-bold'>Users</h1>
        <Link href='/users/new' className='btn'>New User</Link>
        <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder}/>
        </Suspense>
    </div>
    )
}

export default UsersPage;
