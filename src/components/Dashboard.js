import { useState } from 'react';
import { Switch } from '@material-ui/core';

import { Selector } from 'components/Selector';
import { DragAndDropDashboard } from 'components/DragAndDropDashboard';
import { chartTypes } from 'components/widgets/Widget';

export function Dashboard() {
  const savedLayouts = JSON.parse(localStorage.getItem('layouts'));
  let result;
  if (savedLayouts === null) {
    result = {
      layouts: [].map(i => ({
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
    result = savedLayouts;
  }
  const [chartType, setchartType] = useState(chartTypes[1]);
  const [currentDashboard, setCurrentDashboard] = useState({ ...result });

  function onAddItem() {
    setCurrentDashboard({
      layouts: [
        ...currentDashboard.layouts,
        {
          i: currentDashboard.newCounter.toString(),
          x: currentDashboard.layouts.length % (currentDashboard.cols || 12),
          y: 100000, //Infinity
          w: 1,
          h: 1,
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
          chartTypes={chartTypes}
          chartType={chartType}
          setchartType={setchartType}
          onAddItem={onAddItem}
        />
      ) : null}
      <DragAndDropDashboard
        isDraggable={isAdmin}
        isResizable={isAdmin}
        isAdmin={isAdmin}
        chartType={chartType}
        currentDashboard={currentDashboard}
        setCurrentDashboard={setCurrentDashboard}
      />
    </>
  );
}
