import { Link } from 'react-router';

export default function LandingComponent() {
    return (
        <section className='font-sans flex-1 justify-center items-center'>
            <article className='flex flex-col md:flex-row gap-16 items-start justify-center my-16 md:mx-16 px-2'>
                <div className='w-full md:w-1/2 flex flex-col gap-3'>
                    <h1 className='text-4xl/tight md:text-6xl/tight font-bold my-2'>
                        Haz de tu comunidad un lugar mejor con <span className='text-green-400'>VoluntHub</span>
                    </h1>
                    <span className='text-gray-600 font-semibold mt-3'>Unete y colabora con miembros de tu comunidad  en actividades de bienestar comunitario</span>

                    <Link to={'/EventDashboard'} className='bg-green-500 w-fit p-2 mt-4 rounded-lg text-white hover:bg-green-600 transition-all cursor-pointer'>Explorar ahora</Link>
                </div>
                <div className='w-full md:w-lg'>
                    <img
                        className=''
                        src='/volunteering-animate.svg'
                    />
                </div>
            </article>
        </section>
    );
}




