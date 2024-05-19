import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#002933]" />
          <div className="w-1 sm:h-80 h-40 greenretro-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#002933]`}>Hi, I'm <span className="text-[#ce5c49]">Isyan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#002933]`}>
            I Develop 3D Visuals, Social Media <br className='sm:block hidden' />
            Strategist and Video Editor
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#ce5c49] flex justify-center items-start p-2">
              <motion.dev 
                animate={{
                  y : [0, 26, 0]
                }}
                transition={{
                  duration : 1.8,
                  repeat : Infinity,
                  repeatType : 'loop'
                }}
                className="w-3 h-3 rounded-full bg-[#ce5c49] mb-1"
              />
            </div>
        </a>
      </div>
    </section>
  )
}

export default Hero