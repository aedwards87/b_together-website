import('crypto');

// Remove space and camalise text
export const camalise = function camalise(str?: string) {
  return (str ?? '')
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

// Remove space and capitilise text
export const capitilise = function capitilise(str: string) {
  if (str === undefined) {
    return;
  }
  return str
    .replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    })
    .replace(/\s/g, '');
};

// Remove spaces
export const removeSpaces = (str: string) => str.replace(/\s/g, '');

// Remove spaces and convert to lowercase
export const removeSpacesAndLowerCase = (str: string) =>
  removeSpaces(str).toLowerCase();

// Remove spacing and replace with a hyphen and convert to lowercase
export const toLowerCaseAndHyphen = (str: string) =>
  str.replace(/\s/g, '-').toLowerCase();

// Using .test on regExp searches for any letter found (e.g. 'px, vw') within input, to help determine whether it's a strict value or a selection from a CSS variable value
export const regExpLetterChecker = (str: string) => /[a-zA-Z]/g.test(str);

// Replace '&' wth 'And' in string
export const replaceAmpersand = (str: string) => str.replace('&', 'And');

export const replaceAmpersandInArrayOfObjects = (
  arr: Array<any>,
  field: string
) => {
  return arr.map((data) => {
    return {
      ...data,
      [field]: replaceAmpersand(data.url).toLowerCase(),
    };
  })[0];
};

// If the words white or black are used, replace with light or dark
export const blackOrWhite = function blackOrWhite(str: string) {
  const capStr = capitilise(str);
  if (str === undefined) {
    return;
  }
  if (capStr === 'white') {
    return 'Light';
  }
  if (capStr === 'White') {
    return 'Light';
  }
  if (capStr === 'black') {
    return 'Dark';
  }
  if (capStr === 'Black') {
    return 'Dark';
  } else {
    return str;
  }
};

// Takes in a string and position of where a space is to be inserted and returns the value
export function addSpaceToString(str: string, position = 5) {
  return `${str.slice(0, position)} ${str.slice(position, str.length)}`;
}

// Converts 24 hour time to 12 hour
export function changeTimeFormat(time: string) {
  let timeString = time;
  const hour = +timeString.substring(0, 2);
  const convert = hour % 12 || 12;
  const period = hour < 12 || hour === 24 ? 'am' : 'pm';
  return (timeString = convert + timeString.substring(2, 3) + period);
}

// Used to determine what colour the text should be from the background
export function determineTextColor(color: string) {
  if (color.includes('Dark')) {
    if (color.includes('green')) {
      return 'Dark';
    } else {
      return 'Light';
    }
  } else {
    return 'Dark';
  }
}

export function convertURLtoLowerCase(array: Array<any>) {
  return array.map((data) => {
    return {
      ...data,
      link: {
        ...data.link,
        url: toLowerCaseAndHyphen(data.link.url),
        ...data.link,
      },
    };
  });
}

export const convertTime12hr = (time: Date) => {
  return removeSpacesAndLowerCase(
    time.toLocaleString([], {
      hour12: true,
      hour: 'numeric',
    })
  );
};

export const convertPriceModel = (priceModel: string) => {
  const priceModelLC = priceModel.toLowerCase();
  if (priceModelLC === 'daily') {
    return 'day';
  }
  if (priceModelLC === 'monthly') {
    return 'mo';
  }
  if (priceModelLC === 'yearly' || priceModelLC === 'annually') {
    return 'yr';
  }
};

// Create a Unique ID
export const uuid = () => crypto.randomUUID();

// Check if a number is odd
export const isOdd = (num: number) => num % 2;

// Regular expressions pattern for validating 'name'
export const nameRegEx =
  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{0,}$/i;

// Regular expressions pattern for validating 'email'
export const emailRegEx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const phoneRegEx =
  /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;

// /^\d{10}$/;

// email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
