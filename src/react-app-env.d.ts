/// <reference types="react-scripts" />
type valueType = {
  value: number,
  dateRelease: string,
};

type yearType = {
  XX: valueType,
  YY: valueType,
  ZZ: valueType,
};

type regionType = {
  G: {
    2017?: yearType,
    2018?: yearType,
    2019?: yearType,
  },
};

type dataType = {
  Kyivska: regionType,
  Odeska: regionType,
  Lvivska: regionType,
};

type data = {
  data: dataType,
};

type supportItem = {
  id: number,
  num: string | number,
  date: string,
  user: string,
  comment: string,
};
