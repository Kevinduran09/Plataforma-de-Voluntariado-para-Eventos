import React from 'react'
import LoginForm from './LoginForm'

export default function LoginCard() {
    return (
        <div className='md:shadow-lg md:shadow-gray-400  flex flex-row items-center justify-center  md:w-[60%] rounded-md mx-4 p-4'>
            {/* Section Info */}
            <section className='flex-1 hidden md:flex h-full flex-col items-center justify-center gap-5 '>

                <h2 className='text-4xl font-bold text-center text-black leading-snug'>
                    Unete y forma parte de la comunidad de <span className='text-green-500 '>VoluntHub</span>
                </h2>
                <span className='text-2xl font-semibold text-gray-500 mt-4'>Juntos por una comunidad mejor</span>
                <div className='w-1/2 h-1/2 flex justify-center items-center my-4'>
                    <img src="/login-icon.svg" alt="" />
                </div>

            </section>
            {/* Section Form */}
            <section className='flex-1'>
                <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-16 w-auto"
                            src="/volunthub-512x512.png"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-4xl font-extrabold tracking-tight text-gray-800">
                            Inicia Sesión
                        </h2>
                    </div>
                    <LoginForm />
                </div>
            </section>
        </div>
    )
}
