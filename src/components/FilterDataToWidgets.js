import { useState } from 'react';
import { Autocomplete, Box, TextField, Button } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { dateObjectToYearMonthDate } from 'utils';
import { getMethod } from 'api';
import { useQuery } from 'react-query';

registerLocale('es', es);

export function FilterDataToWidgets({ setFilter }) {
  const [auxiliaryFilter, setAuxiliaryFilter] = useState({});

  const { data: sitio = [] } = useQuery('sitios', () =>
    getMethod('/location/list', { child: 'sitio' })
  );

  const { data: subloc1 = [] } = useQuery(['subloc1', auxiliaryFilter.sitio], () =>
    getMethod('/location/list', { fatherValue: auxiliaryFilter.sitio, child: 'subloc1' })
  );
  const { data: subloc2 = [] } = useQuery(['subloc2', auxiliaryFilter.subloc1], () =>
    getMethod('/location/list', { fatherValue: auxiliaryFilter.subloc1, child: 'subloc2' })
  );
  const { data: subloc3 = [] } = useQuery(['subloc3', auxiliaryFilter.subloc2], () =>
    getMethod('/location/list', { fatherValue: auxiliaryFilter.subloc2, child: 'subloc3' })
  );
  const { data: subloc4 = [] } = useQuery(['subloc4', auxiliaryFilter.subloc3], () =>
    getMethod('/location/list', { fatherValue: auxiliaryFilter.subloc3, child: 'subloc4' })
  );

  const datePickerOnChange = ([start, end]) => {
    setAuxiliaryFilter(prevState => ({
      ...prevState,
      startDate: start,
      endDate: end,
      fromdate: dateObjectToYearMonthDate(start),
      todate: dateObjectToYearMonthDate(end),
    }));
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <Autocomplete
        onChange={(e, newValue) => {
          setAuxiliaryFilter(prevState => ({
            ...prevState,
            sitio: newValue?.sitio,
          }));
        }}
        options={sitio}
        getOptionLabel={option => option.sitio}
        sx={{ width: 120 }}
        renderInput={params => <TextField {...params} label='Sitio' />}
      />

      {auxiliaryFilter.sitio && (
        <Autocomplete
          onChange={(e, newValue) => {
            setAuxiliaryFilter(prevState => ({
              ...prevState,
              subloc1: newValue.subloc1,
            }));
          }}
          getOptionLabel={option => option.subloc1}
          options={subloc1}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 1' />}
        />
      )}
      {auxiliaryFilter.subloc1 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setAuxiliaryFilter(prevState => ({
              ...prevState,
              subloc2: newValue.subloc2,
            }));
          }}
          getOptionLabel={option => option.subloc2}
          options={subloc2}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 2' />}
        />
      )}
      {auxiliaryFilter.subloc2 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setAuxiliaryFilter(prevState => ({
              ...prevState,
              subloc3: newValue.subloc3,
            }));
          }}
          getOptionLabel={option => option.subloc3}
          options={subloc3}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 3' />}
        />
      )}
      {auxiliaryFilter.subloc3 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setAuxiliaryFilter(prevState => ({
              ...prevState,
              subloc4: newValue.subloc4,
            }));
          }}
          getOptionLabel={option => option.subloc4}
          options={subloc4}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 4' />}
        />
      )}
      <Box>
        <DatePicker
          locale='es'
          dateFormat='dd/MM/yyyy'
          selected={auxiliaryFilter.startDate}
          onChange={datePickerOnChange}
          startDate={auxiliaryFilter.startDate}
          endDate={auxiliaryFilter.endDate}
          selectsRange
          placeholderText='inicio - fin'
        />
      </Box>
      <Button onClick={() => setFilter(prevState => ({ ...prevState, ...auxiliaryFilter }))}>
        Filtrar
      </Button>
    </Box>
  );
}
