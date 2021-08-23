import { useState } from 'react';
import { Selector } from 'components/Selector';
import { DragAndDropDashboard } from 'components/DragAndDropDashboard';
import { chartTypes } from 'components/charts/Charts';

export function Dashboard() {
  const [chartType, setchartType] = useState(chartTypes[1]);
  const [selectedCharts, setSelectedCharts] = useState({
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

  function onAddItem() {
    console.log(chartType);
    setSelectedCharts({
      items: [
        ...selectedCharts.items,
        {
          i: selectedCharts.newCounter.toString(),
          x: selectedCharts.items.length % (selectedCharts.cols || 12),
          y: Infinity,
          w: 1,
          h: 1,
          type: chartType,
        },
      ],
      newCounter: selectedCharts.newCounter + 1,
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
        selectedCharts={selectedCharts}
        setSelectedCharts={setSelectedCharts}
      />
    </>
  );
}
