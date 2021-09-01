import { Autocomplete, Box, TextField } from '@material-ui/core';
import DatePicker from 'react-datepicker';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';

registerLocale('es', es);

//hardcodeados hasta que tenga endpoints
const optionsSitio = ['General Rodriguez', 'Longchamps'];
const optionsSubloc1 = ['Camara', 'Rodantes', 'Rosa', 'Jefatura 1', 'Almacen ', 'Sector 1'];
const optionsSubloc2 = ['Docks', 'Autoelevador', 'Carmesi'];
const optionsSubloc3 = ['(G3.G4 Carga Descarga) Dock N°1', 'Diesel'];
const optionsSubloc4 = [];

export function FilterDataToWidgets({ filter, setFilter }) {
  const onChange = ([start, end]) =>
    setFilter(prevState => ({ ...prevState, startDate: start, endDate: end }));

  return (
    <Box sx={{ display: 'flex' }}>
      <Autocomplete
        onChange={(e, newValue) => {
          setFilter(prevState => ({
            ...prevState,
            sitio: newValue,
          }));
        }}
        options={optionsSitio}
        sx={{ width: 120 }}
        renderInput={params => <TextField {...params} label='Sitio' />}
      />
      {filter.sitio && (
        <Autocomplete
          onChange={(e, newValue) => {
            setFilter(prevState => ({
              ...prevState,
              subloc1: newValue,
            }));
          }}
          options={optionsSubloc1}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 1' />}
        />
      )}
      {filter.subloc1 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setFilter(prevState => ({
              ...prevState,
              subloc2: newValue,
            }));
          }}
          options={optionsSubloc2}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 2' />}
        />
      )}
      {filter.subloc2 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setFilter(prevState => ({
              ...prevState,
              subloc3: newValue,
            }));
          }}
          options={optionsSubloc3}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 3' />}
        />
      )}
      {filter.subloc3 && (
        <Autocomplete
          onChange={(e, newValue) => {
            setFilter(prevState => ({
              ...prevState,
              subloc4: newValue,
            }));
          }}
          options={optionsSubloc4}
          sx={{ width: 120 }}
          renderInput={params => <TextField {...params} label='Sublocación 4' />}
        />
      )}
      <DatePicker
        locale='es'
        dateFormat='dd/MM/yyyy'
        selected={filter.startDate}
        onChange={onChange}
        startDate={filter.startDate}
        endDate={filter.endDate}
        selectsRange
        placeholderText='inicio - fin'
      />
      {/* armar botón para hacer el setFilter onClick luego replicar lógica en todos los widgets*/}
    </Box>
  );
}
