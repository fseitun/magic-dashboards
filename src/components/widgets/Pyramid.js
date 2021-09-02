import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery } from 'react-query';
import { getMethod } from 'api';

let queryObject = { nomserie: 'name', nomsumarizado: 'value' };

export function PiramideDeAccidentalidad({ filter }) {
  const option = {
    title: {
      text: 'Pirámide de Accidentalidad',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%',
    },
    
    legend: {
      data: ['A', 'B', 'C', 'D', 'E'],
    },

    series: [
      {
        name: '漏斗图',
        type: 'funnel',
        left: '10%',
        top: 60,
        //x2: 80,
        bottom: 60,
        width: '80%',
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
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
          { value: 60, name: 'C' },
          { value: 40, name: 'D' },
          { value: 20, name: 'E' },
          { value: 80, name: 'B' },
          { value: 100, name: 'A' },
        ],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
