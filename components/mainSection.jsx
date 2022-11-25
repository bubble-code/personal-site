
import Image from 'next/image'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import avatar from '../public/avataaars.svg'

const MainSection = () => {
    return (
        <section className='min-h-screen'>
            <div className='text-center p-10'>
                <h2 className='text-3xl py-2 text-teal-500 font-medium md:text-6xl xl:text-8xl' >Alejandro Obregon</h2>

                <p className='text-md py-5 leading-8 text-gray-800'>Full Stack Developer</p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <AiFillLinkedin />
                <AiFillTwitterCircle />
                <AiFillYoutube />
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
                <Image src={avatar} alt="Picture of the author" fill style={{ objectFit: 'cover' }} />
            </div>
        </section>
    )
}

export default MainSection