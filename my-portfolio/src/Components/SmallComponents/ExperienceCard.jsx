import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const ExperienceCard = ({exp}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <div className='w-full rounded-[10px] border-2 border-[#cca354] shadow-[0px_0px_15px_rgba(204,163,84,0.1)] md:py-3 md:px-4 p-[10px] flex flex-col md:gap-3 gap-2 transition-all duration-300 ease-in-out justify-between relative overflow-hidden hover:shadow-[0px_0px_20px_rgba(204,163,84,0.2)] sm:hover:translate-y-[-5px] group text-black'>
            <div className='w-full flex gap-3'>
                <img className='md:h-[50px] sm:h-10 h-6 mt-1 rounded-[10px] sm:block hidden' src={exp.img} alt='abc' />
                <div className='w-full flex flex-col text-left sm:gap-0 gap-1.5'>
                    <p className='md:text-lg sm:text-sm text-xs sm:font-semibold font-bold'>{exp.role}</p>
                    <p className='md:text-sm text-xs font-medium'>{exp.company}</p>
                    <p className='md:text-xs text-[10px] font-normal'>{exp.date}</p>
                </div>
            </div>
            <div className='w-full md:text-[15px] text-xs font-normal mb-2.5 sm:block hidden'>
                {exp?.desc &&
                    <p className='overflow-hidden line-clamp-4 block max-w-full text-left'>{exp?.desc}</p>

                }
                {exp?.skills &&
                    <div className='mt-3'>
                        <div className='w-full flex gap-3'>
                            <b>Skills:</b>
                            <span className='flex flex-wrap gap-2'>
                                {exp?.skills?.map((skill, index) => (
                                    <p className='md:text-[15px] leading-5 text-xs font-normal' key={index}>• {skill}</p>
                                ))}
                            </span>
                        </div>
                    </div>
                }
                {exp?.course &&
                    <div className='mt-3'>
                        <div className='w-full flex gap-3'>
                            <b>Courses:</b>
                            <span className='flex flex-wrap gap-2'>
                                {exp?.course?.map((course, index) => (
                                    <p className='md:text-[15px] leading-5 text-xs font-normal' key={index}>• {course}</p>
                                ))}
                            </span>
                        </div>
                    </div>
                }
            </div>
            {exp.doc &&
              <div className='sm:block hidden'>
                <Link to={''} onClick={openModal}>
                    <img className="hidden group-hover:block h-[70px] w-fit rounded-[10px] hover:cursor-pointer hover:opacity-80" src={exp.doc} alt='abc' />
                </Link>
                <Modal
                isOpen={modalIsOpen}
                onClose={closeModal}
                imageUrl={exp.doc}
              />
              </div>
            }
        </div>
  )
}

export default ExperienceCard;


