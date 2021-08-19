import React, { useState } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

import { Funnel, Area } from 'charts/Charts';
// import { Chart, chartTypes } from 'charts/Charts';

function ComboBox({ chartType, setchartType, chartTypes }) {
  return (
    <Autocomplete
      chartType={chartType}
      onChange={(e, newchartType) => setchartType(newchartType)}
      disablePortal
      id='combo-box-demo'
      options={chartTypes}
      sx={{ width: 300 }}
      renderInput={params => {
        // console.log(params);
        return <TextField {...params} label='Tipo de Gráfico' />;
      }}
    />
  );
}

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const defaultProps = {
  className: 'layout',
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight: 1,
};

export function DragAndDropDashboard(props = defaultProps) {
  const chartTypes = ['Funnel', 'Area'];
  // console.log(props);
  const [chartType, setchartType] = useState(chartTypes[1]);
  console.log(chartType);
  const [data, setData] = useState({
    items: [].map((i, key) => ({
      i: i.toString(),
      x: i,
      y: 0,
      w: 1,
      h: 1,
      type: '',
    })),
    newCounter: 0,
  });
  // console.log(data);

  function createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    return (
      <div key={el.i} data-grid={el}>
        <span className='text'>
          <Funnel />
        </span>
        <span className='remove' style={removeStyle} onClick={() => onRemoveItem(el.i)}>
          x
        </span>
      </div>
    );
  }

  function onAddItem() {
    console.log(chartType);
    setData({
      items: [
        ...data.items,
        {
          i: data.newCounter.toString(),
          x: data.items.length % (data.cols || 12),
          y: Infinity,
          w: 1,
          h: 1,
          type: chartType,
        },
      ],
      newCounter: data.newCounter + 1,
    });
  }

  function onBreakpointChange(breakpoint, cols) {
    setData({ ...data, breakpoint: breakpoint, cols: cols });
  }

  function onLayoutChange(layout) {
    typeof props.onLayoutChange === 'function' && props.onLayoutChange(layout);
    setData({ ...data, layout: layout });
  }

  function onRemoveItem(i) {
    setData({ ...data, items: data.items.filter(el => el.i !== i) });
  }

  return (
    <>
      <ComboBox chartType={chartType} setchartType={setchartType} chartTypes={chartTypes} />
      <button onClick={e => onAddItem(chartType)}>Add Item</button>
      <ResponsiveReactGridLayout
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}
        {...props}>
        {data.items.map(el => createElement(el))}
      </ResponsiveReactGridLayout>
    </>
  );
}
