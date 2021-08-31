import { useEffect } from 'react';
import GridLayout from 'react-grid-layout';

import { TypeToComponent } from 'components/widgets/TypeToComponent';
import '../../node_modules/react-grid-layout/css/styles.css';
import '../../node_modules/react-resizable/css/styles.css';

export function DragAndDropDashboard({ isAdmin, setCurrentDashboard, currentDashboard, ...rest }) {
  function createElement(el) {
    const removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer',
    };
    return (
      <div key={el.i} data-grid={el}>
        <span className='chart'>
          <TypeToComponent widgetType={currentDashboard.type[el.i]} />
        </span>
        {isAdmin ? (
          <span className='remove' style={removeStyle} onClick={() => onRemoveItem(el.i)}>
            x
          </span>
        ) : null}
      </div>
    );
  }

  function onLayoutChange(layout) {
    setCurrentDashboard({
      layout: layout,
      newCounter: currentDashboard.newCounter,
      type: currentDashboard.type,
    });
  }

  useEffect(() => saveToLS(currentDashboard), [currentDashboard]);

  function onRemoveItem(i) {
    setCurrentDashboard({
      ...currentDashboard,
      layout: currentDashboard.layout.filter(el => el.i !== i),
    });
  }
  return (
    <>
      <GridLayout layout={currentDashboard.layout} onLayoutChange={onLayoutChange} {...rest}>
        {currentDashboard.layout.map(el => createElement(el))}
      </GridLayout>
    </>
  );
}

function saveToLS(value) {
  localStorage.setItem('layout', JSON.stringify(value));
}
