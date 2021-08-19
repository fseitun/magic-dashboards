import React from 'react';
import ReactECharts from 'echarts-for-react';

export function Funnel() {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%',
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    series: [
      {
        name: 'Accidentes',
        type: 'funnel',
        left: '5%',
        width: '90%',
        top: 10,
        bottom: 10,
        //x2: 80,
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'ascending',
        gap: 2,
        label: {
          show: true,
          position: 'inside',
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: 'solid',
          },
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: [
          { value: 12, name: 'Graves' },
          { value: 25, name: 'Sit Complejas' },
          { value: 6, name: 'Muertes' },
          { value: 50, name: 'Situaciones' },
          { value: 100, name: 'Universo' },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 300 }} />;
}
