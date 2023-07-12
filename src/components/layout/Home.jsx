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

        <nav className='flex gap-10 items-center'>
          <a href='#!' className='font-semibold text-[#00966B] text-[16px]'>
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
            className='font-semibold  text-[16px] text-white bg-[#00966B] rounded-[8px] py-[15px] px-[30px]'
          >
            Sign Up
          </a>
        </nav>
      </header>

      <section className='max-w-[1300px] mx-auto flex items-center justify-between gap-5 py-20 px-5'>
        <div>
          <h1 className='font-sen text-[62px] font-bold text-[#212B36] leading-[1.2] mb-5'>
            Education is the greatest gift
          </h1>

          <p className='text-gray-400 font-[400] text-[18px] max-w-[500px] leading-[30px] mb-10'>
            Build new skills for that "this is my year" feeling with courses,
            certificates, and degrees from world-class universities and
            companies
          </p>

          <div className='flex gap-5 mb-20'>
            <a
              href='#!'
              className='text-white bg-[#00966B] py-4 px-10 font-semibold text-[18px] rounded-[8px] hover:bg-white hover:text-[#00966B] border hover:border-[#00966B] transition-all'
            >
              See Courses
            </a>
            <a
              href='#!'
              className='text-[#00966B] border border-[#00966B] py-4 px-10 font-semibold text-[18px] rounded-[8px] hover:bg-[#00966B] hover:text-white transition-all'
            >
              Learn More
            </a>
          </div>

          <div className='flex gap-14 mb-24'>
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
        <div className='max-w-[600px] relative'>
          <img src='img/HeroImage.png' alt='' />
          <div className='absolute top-14 right-[-6.3rem] -z-10 max-w-[600px]'>
            <img src='img/Rectangle 4589.png' alt='' />
          </div>
        </div>
      </section>

      <section className='bg-[#f8f9fa] py-20 px-5'>
        <div className='max-w-[1300px] mx-auto'>
          <div className='flex items-baseline justify-between mb-16'>
            <div className='max-w-[500px]'>
              <h2 className='text-[#212B36] font-bold text-[42px] font-sen'>
                Explore most popular design courses
              </h2>
            </div>

            <div className='w-1/2 flex items-center py-2 px-6 justify-between border border-[#00966B] rounded-[10px]'>
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
          <div className='grid grid-cols-4 gap-[2.5rem]'>
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
          <div className='flex items-center justify-end gap-4 mt-5'>
            <a href='#!'>
              <img src='img/IconInactive.png' alt='' />
            </a>
            <a href='#!'>
              <img src='img/IconActive.png' alt='' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
