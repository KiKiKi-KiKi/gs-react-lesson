import * as dayjs from 'dayjs';

export const formatDate = (dateStr) => {
  return dayjs(dateStr).format('YYYY MM/DD');
};
