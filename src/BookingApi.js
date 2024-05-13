const seededRandom = function (seed) {
  let m = 2 ** 35 - 31;
  let a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

export const submitAPI = (formData) => {
  if (!formData) {
    console.log('submitAPI_formData:', formData);

    return false;
  }
  return true;
};

export const updatedTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, times: fetchAPI(action.date) };
    default:
      return state;
  }
};

export const initializeTimes = () => {
  const today = new Date();

  return { times: fetchAPI(today) };
};
