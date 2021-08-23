import { useState } from 'react';
import { Selector } from 'components/Selector';
import { DragAndDropDashboard } from 'components/DragAndDropDashboard';
import { chartTypes } from 'components/charts/Charts';

export function Dashboard() {
  const savedItems = JSON.parse(localStorage.getItem('items'));
  let result;
  if (savedItems === null) {
    result = {
      items: [].map(i => ({
        i: i.toString(),
        x: i,
        y: 0,
        w: 1,
        h: 1,
        type: '',
      })),
      newCounter: 0,
    };
  } else {
    result = savedItems;
  }
  const [chartType, setchartType] = useState(chartTypes[1]);
  const [currentDashboard, setCurrentDashboard] = useState({ ...result });

  function onAddItem() {
    setCurrentDashboard({
      items: [
        ...currentDashboard.items,
        {
          i: currentDashboard.newCounter.toString(),
          x: currentDashboard.items.length % (currentDashboard.cols || 12),
          y: 100000, //Infinity
          w: 1,
          h: 1,
          type: chartType,
        },
      ],
      newCounter: currentDashboard.newCounter + 1,
    });
  }

  return (
    <>
      <Selector
        chartTypes={chartTypes}
        chartType={chartType}
        setchartType={setchartType}
        onAddItem={onAddItem}
      />
      <DragAndDropDashboard
        chartType={chartType}
        currentDashboard={currentDashboard}
        setCurrentDashboard={setCurrentDashboard}
      />
    </>
  );
}
