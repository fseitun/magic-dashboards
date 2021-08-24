import React from 'react';
import ReactECharts from 'echarts-for-react';

let data = [
  { value: 1048, name: 'Acc. con daños' },
  { value: 735, name: 'Acc in itinere' },
  { value: 580, name: 'enfermedad ocupacional' },
  { value: 484, name: 'Eventos ambientales' },
  { value: 300, name: 'Incidente relacionado con personas' },
];

export function AccidentesEIncidentes() {
  const option = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      right: '0',
      top: '25%',
      width: 50,
    },
    series: [
      {
        name: 'Accidentes e Incidentes',
        type: 'pie',
        radius: ['', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
}
