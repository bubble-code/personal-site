

import Image from 'next/image'
import web1 from '../public/web1.jpg'
// import web2 from '../public/web2.jpg' 
import web3 from '../public/web3.jpg'
// import './../styles/personalited.css'

export const SectionPorfolio = () => {
    return (
        <section>
            <div className='py-10'>
                <h3 className='text-3xl py-1'>Portofolio</h3>
                <p className='text-md py-2 leading-8 text-gray-800 text-justify max-w-3xl m-auto'>
                    Since the beginning of my career, I have been working on a wide range of <span className='text-cyan-500'>technologies</span> and <span className='text-cyan-500'>projects.</span> I have worked with different teams and have been able to develop my skills in different areas. I have worked with different teams and have been able to develop my skills in different areas.
                </p>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
                <div className='relative w-100 h-100'>
                    <Image src={web1} alt="Picture of the author" style={{ objectFit: 'cover', borderRadius: '5px' }} className='img-portofolio' />
                </div>
                <div>
                    <Image src={web3} alt="Picture of the author" style={{ objectFit: 'cover', borderRadius: '5px' }} className='img-portofolio' />
                </div>
            </div>
        </section>
    )
}
