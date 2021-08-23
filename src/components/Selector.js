import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';

export function Selector({ chartTypes, setchartType, chartType, onAddItem }) {
  function ComboBox({ chartType, setchartType, chartTypes }) {
    return (
      <Autocomplete
        disablePortal
        options={chartTypes}
        sx={{ width: 300 }}
        value={chartType}
        onChange={(e, newchartType) => setchartType(newchartType)}
        renderInput={params => <TextField {...params} label='Tipo de Gráfico' />}
      />
    );
  }

  return (
    <>
      <ComboBox chartType={chartType} setchartType={setchartType} chartTypes={chartTypes} />
      <button onClick={e => onAddItem(chartType)}>Add Item</button>
    </>
  );
}
