import { useState } from 'react';
import { Autocomplete, Box, TextField, Button } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import { dateObjectToYearMonthDate } from 'utils';

registerLocale('es', es);

//hardcodeados hasta que tenga endpoints
const optionsSitio = ['General Rodriguez', 'Longchamps'];
const optionsSubloc1 = ['Camara', 'Rodantes', 'Rosa', 'Jefatura 1', 'Almacen ', 'Sector 1'];
const optionsSubloc2 = ['Docks', 'Autoelevador', 'Carmesi'];
const optionsSubloc3 = ['(G3.G4 Carga Descarga) Dock N°1', 'Diesel'];
const optionsSubloc4 = [];

export function FilterDataToWidgets({ filter, setFilter }) {
  const [auxiliaryFilter, setAuxiliaryFilter] = useState({});

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
            sitio: newValue,
          }));
        }}
        options={optionsSitio}
        sx={{ width: 120 }}
        renderInput={params => <TextField {...params} label='Sitio' />}
      />
      {auxiliaryFilter.sitio && (
        <Autocomplete
          onChange={(e, newValue) => {
            setAuxiliaryFilter(prevState => ({
              ...prevState,
              subloc1: newValue,
            }));
          }}
          options={optionsSubloc1}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 1' />}
        />
      )}
      {auxiliaryFilter.subloc1 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setAuxiliaryFilter(prevState => ({
              ...prevState,
              subloc2: newValue,
            }));
          }}
          options={optionsSubloc2}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 2' />}
        />
      )}
      {auxiliaryFilter.subloc2 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setAuxiliaryFilter(prevState => ({
              ...prevState,
              subloc3: newValue,
            }));
          }}
          options={optionsSubloc3}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 3' />}
        />
      )}
      {auxiliaryFilter.subloc3 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setAuxiliaryFilter(prevState => ({
              ...prevState,
              subloc4: newValue,
            }));
          }}
          options={optionsSubloc4}
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
