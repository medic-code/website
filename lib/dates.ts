type months = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
};

const MONTH_CONVERT: months = {
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
  const parsedDate: Date = new Date(Date.parse(date));
  const month: number = parsedDate.getMonth();
  const convertedMonth: string =
    MONTH_CONVERT[month as keyof typeof MONTH_CONVERT];
  const day: number = parsedDate.getDate();

  return `${convertedMonth} ${day}`;
};
