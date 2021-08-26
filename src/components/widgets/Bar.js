import React from 'react';
import ReactECharts from 'echarts-for-react';

export function Bar() {
  const option = {
    title: { text: 'Accidentes por parte del cuerpo', bottom: '5%', left: 'center' }, //pasar dinámicamente?
    tooltip: { trigger: 'item' },
    legend: {
      show: true,
      data: ['Cabeza', 'Ojos', 'Cara', 'Cuello']
    },
    xAxis: {
      type: 'category',
      data: ['Cabeza', 'Ojos', 'Cara', 'Cuello'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80],
        type: 'bar',
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
