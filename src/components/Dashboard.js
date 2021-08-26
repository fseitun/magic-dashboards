import { useState } from 'react';
import { Switch } from '@material-ui/core';

import { Selector } from 'components/Selector';
import { DragAndDropDashboard } from 'components/DragAndDropDashboard';
import { widgetTypes } from 'components/widgets/TypeToComponent';

export function Dashboard() {
  const savedLayout = JSON.parse(localStorage.getItem('layout'));
  let result;
  if (savedLayout === null) {
    result = {
      layout: [].map(i => ({
        i: i.toString(),
        x: i,
        y: 0,
        w: 1,
        h: 1,
      })),
      type: [],
      newCounter: 0,
    };
  } else {
    result = savedLayout;
  }
  const [chartType, setchartType] = useState(widgetTypes[1]);
  const [currentDashboard, setCurrentDashboard] = useState({ ...result });

  function onAddItem() {
    setCurrentDashboard({
      layout: [
        ...currentDashboard.layout,
        {
          i: currentDashboard.newCounter.toString(),
          x: currentDashboard.layout.length % (currentDashboard.cols || 16),
          y: 100000, //Infinity
          w: 3,
          h: 3,
        },
      ],
      type: [...currentDashboard.type, chartType],
      newCounter: currentDashboard.newCounter + 1,
    });
  }
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <>
      <Switch onChange={() => setIsAdmin(!isAdmin)} />
      {isAdmin ? (
        <Selector
          widgetTypes={widgetTypes}
          chartType={chartType}
          setchartType={setchartType}
          onAddItem={onAddItem}
        />
      ) : null}
      <DragAndDropDashboard
        className='layout'
        cols={16}
        rowHeight={50}
        width={1200}
        isDraggable={isAdmin}
        isResizable={isAdmin}
        isAdmin={isAdmin}
        currentDashboard={currentDashboard}
        setCurrentDashboard={setCurrentDashboard}
      />
    </>
  );
}
