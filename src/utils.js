export const dateObjectToYearMonthDate = dateObject =>
  `${dateObject?.getFullYear()}-${(1 + dateObject?.getMonth())
    .toString()
    .padStart(2, '0')}-${dateObject?.getDate().toString().padStart(2, '0')}`;