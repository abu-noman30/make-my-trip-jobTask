import moment from 'moment';

const Return = (props) => {
  const { state } = props;

  return (
    <>
      {/* Return Calender Container */}

      <p className='font-extrabold text-3xl px-2'>
        <span className='text-3xl font-bold mr-3'>
          {state[0].endDate
            ? `${moment(state[0].endDate).format('DD')}`
            : moment(new Date()).format('DD')}
        </span>
        <span className='text-xl'>
          {state[0].endDate
            ? `${moment(state[0].endDate).format('MMM')}'${moment(
                state[0].endDate
              ).format('YY')}`
            : `${moment(new Date()).format('MMM')}'${moment(new Date()).format(
                'YY'
              )}`}
        </span>
      </p>
      <p className='text-sm px-2'>
        {state[0].endDate
          ? moment(state[0].endDate).format('dddd')
          : moment(new Date()).format('dddd')}
      </p>
    </>
  );
};

export default Return;
