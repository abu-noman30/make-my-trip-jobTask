import { useState } from 'react';
import { DateRange } from 'react-date-range';

const ScheduleCalender = (props) => {
  const { dropdownToggleCalender } = props;
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection',
    },
  ]);
  // [
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: 'selection',
  //   },
  // ];
  console.log(state[0].startDate);

  return (
    <>
      {/* ScheduleCalender Container */}

      <div className='px-2 relative'>
        {/* <!-- Dropdown menu --> */}
        <div
          id='dropdownUsers'
          className={` absolute -left-[10rem] shadow shadow-gray-500 rounded-lg z-10 ${
            dropdownToggleCalender === false ? 'hidden' : 'block'
          }`}
        >
          <div className=''>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={state}
              months={2}
              direction='horizontal'
            />
          </div>
          {/* Apply Button */}
          {/* <div className='w-full flex items-center justify-end'>
            <button
              className='rounded-full bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 text-sm text-white px-4 py-1'
              // onClick={() => {
              //   handlerTotalPassenger();
              // }}
            >
              Apply
            </button>
          </div> */}
        </div>
      </div>

      <p className='font-extrabold text-3xl px-2'>
        {/* <span className='text-3xl font-bold mr-3'>{totalPassenger}</span> */}
        {/* <span className='text-xl'>Traveller</span> */}
      </p>
      <p className='text-sm px-2'>
        {/* {selectedClass ? selectedClass : 'Economy/Premium Economy'} */}
      </p>
    </>
  );
};

export default ScheduleCalender;
