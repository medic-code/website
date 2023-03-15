const MONTH_CONVERT = {
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'July',
  '7': 'Aug',
  '8': 'Sept',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec',
};

export const dateToMonthYear = (date: string) => {
  const parsedDate = new Date(Date.parse(date));
  const month = parsedDate.getMonth();
  const convertedMonth = MONTH_CONVERT[month];
  const day = parsedDate.getDate();

  return `${convertedMonth} ${day}`;
};
