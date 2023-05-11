const FareType = () => {
  return (
    <>
      {/* FareType Container */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-1 rounded'>
          <div className=''>
            <span className='block text-xs'>Select A</span>
            <span className='block text-xs'> Fare Type:</span>
          </div>
          <div className='flex items-center justify-start py-2 px-2 bg-gray-100 rounded '>
            <input
              defaultChecked
              id='default-radio-6'
              type='radio'
              name='fare'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
            />
            <label htmlFor='default-radio-6' className='text-sm text-gray-900'>
              <span className='block text-xs'> Regular</span>
              <span className='block text-xs'> Fares</span>
            </label>
          </div>
          <div className='flex items-center justify-start py-2 px-2  bg-gray-100 rounded '>
            <input
              id='default-radio-7'
              type='radio'
              name='fare'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
            />
            <label htmlFor='default-radio-7' className='text-sm text-gray-900'>
              <span className='block text-xs'> Armed Forces</span>
              <span className='block text-xs'> Fares</span>
            </label>
          </div>
          <div className='flex items-center justify-start py-2 px-2 bg-gray-100 rounded'>
            <input
              id='default-radio-8'
              type='radio'
              name='fare'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
            />
            <label htmlFor='default-radio-8' className='text-sm text-gray-900'>
              <span className='block text-xs'> Student</span>
              <span className='block text-xs'> Fares</span>
            </label>
          </div>
          <div className='flex items-center justify-start py-2 px-2  bg-gray-100 rounded'>
            <input
              id='default-radio-4'
              type='radio'
              name='fare'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
            />
            <label htmlFor='default-radio-4' className='text-sm text-gray-900'>
              <span className='block text-xs'> Senior Citizen </span>
              <span className='block text-xs'> Fares</span>
            </label>
          </div>
          <div className='flex items-center justify-start py-2 px-2 bg-gray-100 rounded'>
            <input
              id='default-radio-5'
              type='radio'
              name='fare'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
            />
            <label htmlFor='default-radio-5' className='text-sm text-gray-900'>
              <span className='block text-xs'> Doctors & Nurses</span>
              <span className='block text-xs'> Fares</span>
            </label>
          </div>
        </div>
        <div className='flex items-center text-xs gap-1'>
          <div className=''>
            <span>Trending Searches:</span>
          </div>
          <div className='flex items-center justify-start py-2 px-2 bg-gray-100 rounded'>
            <label htmlFor='default-radio-5' className='text-xs text-gray-900'>
              Dhaka to Bogura
            </label>
          </div>
          <div className='flex items-center justify-start py-2 px-2 bg-gray-100 rounded'>
            <label htmlFor='default-radio-5' className='text-xs text-gray-900'>
              Dhaka to Chattogram
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default FareType;
