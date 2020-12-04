import { compareAsc, format } from 'date-fns';

const getToday = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const today = format(new Date(year, month, day), 'yyyy-MM-dd');
  
  return today;
}

export { getToday } 