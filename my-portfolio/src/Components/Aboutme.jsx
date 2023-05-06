import React from 'react';
import { FaRibbon, FaSuitcase } from 'react-icons/fa';
import { BiSupport  } from 'react-icons/bi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Heading from './SmallComponents/Heading';

const Aboutme = () => {
  return (
    <section className='lg:w-[1000px] container mx-auto lg:mt-10 lg:mb-10 md:mb-16 my-10 flex flex-col'>
      <Heading
        heading= "about me"
        sub= "My Introduction"
      />
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
        <div className='md:w-5/6 w-4/6 h-auto overflow-hidden rounded-3xl max-md:mx-auto'>
            <img className='h-full w-auto overflow-hidden object-cover' src="https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/271708847_2193658780787412_6392661202731767729_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFvUOrVlZyLO1EQhA1J9euaIRQKcp7ohpshFApynuiGm0KSoAPikPT9rtMVsWxqpDPKpeIrSuN2-4SVzBE3Pqxn&_nc_ohc=QsCoVMRBWz8AX-YoHzY&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfCAcTpBsfuD9Xtb9449Pipl_m01KRK3Wv2y2M7KIUf-pw&oe=6424153B" alt="" />
        </div>
        <div className='flex flex-col justify-between gap-6'>
            <div className='grid grid-cols-3 gap-3 text-[#d2d2d2] font-nunito'>
                <div className='border-2 border-[#D2D2D2] rounded-xl flex flex-col 2xs:p-3 p-1.5'>
                    <FaRibbon className='md:text-2xl text-xl mx-auto mt-1' />
                    <h4 className='font-medium sm:text-base 3xs:text-sm text-xs 2xs:my-1 my-0.5'>Experience</h4>
                    <p className='text-xs font-light mb-1'>8+ Years</p>
                </div>
                <div className='border-2 border-[#D2D2D2] rounded-xl flex flex-col 2xs:p-3 p-1.5'>
                    <FaSuitcase className='md:text-2xl text-xl mx-auto mt-1' />
                    <h4 className='font-medium sm:text-base 3xs:text-sm text-xs 2xs:my-1 my-0.5'>Completed</h4>
                    <p className='text-xs font-light mb-1'>48+ Projects</p>
                </div>
                <div className='border-2 border-[#D2D2D2] rounded-xl flex flex-col 2xs:p-3 p-1.5'>
                    <BiSupport className='md:text-2xl text-xl mx-auto mt-1' />
                    <h4 className='font-medium sm:text-base 3xs:text-sm text-xs 2xs:my-1 my-0.5'>Support</h4>
                    <p className='text-xs font-light mb-1'>Online 24/7</p>
                </div>
            </div>
            <div className='md:text-left font-nunito'>
                <p className='md:text-lg 2xs:text-base text-sm text-[#b8b8b8] font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quam quia, facere saepe assumenda ad repellendus veniam quaerat aliquid explicabo neque similique iusto minus labore sed eos cum laudantium molestiae, pariatur nulla error. Suscipit eos dicta quo pariatur aperiam laudantium.</p>
            </div>
            <div className='text-[#d2d2d2] sm:text-lg text-sm font-medium max-md:flex max-md:justify-center'>
                <Link className='md:h-14 2xs:h-12 h-12 md:w-48 2xs:w-44 w-36 border-2 border-[#d2d2d2] hover:bg-[#d2d2d2] hover:text-[#181818] transition-colors duration-300 rounded-xl flex items-center justify-center'>Download CV<HiOutlineDocumentText className='ml-2 text-2xl font-bold' /></Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme;
