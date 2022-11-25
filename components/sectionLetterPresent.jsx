
import Image from "next/image"
import designer from '../public/designer.jpg'

export const SectionPresentation = () => {
    return (
        <section className='text-center'>
            <h3 className='text-3xl py-1'>Service I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 text-justify md:text-xl max-w-3xl mx-auto'>
                Since the beginning of my career, I have been working on a wide range of <span className='text-cyan-500'>technologies</span> and <span className='text-cyan-500'>projects.</span> I have worked with different teams and have been able to develop my skills in different areas. I have worked with different teams and have been able to develop my skills in different areas.
            </p>
            <div className='lg:flex gap-10'>
                <div className='text-center shadow-lg flex flex-col items-center p-10 rounded-2xl' >
                    <Image src={designer} alt="Picture of the author" style={{ objectFit: 'cover', borderRadius: '50px', width: '80px', height: '80px' }} />
                    <h3 className='text-xl font-medium pt-8 pb-2'>Beautifull Designes</h3>
                    <p className='text-md py-2 leading-8 text-gray-800 text-justify'>
                        Creating elegant designs soited for your business. I will create a design that will make your business stand out. I will create a design that will make your business stand out. I will create a design that will make your business stand out.
                    </p>
                </div>
                <div className='text-center shadow-lg flex flex-col items-center p-10 rounded-2xl' >
                    <Image src={designer} alt="Picture of the author" style={{ objectFit: 'cover', borderRadius: '50px', width: '80px', height: '80px' }} />
                    <h3 className='text-xl font-medium pt-8 pb-2'>Beautifull Designes</h3>
                    <p className='text-md py-2 leading-8 text-gray-800 text-justify'>
                        Creating elegant designs soited for your business. I will create a design that will make your business stand out. I will create a design that will make your business stand out. I will create a design that will make your business stand out.
                    </p>
                </div>
                <div className='text-center shadow-lg flex flex-col items-center p-10 rounded-2xl' >
                    <Image src={designer} alt="Picture of the author" style={{ objectFit: 'cover', borderRadius: '50px', width: '80px', height: '80px' }} />
                    <h3 className='text-xl font-medium pt-8 pb-2'>Beautifull Designes</h3>
                    <p className='text-md py-2 leading-8 text-gray-800 text-justify'>
                        Creating elegant designs soited for your business. I will create a design that will make your business stand out. I will create a design that will make your business stand out. I will create a design that will make your business stand out.
                    </p>
                </div>


            </div>
        </section>
    )
}
