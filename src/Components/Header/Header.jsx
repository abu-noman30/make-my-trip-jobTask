import { useState } from 'react';
import FareType from '../FareType/FareType';
import FormLocationList from '../LocationList/FormLocationList';
import ToLocationList from '../LocationList/ToLocationList';
import Departure from '../ScheduleCalender/Departure/Departure';
import Return from '../ScheduleCalender/Return/Return';
import TravellersAndClass from '../TravellersAndClass/TravellersAndClass';

const Header = () => {
  const [dropdownToggleFrom, setDropdownToggleForm] = useState(true);
  const [dropdownToggleTo, setDropdownToggleTo] = useState(true);
  const [dropdownToggleTravellers, setDropdownToggleTravellers] =
    useState(false);
  const [toggleDepartureCalender, setoggleDepartureCalender] = useState(false);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);

  return (
    <>
      {/* Header Container */}
      <div className='bg-gradient-to-b h-screen from-[#061424] to-[#133F72] flex items-center justify-center pt-[7.5rem] pb-[15rem]'>
        <div className='flex flex-col items-center justify-center'>
          <div className='bg-white w-[75rem] rounded-xl pb-[3rem] px-[2rem]'>
            {/* Root Seclections */}
            <div className='flex justify-between pt-[3.5rem] '>
              <div className='flex gap-5'>
                <div className='flex'>
                  <input
                    defaultChecked
                    id='default-radio-1'
                    type='radio'
                    name='trip'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
                  />
                  <label
                    htmlFor='default-radio-1'
                    className='text-sm text-gray-900'
                  >
                    One Way
                  </label>
                </div>

                <div className='flex'>
                  <input
                    id='default-radio-2'
                    type='radio'
                    name='trip'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
                  />
                  <label
                    htmlFor='default-radio-2'
                    className='text-sm text-gray-900'
                  >
                    Round Trip
                  </label>
                </div>
                <div className='flex'>
                  <input
                    id='default-radio-3'
                    type='radio'
                    name='trip'
                    className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 mr-2'
                  />
                  <label
                    htmlFor='default-radio-3'
                    className='text-sm text-gray-900'
                  >
                    Multi City
                  </label>
                </div>
              </div>
              <div className=''>Book International and Domestic Flights</div>
            </div>

            {/* location of from and to  including date and passenger starts  */}
            <div className='border rounded-lg my-2 flex'>
              {/* Location From Container */}
              <div
                className='cursor-pointer border-r w-[17rem] h-[6.5rem] hover:bg-gray-100'
                onClick={() => setDropdownToggleForm(!dropdownToggleFrom)}
              >
                <h2 className='p-2 text-sm'>
                  Form <span className='font-extrabold'>&#8964;</span>
                </h2>
                <FormLocationList dropdownToggleFrom={dropdownToggleFrom} />
              </div>

              {/* Location To Container */}
              <div
                className='cursor-pointer border-r w-[17rem] h-[6.5rem]  hover:bg-gray-100'
                onClick={() => setDropdownToggleTo(!dropdownToggleTo)}
              >
                <h2 className='p-2 text-sm'>
                  To <span className='font-extrabold'>&#8964;</span>
                </h2>
                <ToLocationList dropdownToggleTo={dropdownToggleTo} />
              </div>

              {/* departure date Container */}
              <div className='border-r w-[10rem] h-[6.5rem]  hover:bg-gray-100 '>
                <div
                  className=''
                  onClick={() =>
                    setoggleDepartureCalender(!toggleDepartureCalender)
                  }
                >
                  <h2 className='p-2 text-sm'>
                    Departure <span className='font-extrabold'>&#8964;</span>
                  </h2>
                </div>

                <Departure
                  toggleDepartureCalender={toggleDepartureCalender}
                  setoggleDepartureCalender={setoggleDepartureCalender}
                  state={state}
                  setState={setState}
                />
              </div>

              {/* return date Container */}
              <div className='border-r w-[10rem] h-[6.5rem]  hover:bg-gray-100 '>
                <div
                  className=''
                  onClick={() => {
                    setoggleDepartureCalender(!toggleDepartureCalender);
                  }}
                >
                  <h2 className='p-2 text-sm'>
                    Return <span className='font-extrabold'>&#8964;</span>
                  </h2>
                </div>

                <Return state={state} />
              </div>

              {/* number of travellers start */}
              <div className='hover:bg-gray-100 flex-auto'>
                <div className=''>
                  <div
                    className='cursor-pointer'
                    onClick={() =>
                      setDropdownToggleTravellers(!dropdownToggleTravellers)
                    }
                  >
                    <h2 className='p-2 text-sm'>
                      Travellers & Class{' '}
                      <span className='font-extrabold'>&#8964;</span>
                    </h2>
                  </div>
                  <div className=''>
                    <TravellersAndClass
                      dropdownToggleTravellers={dropdownToggleTravellers}
                      setDropdownToggleTravellers={setDropdownToggleTravellers}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Fare Type Section */}
            <div className=''>
              <FareType />
            </div>
          </div>
          {/* Search Button Container */}

          <div className='-mt-[1.4rem]'>
            <button
              type='button'
              className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full text-2xl px-[3.5rem] py-[0.3rem] text-center mr-2 mb-2 '
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
