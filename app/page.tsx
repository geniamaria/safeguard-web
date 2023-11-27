'use client'

import Footer from '@/components/pt/footer'
import { Header } from '@/components/pt/header'
import Link from 'next/link'
import { Fade, Slide } from 'react-awesome-reveal'
import Image from 'next/image'
import Testimonials from '@/components/pt/testimonials'



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section
          className='h-screen bg-background-home bg-cover'
          style={{
            backgroundImage: `url('background-home.jpg')`
          }}
        >
          <div className='h-full w-1/3 bg-black/70 p-1'>
            <p className="text-amber-400 border mt-32 mx-auto border-amber-400 p-5 text-base font-bold w-fit">Logo</p>
            <h1 className='font-normal mt-5 text-2xl text-white w-fit mx-auto'>SAFEGUARD</h1>
            <p className='text-white ml-10 mt-4 mb-10 font-extralight text-sm text-center'>
              Inovando no sector da segurança privada em Moçambique
            </p>
            <div className='w-fit mx-auto text-sm'>
              <Link
                href='/services'
                className='border-2 hover:bg-amber-400/30  font-medium border-amber-400 text-amber-400 rounded-3xl py-4 px-6'
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </section>
        <section className='bg-black p-1 pt-8'>
          <Slide direction='up' delay={200} duration={1000}>
            <h1 className='text-amber-400 text-center font-bold text-3xl'>Nossos Serviços</h1>
            <hr className='bg-amber-400 h-2 rounded-3xl w-[50px] mx-auto mt-2 mb-8 border-none' />
          </Slide>
          <div className='flex'>
            <Slide>
              <div
                className='h-[500px] bg-cover'
                style={{
                  backgroundImage: `url('k-unit.jpg')`
                }}
              >
                <div className='w-full h-full bg-gradient-to-tr from-black to-transparent pt-32 px-10'>
                  <h1 className='text-white font-semibold text-lg'>K9-UNIT</h1>
                  <p className='text-white font-light mt-5 mb-10 text-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus nam veniam nulla sunt, laborum velit odit atque nemo
                    alias consequuntur optio maxime quas, labore in quis animi eius eum architecto!
                  </p>
                  <Link
                    href='/services'
                    className='border-2 hover:bg-amber-400/30  font-medium border-amber-400 text-amber-400 rounded-3xl py-4 px-6'
                  >
                    Ver mais
                  </Link>
                </div>

              </div>
            </Slide>
            <Slide delay={300}>
              <div
                className='h-[500px] bg-cover'
                style={{
                  backgroundImage: `url('maritime.jpg')`
                }}
              >
                <div className='w-full h-full bg-gradient-to-tr from-black to-transparent pt-32 px-10'>
                  <h1 className='text-white font-semibold text-lg'>SEGURANÇA MARÍTIMA</h1>
                  <p className='text-white font-light mt-5 mb-10 text-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus nam veniam nulla sunt, laborum velit odit atque nemo
                    alias consequuntur optio maxime quas, labore in quis animi eius eum architecto!
                  </p>
                  <Link
                    href='/services'
                    className='border-2 hover:bg-amber-400/30  font-medium border-amber-400 text-amber-400 rounded-3xl py-4 px-6'
                  >
                    Ver mais
                  </Link>
                </div>

              </div>
            </Slide>
            <Slide delay={600}>
              <div
                className='h-[500px] bg-cover'
                style={{
                  backgroundImage: `url('k-unit.jpg')`
                }}
              >
                <div className='w-full h-full bg-gradient-to-tr from-black to-transparent pt-32 px-10'>
                  <h1 className='text-white font-semibold text-lg'>PROJECTOS DE SEGURANÇA</h1>
                  <p className='text-white font-light mt-5 mb-10 text-sm'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus nam veniam nulla sunt, laborum velit odit atque nemo
                    alias consequuntur optio maxime quas, labore in quis animi eius eum architecto!
                  </p>
                  <Link
                    href='/services'
                    className='border-2 hover:bg-amber-400/30  font-medium border-amber-400 text-amber-400 rounded-3xl py-4 px-6'
                  >
                    Ver mais
                  </Link>
                </div>

              </div>
            </Slide>
          </div>
        </section>
        <section className='bg-slate-800 h-[calc(100vh-300px)] p-1'>
          <Fade cascade delay={200} duration={1000}>
            <h1 className='mt-36 font-medium text-4xl text-center text-white'>Acreditamos na Segurança Para Todos</h1>
            <div className='w-fit mx-auto mt-10'>
              <Link
                href='/services'
                className='border-2 hover:bg-amber-400/30  font-medium border-amber-400 text-amber-400 rounded-3xl py-4 px-6'
              >
                Nosso Portfólio
              </Link>
            </div>
          </Fade>
        </section>
        <section className='h-screen flex'>
          <div className='w-1/2 overflow-hidden'>
            <Image
              src={'/about.jpg'}
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}

              alt='Image'
            />
          </div>
          <div className='w-1/2 pl-10 pt-20'>
            <h1 className='text-amber-400 font-bold text-3xl'>Sobre a Safeguard</h1>
            <hr className='bg-amber-400 h-2 rounded-3xl w-[50px] mt-2 mb-8 border-none' />
            <p className='mb-10'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sed ipsa quasi in assumenda exercitationem, repellat, natus,
              dolores vel ipsum rerum est. Doloremque dignissimos odio unde
              harum voluptatem dolorem aut numquam!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sed ipsa quasi in assumenda exercitationem, repellat, natus,
              dolores vel ipsum rerum est. Doloremque dignissimos odio unde
              harum voluptatem dolorem aut numquam!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sed ipsa quasi in assumenda exercitationem, repellat, natus,
              dolores vel ipsum rerum est. Doloremque dignissimos odio unde
              harum voluptatem dolorem aut numquam!
            </p>
            <Link
              href='/services'
              className='border-2 hover:bg-amber-400/30  font-medium border-amber-400 text-amber-400 rounded-3xl py-4 px-6'
            >
              Saber mais
            </Link>
          </div>
        </section>
        <section className='bg-gradient-to-br from-black to-slate-800 h-[calc(100vh-200px)] p-1 pt-10'>
          <Slide direction='up' delay={200} duration={1000}>
            <h1 className='text-amber-400 text-center font-bold text-3xl'>Testemunhos</h1>
            <hr className='bg-amber-400 h-2 rounded-3xl w-[50px] mx-auto mt-2 mb-8 border-none' />
            <div className="bg-primary w-full overflow-hidden">
              <div className={`container mx-auto`}>
                <div className={`xl:max-w-[1280px] w-full`}>
                  <Testimonials />
                </div>
              </div>
            </div>
          </Slide>
        </section>
      </main>
      <Footer />
    </>
  )
}
