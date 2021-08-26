import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';

export function Selector({ widgetTypes, setchartType, chartType, onAddItem }) {
  function ComboBox({ chartType, setchartType, widgetTypes }) {
    return (
      <Autocomplete
        disablePortal
        options={widgetTypes}
        sx={{ width: 300 }}
        value={chartType}
        onChange={(e, newchartType) => setchartType(newchartType)}
        renderInput={params => <TextField {...params} label='Tipo de Gráfico' />}
      />
    );
  }

  return (
    <>
      <ComboBox chartType={chartType} setchartType={setchartType} widgetTypes={widgetTypes} />
      <button onClick={e => onAddItem(chartType)}>Add Item</button>
    </>
  );
}
