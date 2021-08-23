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
  setCurrentDashboard,
  currentDashboard,
  ...rest
}) {
  function createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    return (
      <div key={el.i} data-grid={el}>
        <span className='chart'>{ChartTypeToComponent(el.type)}</span>
        <span className='remove' style={removeStyle} onClick={() => onRemoveItem(el.i)}>
          x
        </span>
      </div>
    );
  }

  function onBreakpointChange(breakpoint, cols) {
    setCurrentDashboard({
      ...currentDashboard,
      breakpoint: breakpoint,
      cols: cols,
      onLayoutChange: function () {},
    });
  }

  function onLayoutChange(layout) {
    console.log(layout);
    setCurrentDashboard({ ...currentDashboard });
    saveToLS(currentDashboard);
    console.log(currentDashboard.layout);
  }

  function onRemoveItem(i) {
    setCurrentDashboard({
      ...currentDashboard,
      items: currentDashboard.items.filter(el => el.i !== i),
    });
  }
  return (
    <>
      <ResponsiveReactGridLayout
        layout={currentDashboard.layout} //????
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}>
        {currentDashboard.items.map(el => createElement(el))}
      </ResponsiveReactGridLayout>
    </>
  );
}
/*antes recibía, hace falta? ResponsiveReactGridLayout {...props}>  */

function saveToLS(value) {
  localStorage.setItem('items', JSON.stringify(value));
}
