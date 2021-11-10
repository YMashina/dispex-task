export const filterOption = (input, option) =>
  option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;

export const filterSort = (optionA, optionB) =>
  optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase());

export const filterSortNumbers = (optionA, optionB) =>
  Number(optionA.label) - Number(optionB.label);

export const formattedAddress = (address) =>
  `ул.${address.street}${", д." + address.house} ${
    ", кв." + address.apartment
  }`;
