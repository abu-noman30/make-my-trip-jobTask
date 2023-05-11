import { useEffect, useState } from 'react';

const ToLocationList = (props) => {
  const { dropdownToggleTo } = props;
  const [fromLocation, setFormLocation] = useState('');
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch('/Data/Locations.json');
      const data = await res.json();
      setDropdownItems(data);
    };
    fetchApi();
  });
  return (
    <>
      {/* Location Dropdown Container */}

      <div className='px-2 relative'>
        {/* <!-- Dropdown menu --> */}
        <div
          id='dropdownUsers'
          className='h-48 z-10 bg-white rounded-lg shadow w-60 border overflow-y-scroll absolute '
          hidden={dropdownToggleTo}
        >
          <ul className='py-2 overflow-y-auto text-gray-700 '>
            {dropdownItems?.map((item) => (
              <li
                key={item.id}
                className='flex items-center px-4 py-2 hover:bg-gray-100'
                onClick={() => setFormLocation(item)}
              >
                <div className=''>
                  <p className='font-bold text-sm'>{item?.location}</p>
                  <p className='font-light text-xs'>{item?.airportName}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className='font-extrabold text-3xl'>
          {fromLocation?.location ? fromLocation?.location : 'Dhaka'}
        </p>
        <p className='text-sm' hidden={dropdownToggleTo === false}>
          {fromLocation?.airportName
            ? fromLocation?.airportName
            : 'Hazrat Shahjalal International Airport'}
        </p>
      </div>
    </>
  );
};

export default ToLocationList;
