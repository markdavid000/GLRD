import React from 'react';

function Home() {
  return (
    <div className='font-pop'>
      <header className='flex justify-between items-center max-w-[1300px] mx-auto pt-5 px-5'>
        <a href='#!' className='relative max-w-[100px]'>
          <img src='img/Logo.png' alt='' />
          <div className='absolute -top-2 -right-2 max-w-[40px]'>
            <img src='img/graduation-hat-svgrepo-com.png' alt='' />
          </div>
        </a>

        <nav className='hidden md:flex gap-10 items-center'>
          <a href='#!' className='font-[500] text-[#00966B] text-[16px]'>
            Home
          </a>
          <a href='#!' className='text-gray-800 font-[400] text-[16px]'>
            Courses
          </a>
          <a href='#!' className='text-gray-800 font-[400] text-[16px]'>
            Benefits
          </a>
          <a href='#!' className='text-gray-800 font-[400] text-[16px]'>
            Instructors
          </a>
          <a
            href='#!'
            className='font-[500]  text-[16px] text-white bg-[#00966B] rounded-[8px] py-[15px] px-[30px] border transition-all hover:bg-inherit hover:border-[#00966B] hover:text-[#00966B]'
          >
            Sign Up
          </a>
        </nav>

        <button className='md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='34'
            height='34'
          >
            <path
              d='M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z'
              fill='rgba(0,111,79,1)'
            ></path>
          </svg>
        </button>
      </header>

      <section className='max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 py-20 px-5'>
        <div className='text-center lg:text-left'>
          <h1 className='font-sen text-[50px] lg:text-[62px] font-bold text-[#212B36] leading-[1.2] mb-5'>
            Education is the greatest gift
          </h1>

          <p className='text-gray-400 font-[400] text-[18px] max-w-[600px] lg:max-w-[500px] mx-auto lg:mx-0 leading-[30px] mb-10'>
            Build new skills for that "this is my year" feeling with courses,
            certificates, and degrees from world-class universities and
            companies
          </p>

          <div className='flex flex-col xl:flex-row gap-5 mb-10 lg:mb-20'>
            <a
              href='#!'
              className='text-white bg-[#00966B] py-4 text-center px-10 font-semibold text-[18px] rounded-[8px] hover:bg-white hover:text-[#00966B] border hover:border-[#00966B] transition-all'
            >
              See Courses
            </a>
            <a
              href='#!'
              className='text-[#00966B] border border-[#00966B] py-4 text-center px-10 font-semibold text-[18px] rounded-[8px] hover:bg-[#00966B] hover:text-white transition-all'
            >
              Learn More
            </a>
          </div>

          <div className='flex gap-14 mb-12 lg:mb-24 justify-center lg:justify-start'>
            <div>
              <p className='text-center text-[#0D4132] text-[30px] font-semibold'>
                30K+
              </p>
              <p className='text-center text-[16px] font-[400]'>
                Happy Students
              </p>
            </div>
            <div>
              <p className='text-center text-[#0D4132] text-[30px] font-semibold'>
                9K+
              </p>
              <p className='text-center text-[16px] font-[400]'>Active Users</p>
            </div>
            <div>
              <p className='text-center text-[#0D4132] text-[30px] font-semibold'>
                3K+
              </p>
              <p className='text-center text-[16px] font-[400]'>
                Online Classes
              </p>
            </div>
          </div>

          <div className='hidden lg:flex gap-14 items-center justify-center lg:justify-start'>
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
        <div className='max-w-[600px] relative'>
          <img src='img/HeroImage.png' alt='' />
          <div className='absolute top-14 right-[-6.3rem] -z-10 max-w-[600px]'>
            <img src='img/Rectangle 4589.png' alt='' />
          </div>
        </div>
      </section>

      <section className='bg-[#FDFFFE] py-20 px-5'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='flex flex-col lg:flex-row items-center lg:items-baseline justify-between mb-16'>
            <div className='max-w-[500px] text-center lg:text-left'>
              <h2 className='text-[#212B36] font-bold text-[42px] font-sen leading-[52px]'>
                Explore most popular design courses
              </h2>
            </div>

            <div className='hidden w-1/2 lg:flex items-center py-2 px-6 justify-between border border-[#00966B] rounded-[10px]'>
              <a href='#!' className='text-[#212B36] font-[400] text-[16px]'>
                Science
              </a>
              <a
                href='#!'
                className='bg-[#00966B] text-white py-[14px] px-[24px] rounded-[8px] border transition-all hover:bg-inherit hover:border-[#00966B] hover:text-[#00966B]'
              >
                Art & Design
              </a>
              <a href='#!' className='text-[#212B36] font-[400] text-[16px]'>
                Software
              </a>
              <a href='#!' className='text-[#212B36] font-[400] text-[16px]'>
                Web3
              </a>
              <a href='#!' className='text-[#00966B]'>
                View all
              </a>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2.5rem]'>
            <div className='bg-white rounded-t-[10px] shadow-md hover:shadow-xl transition-all rounded-b-[5px]'>
              <div>
                <img src='img/Rectangle52.png' alt='' className='w-full' />
              </div>

              <div className='px-5 pt-4 pb-5'>
                <h1 className='font-semibold mb-2 text-[16px] text-[#212B36]'>
                  Basic Web Design
                </h1>
                <p className='text-[#615D57] font-[400] text-[14px] mb-3'>
                  Buy our web design course and get started to move forward.
                </p>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='flex gap-1'>
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold text-[14px] text-[#1C1102]'>
                      5
                    </p>
                    <p className='font-[400] text-[14px] text-[#615D57]'>
                      (740)
                    </p>
                  </div>
                </div>
                <a href='#!' className='inline-flex items-center gap-1'>
                  <p className='font-semibold text-[16px] text-[#212B36]'>
                    Enroll
                  </p>
                  <img src='img/Vector21.png' alt='' />
                </a>
              </div>
            </div>
            <div className='bg-white rounded-t-[10px] shadow-md hover:shadow-xl transition-all rounded-b-[5px]'>
              <div>
                <img src='img/Rectangle53.png' alt='' className='w-full' />
              </div>

              <div className='px-5 pt-4 pb-5'>
                <h1 className='font-semibold mb-2 text-[16px] text-[#212B36]'>
                  UI/UX Design
                </h1>
                <p className='text-[#615D57] font-[400] text-[14px] mb-3'>
                  Buy our ui/ux design course and get started to move forward.
                </p>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='flex gap-1'>
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/UncheckedStar.png' alt='' />
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold text-[14px] text-[#1C1102]'>
                      4
                    </p>
                    <p className='font-[400] text-[14px] text-[#615D57]'>
                      (487)
                    </p>
                  </div>
                </div>
                <a href='#!' className='inline-flex items-center gap-1'>
                  <p className='font-semibold text-[16px] text-[#212B36]'>
                    Enroll
                  </p>
                  <img src='img/Vector21.png' alt='' />
                </a>
              </div>
            </div>
            <div className='bg-white rounded-t-[10px] shadow-md hover:shadow-xl transition-all rounded-b-[5px]'>
              <div>
                <img src='img/Rectangle54.png' alt='' className='w-full' />
              </div>

              <div className='px-5 pt-4 pb-5'>
                <h1 className='font-semibold mb-2 text-[16px] text-[#212B36]'>
                  Web Development
                </h1>
                <p className='text-[#615D57] font-[400] text-[14px] mb-3'>
                  Buy our web development course and get started to move
                  forward.
                </p>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='flex gap-1'>
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/UncheckedStar.png' alt='' />
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold text-[14px] text-[#1C1102]'>
                      4
                    </p>
                    <p className='font-[400] text-[14px] text-[#615D57]'>
                      (320)
                    </p>
                  </div>
                </div>
                <a href='#!' className='inline-flex items-center gap-1'>
                  <p className='font-semibold text-[16px] text-[#212B36]'>
                    Enroll
                  </p>
                  <img src='img/Vector21.png' alt='' />
                </a>
              </div>
            </div>
            <div className='bg-white rounded-t-[10px] shadow-md hover:shadow-xl transition-all rounded-b-[5px]'>
              <div>
                <img src='img/Rectangle55.png' alt='' className='w-full' />
              </div>

              <div className='px-5 pt-4 pb-5'>
                <h1 className='font-semibold mb-2 text-[16px] text-[#212B36]'>
                  Digital Marketing
                </h1>
                <p className='text-[#615D57] font-[400] text-[14px] mb-3'>
                  Buy our digital marketing course and get started to move
                  forward.
                </p>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='flex gap-1'>
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/CheckedStar.png' alt='' />
                    <img src='img/UncheckedStar.png' alt='' />
                    <img src='img/UncheckedStar.png' alt='' />
                  </div>
                  <div className='flex gap-1'>
                    <p className='font-semibold text-[14px] text-[#1C1102]'>
                      3
                    </p>
                    <p className='font-[400] text-[14px] text-[#615D57]'>
                      (220)
                    </p>
                  </div>
                </div>
                <a href='#!' className='inline-flex items-center gap-1'>
                  <p className='font-semibold text-[16px] text-[#212B36]'>
                    Enroll
                  </p>
                  <img src='img/Vector21.png' alt='' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#FDFFFE] py-20 px-5'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='max-w-[420px] mx-auto text-center mb-16'>
            <h1 className='font-sen font-bold text-[42px] text-[#212B36] mb-2'>
              Benefit you will get
            </h1>
            <p className='font-[400] text-[16px] text-[#615D57] leading-[28px]'>
              Build new skills with cutting-edge courses and excel in your next
              job.
            </p>
          </div>

          <div className='flex gap-10 lg:gap-[10rem] items-center flex-col lg:flex-row'>
            <div className='max-w-[500px]'>
              <img
                src='img/smiley-teenage-girl-using-laptop-online-school.png'
                alt=''
              />
            </div>

            <div className='w-full lg:w-1/2'>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-10'>
                <div className='bg-white p-5 shadow-md transition-all hover:shadow-lg'>
                  <div className='mb-5'>
                    <img src='img/Frame32.png' alt='' />
                  </div>
                  <h1 className='font-semibold text-[16px] text-[#212B36] mb-1'>
                    Online Courses
                  </h1>
                  <p className='font-[400] text-[14px] text-[#615D57] leading-[26px]'>
                    We take all the class through zoom, skype etc.
                  </p>
                </div>

                <div className='bg-white p-5 shadow-md transition-all hover:shadow-lg'>
                  <div className='mb-5'>
                    <img src='img/Frame33.png' alt='' />
                  </div>
                  <h1 className='font-semibold text-[16px] text-[#212B36] mb-1'>
                    Expert Tutors
                  </h1>
                  <p className='font-[400] text-[14px] text-[#615D57] leading-[26px]'>
                    We have world class experts and experienced tutors.
                  </p>
                </div>

                <div className='bg-white p-5 shadow-md transition-all hover:shadow-lg'>
                  <div className='mb-5'>
                    <img src='img/Frame34.png' alt='' />
                  </div>
                  <h1 className='font-semibold text-[16px] text-[#212B36] mb-1'>
                    Good Methods
                  </h1>
                  <p className='font-[400] text-[14px] text-[#615D57] leading-[26px]'>
                    We follow the best strategy for the online lessons.
                  </p>
                </div>

                <div className='bg-white p-5 shadow-md transition-all hover:shadow-lg'>
                  <div className='mb-5'>
                    <img src='img/Frame32.png' alt='' />
                  </div>
                  <h1 className='font-semibold text-[16px] text-[#212B36] mb-1'>
                    Best Topics
                  </h1>
                  <p className='font-[400] text-[14px] text-[#615D57] leading-[26px]'>
                    We have selected the best topics for the lessons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#FDFFFE] pt-12 pb-20 px-5'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='flex items-center flex-col lg:flex-row gap-10'>
            <div className='w-full lg:w-1/2'>
              <h1 className='font-sen font-bold max-w-[500px] text-[42px] text-[#212B36] leading-[52px] mb-5'>
                Transform your life through education
              </h1>
              <p className='font-[400] max-w-[500px] text-[16px] text-[#615D57] leading-[28px] mb-5 lg:mb-10'>
                Learners all across the world are starting new careers,
                progressing in their fields, and improving their lives.
              </p>
              <button className='font-semibold bg-[#00966B] text-white text-[16px] rounded-[6px] px-[45px] py-[16px] border transition-all hover:bg-inherit hover:text-[#00966B] hover:border-[#00966B]'>
                Learn More
              </button>
            </div>
            <div className='w-full lg:w-1/2'>
              <img src='img/Rectangle56.png' alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#FDFFFE] py-20 px-5'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='max-w-[600px] lg:max-w-[470px] mx-auto text-center mb-12'>
            <h1 className='font-sen font-bold text-[42px] text-[#212B36] mb-2'>
              Meet Your Instructors
            </h1>
            <p className='font-[400] text-[16px] text-[#615D57] leading-[28px]'>
              We will train, coach and mentor you. We build tailor-made
              interactive experiences and brand identities.
            </p>
          </div>

          <div className='flex justify-between items-center gap-10 lg:gap-0 flex-col lg:flex-row'>
            <div className='relative'>
              <img src='img/Instructor1.png' alt='' />
              <div className='absolute bottom-[23px] left-[40px]'>
                <p className='font-sen font-bold text-[15.69px] text-[#c9c9c9]'>
                  UX INSTRUCTOR
                </p>
                <p className='font-[500] text-[27.46px] text-[#FFF]'>
                  Daniel Joe
                </p>
                <div className='flex gap-2'>
                  <a href='#!'>
                    <img src='img/LinkedIn.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Facebook.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Instagram.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Twitter.png' alt='' />
                  </a>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img src='img/Instructor2.png' alt='' />
              <div className='absolute bottom-[23px] left-[40px]'>
                <p className='font-sen font-bold text-[15.69px] text-[#c9c9c9]'>
                  DATA ANALYST
                </p>
                <p className='font-[500] text-[27.46px] text-[#FFF]'>
                  Joy Smith
                </p>
                <div className='flex gap-2'>
                  <a href='#!'>
                    <img src='img/LinkedIn.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Facebook.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Instagram.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Twitter.png' alt='' />
                  </a>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img
                src='img/Instructor3.jfif'
                alt=''
                className='rounded-[7px]'
              />
              <div className='bg-gradient-to-t from-black/60 absolute inset-0 rounded-[7px]'></div>
              <div className='absolute bottom-[23px] left-[40px]'>
                <p className='font-sen font-bold text-[15.69px] text-[#c9c9c9]'>
                  FRONTEND DEVELOPER
                </p>
                <p className='font-[500] text-[27.46px] text-[#FFF]'>
                  Mark David
                </p>
                <div className='flex gap-2'>
                  <a href='#!'>
                    <img src='img/LinkedIn.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Facebook.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Instagram.png' alt='' />
                  </a>
                  <a href='#!'>
                    <img src='img/Twitter.png' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#FDFFFE] py-20 px-5'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='bg-[#141623] rounded-[22px] py-10 lg:py-0 flex items-center justify-center relative z-10 px-10'>
            <div className='hidden lg:block'>
              <img
                src='img/Graphics.png'
                alt=''
                className='absolute left-0 top-0 w-full h-[28.4rem] -z-10'
              />
            </div>
            <div className='max-w-[650px]'>
              <h1 className='font-inter font-semibold text-[40px] lg:font-bold lg:text-[50px] text-white'>
                Get Our Mobile App Now
              </h1>
              <p className='font-inter font-[400] text-[18px] mb-10 lg:mb-[5rem] text-[#B8BEBD] leading-[28px]'>
                Discover our mobile app and get the best outcome of online
                learning and enjoy your everyday’s lesson
              </p>
              <div className='flex items-center gap-5 flex-wrap'>
                <button className='flex items-center gap-3 px-[40.925px] py-[10.605px] rounded-[8px] bg-[#00966B]'>
                  <img src='img/Play.png' alt='' />
                  <div className='text-left'>
                    <p className='text-white font-[400] text-[10px]'>
                      GET IT ON
                    </p>
                    <p className='text-white'>Google Play</p>
                  </div>
                </button>
                <button className='flex items-center gap-3 px-[40.925px] py-[10.605px] rounded-[8px] bg-white'>
                  <img src='img/Apple.png' alt='' />
                  <div className='text-left'>
                    <p className='text-black font-[400] text-[10px]'>
                      Download On
                    </p>
                    <p className='text-black'>App Store</p>
                  </div>
                </button>
              </div>
            </div>
            <div className='hidden lg:block'>
              <img src='img/AppMockup.png' alt='' />
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#00966B] mt-20 py-10 px-5'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='flex justify-center'>
            <div className='text-center'>
              <div className='max-w-[500px] mx-auto'>
                <h1 className='font-sen font-bold text-white text-[42px] mb-3'>
                  Start Learning Today
                </h1>
                <p className='font-[400] text-white text-[16px] mb-7 leading-[28px]'>
                  For more information about our company or if there any other
                  questions please contact with us
                </p>
              </div>

              <form className='bg-white p-3 flex rounded-[8px]'>
                <input
                  type='email'
                  className='w-full focus:outline-none font-semibold text-[16px] text-[##A8A29A]'
                  placeholder='Your Email Address'
                  required
                />
                <button
                  type='submit'
                  className='bg-[#00966B] text-white text-[16px] rounded-[10px] px-[30px] lg:px-[40px] py-[12px] border transition-all hover:bg-inherit hover:text-[#00966B] hover:border-[#00966B]'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className='bg-[#08281F] py-10 px-5'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='flex flex-wrap justify-between border-b-2 border-[#154235] pb-5 gap-10'>
            <div className='flex flex-col'>
              <a href='#!' className='relative max-w-[100px] mb-5'>
                <img src='img/FooterLogo.png' alt='' />
                <div className='absolute -top-2 -right-2 max-w-[40px]'>
                  <img src='img/graduation-hat-svgrepo-com.png' alt='' />
                </div>
              </a>

              <p className='font-[400] text-[18px] text-[#CEC7BD] leading-[30px] max-w-[300px]'>
                Build new skills for that “this is my year” feeling with
                courses.
              </p>
            </div>

            <div>
              <h1 className='font-semibold text-[16px] text-white leading-[28px] mb-5'>
                About
              </h1>
              <div className='flex flex-col gap-2'>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  About Us
                </a>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  Features
                </a>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  News & Blogs
                </a>
              </div>
            </div>
            <div>
              <h1 className='font-semibold text-[16px] text-white leading-[28px] mb-5'>
                Company
              </h1>
              <div className='flex flex-col gap-2'>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  How We Work?
                </a>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  Capital
                </a>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  Security
                </a>
              </div>
            </div>
            <div>
              <h1 className='font-semibold text-[16px] text-white leading-[28px] mb-5'>
                Support
              </h1>
              <div className='flex flex-col gap-2'>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  FAQs
                </a>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  Support Center
                </a>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div>
              <h1 className='font-semibold text-[16px] text-white leading-[28px] mb-5'>
                Movement
              </h1>
              <div className='flex flex-col gap-2'>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  GLRD?
                </a>
                <a
                  href='#!'
                  className='font-[400] text-[14px] text-[#CEC7BD] leading-[26px]'
                >
                  Support Us
                </a>
              </div>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row sm:flex-row justify-between items-center pt-5'>
            <a
              href='mailto:davidojukwu59@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='text-[#8B867E] text-[14px] font-[400] leading-[26px]'
            >
              © davidojukwu59@gmail.com
            </a>

            <div className='flex gap-5 items-center'>
              <a
                href='#!'
                className='text-[#8B867E] text-[14px] font-[400] leading-[26px]'
              >
                Terms & Agreements
              </a>
              <a
                href='#!'
                className='text-[#8B867E] text-[14px] font-[400] leading-[26px]'
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
