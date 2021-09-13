import { useState } from 'react';
import { Switch } from '@material-ui/core';

import { WidgetSelector } from 'components/WidgetSelector';
import { DragAndDropDashboard } from 'components/DragAndDropDashboard';
import { widgetTypes } from 'components/widgets/TypeToComponent';
import { FilterDataToWidgets } from 'components/FilterDataToWidgets';

export function Dashboard() {
  const savedLayout = JSON.parse(localStorage.getItem('layout')) || {
    layout: [
      { w: 5, h: 3, x: 1, y: 21, i: '23', moved: false, static: false },
      { w: 8, h: 6, x: 0, y: 3, i: '25', moved: false, static: false },
      { w: 4, h: 3, x: 8, y: 21, i: '26', moved: false, static: false },
      { w: 4, h: 3, x: 0, y: 24, i: '27', moved: false, static: false },
      { w: 3, h: 3, x: 5, y: 24, i: '28', moved: false, static: false },
      { w: 3, h: 3, x: 9, y: 24, i: '29', moved: false, static: false },
      { w: 8, h: 3, x: 0, y: 0, i: '30', moved: false, static: false },
      { w: 4, h: 7, x: 8, y: 0, i: '31', moved: false, static: false },
      { w: 12, h: 5, x: 0, y: 9, i: '32', moved: false, static: false },
      { w: 8, h: 7, x: 4, y: 14, i: '33', moved: false, static: false },
    ],
    newCounter: 34,
    type: [
      'TiposDeAccidentesOcurridos',
      'TiposDeAccidentesOcurridos',
      'AvisosDeRiesgoPorEstado',
      'RiesgoPotencial',
      'RiesgoMedioambiental',
      'RiesgoDeSalud',
      'AccidentesEincidentes',
      'TiposDeRiesgoOcurridos',
      'AccidentesPorParteDelCuerpo',
      'RiesgosDeSeguridad',
      'PiramideDeAccidentalidad',
      'PiramideDeAccidentalidad',
      'RiesgoDeCalidad',
      'RiesgoMedioambiental',
      'RiesgoDeSalud',
      'AccidentesEincidentes',
      'TiposDeAccidentesOcurridos',
      'TiposDeRiesgoOcurridos',
      'RiesgosDeSeguridad',
      'PiramideDeAccidentalidad',
      'AvisosDeRiesgoPorEstado',
      'RiesgoPotencial',
      'AccidentesPorParteDelCuerpo',
      'AvisosDeRiesgoPorEstado',
      'AvisosDeRiesgoPorEstado',
      'TiposDeAccidentesOcurridos',
      'RiesgoPotencial',
      'RiesgoDeCalidad',
      'RiesgoMedioambiental',
      'RiesgoDeSalud',
      'AccidentesEincidentes',
      'TiposDeRiesgoOcurridos',
      'RiesgosDeSeguridad',
      'PiramideDeAccidentalidad',
    ],
  };
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
