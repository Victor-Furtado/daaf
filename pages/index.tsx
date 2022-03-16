import { Fragment } from 'react';
import Image from 'next/image';

const IndexPage = () => {
  const now = new Date();
  return (
    <Fragment>
      <div className='flex flex-col-reverse md:flex-row justify-between gap-3 items-center my-24 mx-4 md:mx-10'>
        <p className='text-3xl font-paragraph md:w-1/2 font-light'>
          Olá o meu nome é <span className='font-bold'>Danielle Alícia</span> e
          eu sou uma ilustradora tenho 24 anos e estudo na Universidade Federal
          do Ceará (UFC) cursando Sistemas e Mídias digitais, procuro novas
          experiências e ambientes que agreguem na minha formação profissional.
        </p>
        <Image
          src='/photo.png'
          width={510}
          height={510}
          layout='intrinsic'
          className=' rounded-full'
        />
      </div>
      <div id='portifolio' className='bg-secondary py-44 w-full text-white'>
        <h2 className='text-center underline font-title text-7xl'>Portfólio</h2>
        <div className='grid md:grid-cols-3 grid-cols-1 mx-2'></div>
      </div>
      <div
        id='currículo'
        className='text-center font-paragraph mx-4 md:mx-10 py-44'>
        <h2 className='underline font-title text-7xl'>Currículo</h2>
        <div className='text-4xl font-light mt-16'>
          <p className='mb-5'>Danielle Alícia Alves Fernandes</p>
          <p>{now.getFullYear() - (now.getMonth() >= 5 ? 1997 : 1998)}</p>
        </div>
        <div className='grid grid-cols-3 gap-8'>
          <div className='flex flex-col items-center gap-20'>
            <div>
              <h3 className='underline text-4xl'>Ferramentas</h3>
              <p className='font-light text-xl'>Digitais</p>
            </div>
            <div>
              <h3 className='underline text-4xl'>Ferramentas</h3>
              <p className='font-light text-xl'>Tradicionais</p>
            </div>
            <div>
              <h3 className='underline text-4xl'>Educação</h3>
            </div>
          </div>
          <div className='flex flex-col items-center gap-20'>
            <div>
              <h3 className='underline text-4xl'>Habilidades</h3>
            </div>
            <Image src='/draw.png' width={360} height={660} />
          </div>
          <div className='flex flex-col items-center gap-20'>
            <div>
              <h3 className='underline text-4xl'>Idiomas</h3>
            </div>
            <div>
              <h3 className='underline text-4xl'>Interesses</h3>
            </div>
            <div>
              <h3 className='underline text-4xl'>Soft skills</h3>
            </div>
          </div>
        </div>
      </div>
      <div id='footer' className='bg-footer pb-20 pt-44 w-full text-white'>
        <h2 className='text-center underline font-title text-7xl mb-20'>
          Contatos
        </h2>
        <div className='flex gap-8 justify-between mx-2 md:mx-10'>
          <div className='flex items-center gap-5'>
            <div className='flex flex-col text-center items-center gap-1'>
              <h3 className='underline text-4xl'>Ilustradora</h3>
              <div className='my-4'>
                <Image
                  src='/profile.png'
                  width={120}
                  height={120}
                  className='rounded-full'
                />
              </div>
              <p className='font-light text-xl'>Danielle Alicia</p>
              <p className='font-light text-xl'>Alves Fernandes</p>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-3'>
                <div className='text-gray-500 bg-white rounded-full p-2'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <p className='font-light'>danielle.alicia3006@alu.ufc.br</p>
              </div>
              <a
                href='https://www.instagram.com/daniellealiciaalves/'
                className='flex items-center gap-3'>
                <div className='text-gray-500 bg-white rounded-full p-2'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                    />
                  </svg>
                </div>
                <p className='font-light'>@daniellealiciaalves</p>
              </a>
            </div>
          </div>
          <div className='border self-stretch'></div>
          <div className='flex items-center gap-5'>
            <div className='flex flex-col text-center items-center gap-1'>
              <h3 className='underline text-4xl'>Ajuda Salvadora</h3>
              <div className='my-4'>
                <Image
                  src='/profile.png'
                  width={120}
                  height={120}
                  className='rounded-full'
                />
              </div>
              <p className='font-light text-xl'>Victor Furtado</p>
              <p className='font-light text-xl underline'>
                Fullstack Developer
              </p>
            </div>
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-3'>
                <div className='text-gray-500 bg-white rounded-full p-2'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <p className='font-light'>victor.furtado@devpunk.page</p>
              </div>
              <a href='https://github.com/' className='flex items-center gap-3'>
                <div className='text-gray-500 bg-white rounded-full p-2'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                    />
                  </svg>
                </div>
                <p className='font-light'>Victor-Furtado</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IndexPage;
