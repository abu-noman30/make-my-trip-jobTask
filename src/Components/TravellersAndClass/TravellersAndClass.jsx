import { useState } from 'react';

const TravellersAndClass = (props) => {
  const { dropdownToggleTravellers, setDropdownToggleTravellers } = props;

  const [selectedAdultPassenger, setAdultPassenger] = useState(1);
  const [selectedChildPassenger, setChildPassenger] = useState(0);
  const [selectedInfantPassenger, setInfantPassenger] = useState(0);
  const [selectedClass, setClass] = useState('Economy/Premium Economy');

  const [selectedAdultButtonColor, setAdultButtonColor] = useState(false);
  const [selectedChildButtonColor, setChildButtonColor] = useState(false);
  const [selectedInfantButtonColor, setInfantButtonColor] = useState(false);
  const [selectedClassButtonColor, setClassButtonColor] = useState(false);

  const [totalPassenger, setTotalPassenger] = useState(selectedAdultPassenger);

  let adultsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let childsArray = [0, 1, 2, 3, 4, 5, 6];
  let infantsArray = [0, 1, 2, 3, 4, 5, 6];
  let classArray = ['Economy/Premium Economy', 'Premium Economy', 'Business'];

  const handlerTotalPassenger = () => {
    let sum = 0;
    sum =
      sum +
      selectedAdultPassenger +
      selectedChildPassenger +
      selectedInfantPassenger;
    setTotalPassenger(sum);
    setDropdownToggleTravellers(false);
  };

  return (
    <>
      {/* Travellers & Class Container */}
      <div className='px-2 relative'>
        {/* <!-- Dropdown menu --> */}
        <div
          id='dropdownUsers'
          className={` first-letter:w-[45rem] z-10 bg-white rounded-lg shadow border absolute right-5 p-10 ${
            dropdownToggleTravellers === true ? '' : 'hidden'
          }`}
          // hidden={dropdownToggleTravellers === false}
        >
          {/* ADULTS (12y +) */}
          <h3 className='text-xs'>ADULTS (12y +)</h3>
          <h3 className='text-[0.8rem] text-gray-400 font-medium mb-2'>
            on the day of travel
          </h3>
          <div className='flex shadow-sm shadow-gray-300 w-[23.2rem] border'>
            {adultsArray.map((adultValue) => (
              <div key={adultValue} className='p-1 bg-white rounded'>
                <div
                  className={` px-3 ${
                    selectedAdultButtonColor === adultValue ||
                    selectedAdultPassenger === adultValue
                      ? 'bg-blue-600 text-white rounded '
                      : 'hover:bg-gray-200 rounded'
                  }`}
                  onClick={() => {
                    // setTogglePassengerColor(!togglePassengerColor);
                    setAdultPassenger(adultValue);
                    setAdultButtonColor(adultValue);
                  }}
                >
                  {adultValue}
                </div>
              </div>
            ))}
          </div>

          {/* CHILDREN (2y - 12y ) &&  INFANTS (below 2y) */}
          <div className='mt-5 flex items-center justify-between mb-5'>
            {/* CHILDREN (2y - 12y ) */}
            <div>
              <h3 className='text-xs'>CHILDREN (2y - 12y )</h3>
              <h3 className='text-[0.8rem] text-gray-400 font-medium mb-2'>
                on the day of travel
              </h3>
              <div className='flex shadow-sm shadow-gray-300 w-[18rem] border'>
                {childsArray.map((childValue) => (
                  <div key={childValue} className='p-1 bg-white rounded'>
                    <div
                      className={` px-3 ${
                        selectedChildButtonColor === childValue ||
                        selectedChildPassenger === childValue
                          ? 'bg-blue-600 text-white rounded '
                          : 'hover:bg-gray-200 rounded'
                      }`}
                      onClick={() => {
                        // setTogglePassengerColor(!togglePassengerColor);
                        setChildPassenger(childValue);
                        setChildButtonColor(childValue);
                      }}
                    >
                      {childValue}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INFANTS (below 2y) */}
            <div>
              <h3 className='text-xs'>INFANTS (below 2y)</h3>
              <h3 className='text-[0.8rem] text-gray-400 font-medium mb-2'>
                on the day of travel
              </h3>
              <div className='flex shadow-sm shadow-gray-300 w-[18rem] border'>
                {infantsArray.map((infantValue) => (
                  <div key={infantValue} className='p-1 bg-white rounded'>
                    <div
                      className={` px-3 ${
                        selectedInfantButtonColor === infantValue ||
                        selectedInfantPassenger === infantValue
                          ? 'bg-blue-600 text-white rounded '
                          : 'hover:bg-gray-200 rounded'
                      }`}
                      onClick={() => {
                        // setTogglePassengerColor(!togglePassengerColor);
                        setInfantPassenger(infantValue);
                        setInfantButtonColor(infantValue);
                      }}
                    >
                      {infantValue}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Choose Travel Class */}
          <h3 className='text-xs  mb-2'>CHOOSE TRAVEL CLASS</h3>
          <div className='flex shadow-sm shadow-gray-300 w-[25.1rem] border'>
            {classArray.map((className, index) => (
              <div key={index} className='p-1 bg-white rounded'>
                <div
                  className={` px-3 text-xs py-[0.40rem] ${
                    selectedClassButtonColor === className ||
                    selectedClass === className
                      ? 'bg-blue-600 text-white rounded '
                      : 'hover:bg-gray-200 rounded'
                  }`}
                  onClick={() => {
                    // setTogglePassengerColor(!togglePassengerColor);
                    setClass(className);
                    setClassButtonColor(className);
                  }}
                >
                  {className}
                </div>
              </div>
            ))}
          </div>

          {/* Apply Button */}
          <div className='w-full flex items-center justify-end'>
            <button
              className='rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 text-sm text-white px-4 py-1'
              onClick={() => {
                handlerTotalPassenger();
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      <p className='font-extrabold text-3xl px-2'>
        <span className='text-3xl font-bold mr-3'>{totalPassenger}</span>
        <span className='text-xl'>Traveller</span>
      </p>
      <p className='text-sm px-2'>
        {selectedClass ? selectedClass : 'Economy/Premium Economy'}
      </p>
    </>
  );
};

export default TravellersAndClass;
