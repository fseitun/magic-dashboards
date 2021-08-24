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
    title: { text: 'Tipos de Accidentes Ocurridos', bottom: '5%', left: 'center' }, //pasar dinámicamente?
    tooltip: { trigger: 'item' },
    legend: {
      right: '0',
      top: '25%',
      width: 50,
      icon: 'circle',
    },
    series: [
      {
        type: 'pie',
        radius: ['', '75%'],
        label: { show: false },
        left: 0,
        center: ['30%', '45%'],
        data,
      },
    ],
  };

  return <ReactECharts option={option}  />;
}
