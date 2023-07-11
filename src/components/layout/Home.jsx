import React from 'react';

function Home() {
  return (
    <div className='font-pop'>
      <header className='flex justify-between items-center max-w-[1200px] mx-auto pt-5 px-5'>
        <a href='#!' className='relative max-w-[100px]'>
          <img src='img/Logo.png' alt='' />
          <div className='absolute -top-2 -right-2 max-w-[40px]'>
            <img src='img/graduation-hat-svgrepo-com.png' alt='' />
          </div>
        </a>

        <nav className='flex gap-10 items-center'>
          <a href='#!' className='font-semibold text-[#00966B]'>
            Home
          </a>
          <a href='#!' className='text-gray-800'>
            Courses
          </a>
          <a href='#!' className='text-gray-800'>
            Benefits
          </a>
          <a href='#!' className='text-gray-800'>
            Instructors
          </a>
          <a
            href='#!'
            className='font-semibold text-white bg-[#00966B] rounded-[8px] py-[15px] px-[30px]'
          >
            Sign Up
          </a>
        </nav>
      </header>

      <section className='max-w-[1200px] mx-auto flex items-center justify-between gap-5 pt-20 px-5'>
        <div>
          <h1 className='font-sen text-6xl font-bold text-[#222C37] leading-[1.2] mb-5'>
            Education is the greatest gift
          </h1>

          <p className='text-gray-400 max-w-[450px] leading-[1.7] mb-10'>
            Build new skills for that "this is my year" feeling with courses,
            certificates, and degrees from world-class universities and
            companies
          </p>

          <div className='flex gap-5 mb-14'>
            <a
              href='#!'
              className='text-white bg-[#00966B] py-4 px-10 rounded-[8px] hover:bg-white hover:text-[#00966B] border hover:border-[#00966B] transition-all'
            >
              See Courses
            </a>
            <a
              href='#!'
              className='text-[#00966B] border border-[#00966B] py-4 px-10 rounded-[8px] hover:bg-[#00966B] hover:text-white transition-all'
            >
              Learn More
            </a>
          </div>

          <div className='flex gap-14 mb-16'>
            <div>
              <p className='text-center text-[#004C3F] text-2xl font-bold'>
                30K+
              </p>
              <p className='text-center text-sm'>Happy Students</p>
            </div>
            <div>
              <p className='text-center text-[#004C3F] text-2xl font-bold'>
                9K+
              </p>
              <p className='text-center text-sm'>Active Users</p>
            </div>
            <div>
              <p className='text-center text-[#004C3F] text-2xl font-bold'>
                3K+
              </p>
              <p className='text-center text-sm'>Online Classes</p>
            </div>
          </div>

          <div className='flex gap-14 items-center'>
            <div className='max-w-[160px]'>
              <img src='img/SchoolableLogo.png' alt='' />
            </div>
            <div className='max-w-[100px]'>
              <img src='img/gidimoLogo.png' alt='' />
            </div>
            <div className='max-w-[160px]'>
              <img src='img/DearDesignerLogo.png' alt='' />
            </div>
          </div>
        </div>
        <div className='max-w-[500px] relative'>
          <img src='img/HeroImage.png' alt='' />
          <div className='absolute top-14 right-[-6.3rem] -z-10 max-w-[500px]'>
            <img src='img/Rectangle 4589.png' alt='' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
