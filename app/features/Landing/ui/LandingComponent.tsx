import { Link } from 'react-router';

export default function LandingComponent() {
    return (
        <section className='font-sans flex justify-center items-center h-auto md:h-screen'>
            <article className='flex flex-col md:flex-row gap-5 md:gap-16 items-start justify-center my-4 md:mx-16 px-2'>
                <div className='w-full md:w-1/2 flex flex-col items-center md:items-baseline gap-3 order-2'>
                    <h1 className='text-4xl/tight md:text-6xl/tight font-bold my-2 text-center md:text-start'>
                        Haz de tu comunidad un lugar mejor con <span className='text-green-400'>VoluntHub</span>
                    </h1>
                    <span className='text-gray-600 text-2xl font-semibold mt-3 text-center md:text-start'>Unete y colabora con miembros de tu comunidad  en actividades de bienestar comunitario</span>

                    <Link to={'/eventDashboard'} className='text-xl bg-green-500 w-fit px-2 py-3 mt-4 rounded-lg text-white hover:bg-green-600 transition-all cursor-pointer'>Explorar ahora</Link>
                </div>
                <div className='w-[70%] md:p-0 md:w-lg   m-auto md:m-0'>
                    <img
                        className=''
                        src='/volunteering-animate.svg'
                    />
                </div>
            </article>
        </section>
    );
}




