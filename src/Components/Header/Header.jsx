const Header = () => {
  return (
    <>
      {/* Header Container */}
      <div className='bg-blue-500 px-[18rem] py-[7.5rem]'>
        <div className='bg-white w-[75rem] h-[13rem] rounded-xl '>
          {/* Root Seclections */}
          <div className='flex justify-between pt-[3.5rem] pb-[3rem] px-[2rem]'>
            <div className='flex gap-5'>
              <div className='flex '>
                <input type='radio' name='trip' className='mr-2' />
                <div>One Way</div>
              </div>

              <div className='flex'>
                <input type='radio' name='trip' className='mr-2' />
                <div>Round Trip</div>
              </div>
              <div className='flex'>
                <input type='radio' name='trip' className='mr-2' />
                <div>Multi City</div>
              </div>
            </div>
            <div className=''>Book International and Domestic Flights</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
