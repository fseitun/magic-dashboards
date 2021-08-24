import React from 'react';
import ReactECharts from 'echarts-for-react';

let data = [
  { value: 1048, name: 'Acc. con daños' },
  { value: 735, name: 'Acc in itinere' },
  { value: 580, name: 'enfermedad ocupacional' },
  { value: 484, name: 'Eventos ambientales' },
  { value: 300, name: 'Incidente relacionado con personas' },
];

export function TiposDeAccidentesOcurridos() {
  const option = {
    title: { text: 'Tipos de Accidentes Ocurridos', bottom: '5%' }, //pasar dinámicamente?
    tooltip: {
      trigger: 'item',
    },
    legend: {
      right: '0',
      top: '25%',
      width: 50,
      icon: 'circle'
    },
    series: [
      {
        name: 'Tipos de Accidentes Ocurridos',
        type: 'pie',
        left: '2%',
        radius: ['', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },

        data,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
