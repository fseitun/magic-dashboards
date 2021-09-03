import { useState } from 'react';
import { Switch } from '@material-ui/core';

import { WidgetSelector } from 'components/WidgetSelector';
import { DragAndDropDashboard } from 'components/DragAndDropDashboard';
import { widgetTypes } from 'components/widgets/TypeToComponent';
import { FilterDataToWidgets } from 'components/FilterDataToWidgets';

export function Dashboard() {
  const savedLayout = JSON.parse(localStorage.getItem('layout')) || {"layout":[{"w":4,"h":4,"x":0,"y":27,"i":"12","moved":false,"static":false},{"w":4,"h":4,"x":4,"y":27,"i":"13","moved":false,"static":false},{"w":4,"h":4,"x":8,"y":27,"i":"14","moved":false,"static":false},{"w":8,"h":3,"x":0,"y":0,"i":"15","moved":false,"static":false},{"w":8,"h":6,"x":0,"y":3,"i":"16","moved":false,"static":false},{"w":4,"h":8,"x":8,"y":0,"i":"17","moved":false,"static":false},{"w":12,"h":5,"x":0,"y":9,"i":"18","moved":false,"static":false},{"w":12,"h":9,"x":0,"y":14,"i":"19","moved":false,"static":false},{"w":7,"h":4,"x":0,"y":23,"i":"20","moved":false,"static":false},{"w":5,"h":4,"x":7,"y":23,"i":"21","moved":false,"static":false}],"newCounter":22,"type":["TiposDeAccidentesOcurridos","TiposDeAccidentesOcurridos","AvisosDeRiesgoPorEstado","RiesgoPotencial","RiesgoMedioambiental","RiesgoDeSalud","AccidentesEincidentes","TiposDeRiesgoOcurridos","AccidentesPorParteDelCuerpo","RiesgosDeSeguridad","PiramideDeAccidentalidad","PiramideDeAccidentalidad","RiesgoDeCalidad","RiesgoMedioambiental","RiesgoDeSalud","AccidentesEincidentes","TiposDeAccidentesOcurridos","TiposDeRiesgoOcurridos","RiesgosDeSeguridad","PiramideDeAccidentalidad","AvisosDeRiesgoPorEstado","RiesgoPotencial"]};
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
  const [filter, setFilter] = useState({});
  return (
    <>
      <Switch onChange={() => setIsAdmin(!isAdmin)} />
      {isAdmin && (
        <WidgetSelector
          widgetTypes={widgetTypes}
          chartType={chartType}
          setchartType={setchartType}
          onAddItem={onAddItem}
        />
      )}
      <FilterDataToWidgets setFilter={setFilter} />
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
        filter={filter}
      />
    </>
  );
}
