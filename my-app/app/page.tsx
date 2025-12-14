'use client';

import { useEffect, useState } from 'react';
import LiquidEther from './components/LiquidEther';
import Timer from './components/Timer';
import Divider from './components/Divider';
import AnimatedContent from './components/AnimatedContent';
import FadeContent from './components/FadeContent';

export default function Home() {
  const [windowHeight, setWindowHeight] = useState<number | string>('100vh');
  const eventDate = new Date('2025-12-31T10:00:00');

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans ">


      <div style={{ width: '100%', height: windowHeight || '100vh', position: 'relative', backgroundColor: 'var(--color-surface)' }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.3}
          autoIntensity={3.2}
          takeoverDuration={0.25}
          autoResumeDelay={1000}
          autoRampDuration={0.5}
          dt={0.014}
          BFECC={true}

        />
        <section className="flex flex-col justify-center w-fit absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
          <h1 className="text-5xl font-grotesk font-bold">Idea2Impact <span className="text-secondary animate-blink" id="cursor">|</span></h1>
          <p className="text-2xl font-grotesk">Hackathon 2025</p>
        </section>
        <div className="flex flex-col w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
          <h1 className="text-4xl font-bold text-white mb-4 mt-10 flex justify-center font-grotesk">
            Do wydarzenia zostało:
          </h1>

          <Timer eventDate={eventDate} />
          <button className="mt-8 px-6 py-3 bg-white text-primary font-semibold font-inter rounded-lg hover:bg-gray-300 transition w-fit mx-auto text-2xl">Zapisz się!</button>
        </div>

      </div>
      <main className=" w-full mt-16 mb-8 space-y-8">
        <Divider />
        <h2 className='text-3xl font-semibold text-center'>&lt;-- O wydarzeniu --&gt;</h2>
        <section className=" max-w-7xl p-8 flex  gap-8 flex-col justify-between items-between w-full min-h-[600px] w-full lg:w-3/5 mx-auto" >


          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <div className='max-w-2xl self-start text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo culpa, sunt corrupti voluptatum optio totam non dicta deserunt debitis asperiores sit? Sequi earum doloremque vitae eum obcaecati hic debitis distinctio.
              Iure animi illo veniam quod autem tenetur ut vel eum? Molestiae hic, nemo error similique perferendis veritatis alias ad eaque porro est assumenda expedita eius! Autem vel expedita modi officia.
              Atque, inventore, eaque est animi iusto corporis non tempora veritatis obcaecati <span className='text-secondary'>24h </span>nihil minus culpa ex quam aperiam fugit in sunt voluptas architecto. Impedit ipsam porro asperiores quidem ratione assumenda reiciendis.
              Excepturi alias et nostrum quibusdam laborum, optio nam eveniet harum numquam tempore veritatis mollitia dolorum vel quisquam eius debitis commodi a facere atque asperiores nobis. Enim fugit animi sed quas.
            </div>
          </AnimatedContent>
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
            className="self-end"
          >
            <div className='max-w-2xl text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem porro officia exercitationem delectus nemo ab illo, assumenda iste molestiae blanditiis minima pariatur veritatis dolorum voluptates odit corrupti quos voluptatum.
              Iste reiciendis saepe quasi corporis atque sapiente quia vitae soluta a natus asperiores maxime modi mollitia recusandae ratione explicabo laborum vel facilis molestiae sequi porro minus, at fugit. Excepturi, ea.
              Dicta recusandae officiis officia distinctio vero tempora praesentium mollitia, perferendis assumenda, <span className='text-secondary'>voluptate </span> rem rerum a nihil, nulla accusantium. Consequatur itaque incidunt eveniet atque fugit, facere reiciendis deleniti quam alias libero?
            </div>
          </AnimatedContent >
          <div className='flex justify-center text-white mt-4 text-center'>
            <div className='border-r-4 border-secondary inline p-2 text-2xl font-semibold'>
              12 zespołów
            </div>
            <div className='inline p-2 text-2xl font-semibold'>
              24h programowania
            </div>

          </div>
        </section>
        <Divider />
        <h2 className='text-3xl font-semibold  text-center'>&lt;-- Lokalizacja wydarzenia --&gt;</h2>
        <FadeContent blur={true} duration={1000} initialOpacity={0}>
        <section className="w-full lg:w-3/5 mx-auto p-8 border-surface border-2 rounded-lg shadow-lg">
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1022.348695312378!2d18.572401673396413!3d54.396282890011996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd752655cecc63%3A0x5dc2caea70bb6d84!2sInstytut%20Informatyki%20UG!5e0!3m2!1spl!2spl!4v1765209333072!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold mb-2">Uniwersytet Gdański, Wydział Matematyki, Fizyki i Informatyki</p>
            <p className="text-gray-600">Wita Stwosza 57, 80-952 Gdańsk</p>
          </div>

        </section>
</FadeContent>
        <Divider />
        <h2 className='text-3xl font-semibold  text-center'>&lt;-- Organizatorzy --&gt;</h2>
        <section className="w-full lg:w-3/5 mx-auto">

        </section>
      </main>
    </div>
  );
}
