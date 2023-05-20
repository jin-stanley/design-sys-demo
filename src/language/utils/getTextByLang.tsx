const parsePath = (path: string): string[] => {
  return path.split(".");
};

export const getTextByLang = (
  json: any,
  path: string,
  defaultValue?: any
): any => {
  const keys = parsePath(path);

  let value = json;
  for (const key of keys) {
    if (value && value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return defaultValue; // Path not found, return default value
    }
  }

  return value;
};
