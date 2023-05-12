import { addDays } from 'date-fns';
import moment from 'moment';
import { DateRange } from 'react-date-range';

const Departure = (props) => {
  const { toggleDepartureCalender, state, setState } = props;

  return (
    <>
      {/* Departure Calender Container */}

      <div className='px-2 relative'>
        {/* <!-- Dropdown menu --> */}
        <div
          id='dropdownUsers'
          className={` absolute -left-[10rem] shadow shadow-gray-500 rounded-lg z-10 ${
            toggleDepartureCalender === false ? 'hidden' : 'block'
          }`}
        >
          <div className=''>
            <DateRange
              onChange={(item) => {
                setState([item.selection]);
              }}
              moveRangeOnFirstSelection={false}
              preventSnapRefocus={false}
              showSelectionPreview={true}
              ranges={state}
              months={2}
              minDate={addDays(new Date(), 0)}
              direction='horizontal'
            />
          </div>
        </div>
      </div>

      <p className='font-extrabold text-3xl px-2'>
        <span className='text-3xl font-bold mr-3'>
          {state[0].startDate
            ? `${moment(state[0].startDate).format('DD')}`
            : moment(new Date()).format('DD')}
        </span>
        <span className='text-xl'>
          {state[0].startDate
            ? `${moment(state[0].startDate).format('MMM')}'${moment(
                state[0].startDate
              ).format('YY')}`
            : moment(new Date()).format('dddd')}
        </span>
      </p>
      <p className='text-sm px-2'>
        {state[0].startDate
          ? moment(state[0].startDate).format('dddd')
          : moment(new Date()).format('dddd')}
      </p>
    </>
  );
};

export default Departure;
