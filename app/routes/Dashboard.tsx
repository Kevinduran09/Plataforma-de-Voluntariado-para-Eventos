import React from 'react'
import type { Route } from '../+types/root';
import { Link } from 'react-router';

export const Dashboard = () => {
  return (
    <section className='h-screen flex w-full flex-col gap-7 justify-center items-center bg-blue-900'>
      <h2 className='text-4xl text-white font-semibold'>Dashboard</h2>


      <Link to={'/detail'}>
        <span className='text-white font-semibold bg-green-500 py-3 px-6 text-2xl rounded-xl hover:bg-green-600 transition-all hover:shadow-lg'>
          More Info
        </span>
      </Link>

    </section>
  )
}
