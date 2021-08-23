import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';

import { ChartTypeToComponent } from './charts/Charts';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export function DragAndDropDashboard({
  className = 'layout',
  cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight = 1,
  chartType,
  setSelectedCharts,
  selectedCharts,
  ...rest
}) {
  function createElement(el) {
    console.log(chartType);
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    return (
      <div key={el.i} selectedCharts-grid={el}>
        <span className='text'>{ChartTypeToComponent(el.type)}</span>
        <span className='remove' style={removeStyle} onClick={() => onRemoveItem(el.i)}>
          x
        </span>
      </div>
    );
  }

  function onBreakpointChange(breakpoint, cols) {
    setSelectedCharts({ ...selectedCharts, breakpoint: breakpoint, cols: cols });
  }

  function onLayoutChange(layout) {
    setSelectedCharts({ ...selectedCharts, layout: layout });
  }

  function onRemoveItem(i) {
    setSelectedCharts({ ...selectedCharts, items: selectedCharts.items.filter(el => el.i !== i) });
  }

  return (
    <>
      <ResponsiveReactGridLayout
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}>
        {selectedCharts.items.map(el => createElement(el))}
      </ResponsiveReactGridLayout>
    </>
  );
}
/*antes recibía, hace falta? ResponsiveReactGridLayout {...props}>  */
