export const stringToBoolean = (str: string): boolean => {
  if (!/^1|0$/.test(str)) throw new Error('This string unsupported');
  return /^1$/.test(str);
};

export const objectFieldToUpdateQuery = <T, V extends keyof T>(keys: string[], updateData: T): string => {
  let query = 'set';
  keys.forEach((key: string, i) => {
    const data = `'${updateData[key as V]}'`;
    query += ` ${key} = ${typeof updateData[key as V] == 'boolean' ? updateData[key as V] : data}${i + 1 >= keys.length ? '' : ','}`;
  });
  return query;
};

export const toArray = (data: string[] | string): string[] => {
  return Array.isArray(data) ? data : [data];
};
