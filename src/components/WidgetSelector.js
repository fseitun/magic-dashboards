import { Box, Autocomplete, TextField, Button } from '@material-ui/core';

export function WidgetSelector({ widgetTypes, setchartType, chartType, onAddItem }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <WidgetDropdown chartType={chartType} setchartType={setchartType} widgetTypes={widgetTypes} />
      <Button onClick={e => onAddItem(chartType)}>Add Item</Button>
    </Box>
  );
}

function WidgetDropdown({ chartType, setchartType, widgetTypes }) {
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
