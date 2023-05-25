import format from 'date-fns/format';
export const formatDate = date => {
  return format(Date.parse(date), 'yyyy')
};
