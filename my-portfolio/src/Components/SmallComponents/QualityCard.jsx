import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

const QualityCard = ({quality}) => {
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
                <img className='md:h-[50px] h-10 mt-1 rounded-[10px]' src={quality.img} alt='abc' />
                <div className='w-full flex flex-col text-left'>
                    <p className='md:text-lg text-sm font-semibold'>{quality.role}</p>
                    <p className='md:text-sm text-xs font-medium'>{quality.company}</p>
                    <p className='md:text-xs text-[10px] font-normal'>{quality.date}</p>
                </div>
            </div>
            <div className='w-full md:text-[15px] text-xs font-normal mb-2.5'>
                {quality?.desc &&
                    <p className='overflow-hidden line-clamp-4 block max-w-full text-left'>{quality?.desc}</p>
                }
                {quality?.skills &&
                    <div className='mt-3'>
                        <div className='w-full flex gap-3'>
                            <b>Skills:</b>
                            <span className='flex flex-wrap gap-2'>
                                {quality?.skills?.map((skill, index) => (
                                    <p className='md:text-[15px] leading-5 text-xs font-normal' key={index}>• {skill}</p>
                                ))}
                            </span>
                        </div>
                    </div>
                }
                {quality?.course &&
                    <div className='mt-3'>
                        <div className='w-full flex gap-3'>
                            <b>Courses:</b>
                            <span className='flex flex-wrap gap-2'>
                                {quality?.course?.map((course, index) => (
                                    <p className='md:text-[15px] leading-5 text-xs font-normal' key={index}>• {course}</p>
                                ))}
                            </span>
                        </div>
                    </div>
                }
            </div>
            {quality.doc &&
                <>
                    <Link to={''} onClick={openModal}>
                        <img className="hidden group-hover:block h-[70px] w-fit rounded-[10px] hover:cursor-pointer hover:opacity-80" src={quality.doc} alt='abc' />
                    </Link>
                    <Modal
                        isOpen={modalIsOpen}
                        onClose={closeModal}
                        imageUrl={quality.doc}
                    />
                </>
            }
        </div>
    )
}

export default QualityCard;