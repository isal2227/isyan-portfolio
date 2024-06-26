import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  testi1,
  testi2,
  testi3,
  source_code_link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[325px] w-full'
  >
    <p className='text-white font-bold text-[24px]'>{testi1}</p>
    <p className='text-white font-bold text-[24px]'>{testi2}</p>
    <p className='text-white font-bold text-[24px]'>{testi3}</p>


    <div className='mt-1'>
      {/* <p className='text-white tracking-wider text-[18px]'>{testi1}</p> */}

      <p className='mt-5 text-white tracking-wider text-[16px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name} 
          </p>
            <p className='mt-1 text-secondary text-[12px]'>
            {designation}  {company}
          </p> 
        </div>

        <img
          src={image}
          alt={`SocialMedia-${name}`}
          onClick={() => window.open(source_code_link, "_blank")}
          className='w-12 h-12 rounded-full object-cover cursor-pointer'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-90 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>CONNECT WITH ME</p>
          <h2 className={styles.sectionHeadText}>Social Media handles.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-4`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");