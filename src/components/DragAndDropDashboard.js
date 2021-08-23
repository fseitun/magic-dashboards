import React, { useEffect } from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';

import { ChartTypeToComponent } from './charts/Charts';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(RGL);

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
    console.log(el.i);
    console.log(currentDashboard.type[el.i]);
    return (
      <div key={el.i} data-grid={el}>
        <span className='chart'>{ChartTypeToComponent(currentDashboard.type[el.i])}</span>
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
    setCurrentDashboard({
      layouts: layout,
      newCounter: currentDashboard.newCounter,
      type: currentDashboard.type,
    });
    console.log(currentDashboard);
  }

  useEffect(() => saveToLS(currentDashboard), [currentDashboard]);

  function onRemoveItem(i) {
    setCurrentDashboard({
      ...currentDashboard,
      layouts: currentDashboard.layouts.filter(el => el.i !== i),
    });
  }

  return (
    <>
      <ResponsiveReactGridLayout
        layout={currentDashboard.layout} //????
        onLayoutChange={onLayoutChange}
        onBreakpointChange={onBreakpointChange}>
        {currentDashboard.layouts.map(el => createElement(el))}
      </ResponsiveReactGridLayout>
    </>
  );
}
/*antes recibía, hace falta? ResponsiveReactGridLayout {...props}>  */

function saveToLS(value) {
  localStorage.setItem('layouts', JSON.stringify(value));
}
