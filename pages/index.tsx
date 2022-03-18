import { Fragment } from 'react';
import Image from 'next/image';

const IndexPage = () => {
  const now = new Date();
  const drawings = [...Array(18)].map((_, i) =>
    i === 17 ? '/drawings/18.gif' : `/drawings/${i + 1}.jpg`
  );
  const portifolio = (() => {
    const result: Array<Array<string>> = [];
    for (let i = 3; i < 6; i++) {
      result.push(drawings.filter((_, j) => (j + i) % 3 === 0));
    }
    return result;
  })();
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
        <div className='grid md:grid-cols-3 grid-cols-1 mx-2 gap-3'>
          {portifolio.map((arr, i) => (
            <div
              key={i}
              className='flex flex-col items-center overflow-hidden gap-3'>
              {arr.map((image: string, i) => (
                <img key={i} src={image} alt='desenho' className='rounded-lg' />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        id='currículo'
        className='hidden md:block text-center font-paragraph mx-4 md:mx-10 py-44'>
        <h2 className='underline font-title text-7xl'>Currículo</h2>
        <div className='text-4xl font-light mt-16'>
          <p className='mb-5'>Danielle Alícia Alves Fernandes</p>
          <p>{now.getFullYear() - (now.getMonth() >= 5 ? 1997 : 1998)}</p>
        </div>
        <div className='grid grid-cols-3 gap-8'>
          <div className='flex flex-col items-center gap-20'>
            <div className='w-full max-w-xs'>
              <h3 className='underline text-4xl'>Ferramentas</h3>
              <p className='font-light text-xl'>Digitais</p>
              <div className='flex flex-col mt-8 text-lg'>
                <div className='flex justify-between items-center'>
                  <p>Ai</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Ps</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Krita</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Figma</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-xs'>
              <h3 className='underline text-4xl'>Ferramentas</h3>
              <p className='font-light text-xl'>Tradicionais</p>
              <div className='flex flex-col mt-8 text-lg'>
                <div className='flex justify-between items-center'>
                  <p>Caneta</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Aquarela</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex flex-col mt-8 text-lg'>
                  <div className='flex justify-between items-center'>
                    <p>Caneta</p>
                    <div className='flex gap-1'>
                      <div className='h-2 w-2 rounded-full bg-black'></div>
                      <div className='h-2 w-2 rounded-full bg-black'></div>
                      <div className='h-2 w-2 rounded-full bg-black'></div>
                      <div className='h-2 w-2 rounded-full border border-black'></div>
                      <div className='h-2 w-2 rounded-full border border-black'></div>
                    </div>
                  </div>
                  <div className='flex justify-between items-center'>
                    <p>Lápis</p>
                    <div className='flex gap-1'>
                      <div className='h-2 w-2 rounded-full bg-black'></div>
                      <div className='h-2 w-2 rounded-full bg-black'></div>
                      <div className='h-2 w-2 rounded-full bg-black'></div>
                      <div className='h-2 w-2 rounded-full bg-black'></div>
                      <div className='h-2 w-2 rounded-full border border-black'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-xs'>
              <h3 className='underline text-4xl'>Educação</h3>
              <p className='text-justify text-xl mt-10'>
                Universiade Federal do Ceará, Sistemas e Mídias
                Digitais.(2018-2024)
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-20'>
            <div className='w-full max-w-xs'>
              <h3 className='underline text-4xl'>Habilidades</h3>
              <div className='flex flex-col mt-8 text-lg'>
                <div className='flex justify-between items-center'>
                  <p>Ilustração Digital</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Ilustração Tradicional</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Animação</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
              </div>
            </div>
            <Image src='/draw.png' width={360} height={660} />
          </div>
          <div className='flex flex-col items-center gap-20'>
            <div className='w-full max-w-xs'>
              <h3 className='underline text-4xl'>Soft skills</h3>
              <div className='flex flex-col mt-8 text-lg'>
                <div className='flex justify-between items-center'>
                  <p>Comunicação</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Cooperação</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Criatividade</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Organização</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Pesquisa</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Trabalho em Equipe</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-xs'>
              <h3 className='underline text-4xl'>Idiomas</h3>
              <div className='flex flex-col mt-8 text-lg'>
                <div className='flex justify-between items-center'>
                  <p>Inglês</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Espanhol</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
                <div className='flex justify-between items-center'>
                  <p>Yorubá</p>
                  <div className='flex gap-1'>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full bg-black'></div>
                    <div className='h-2 w-2 rounded-full border border-black'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full max-w-xs'>
              <h3 className='underline text-4xl'>Interesses</h3>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IndexPage;
