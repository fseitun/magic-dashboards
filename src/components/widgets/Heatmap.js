import React from 'react';
import ReactECharts from 'echarts-for-react';
//import { useQuery } from 'react-query';
//import { getMethod } from 'api';

export function AccidentesPorParteDelCuerpo({ filter }) {
  //let innerQueryObject = {
  // ...filter,
  //serie: 'classification',
  //};
  // const { data } = useQuery(Object.values(innerQueryObject), () =>
  //   getMethod('/pyramid/getsum', innerQueryObject)
  // );

  let bodyParts = [
    'ojos',
    'cara',
    'cabeza',
    'cuello',
    'hombro',
    'pecho',
    'abdomen',
    'cervical',
    'región dorsal',
    'región lumbar',
    'cadera',
    'muslo',
    'brazo',
    'codo',
    'antebrazo',
    'muñeca',
    'mano',
    'dedos de la mano',
    'pierna',
    'rodilla',
    'tobillo',
    'pie',
    'dedos del pie',
  ];
  let percent = ['0%', '5%', '10%', '15%', '20%', '25%', '30%', '+35%'];
  let data = [
    [3, 5, 25],
    [1, 3, 18],
    [13, 2, 12],
    [9, 1, 9],
    [5, 1, 9],
    [2, 1, 9],
    [6, 1, 9],
    [4, 1, 7],
    [23, 0, 1],
    [21, 0, 1],
    [7, 0, 1],
    [17, 0, 1],
  ];

  data = data.map(function (item) {
    return [item[0], item[1], item[2] || '-'];
  });

  let option = {
    tooltip: {
      position: 'top',
    },
    grid: {
      height: '50%',
      top: '10%',
    },
    xAxis: {
      type: 'category',
      data: bodyParts,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 10,
        interval: 'auto',
        rotate: 45,
      },
      splitArea: {
        show: true,
      },
    },
    yAxis: {
      type: 'category',
      data: percent,
      axisTick: {
        show: false,
      },
      splitArea: {
        show: true,
      },
    },
    visualMap: {
      min: 0,
      max: 35,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: '15%',
      inRange: {
        color: ['#57CC99', '#FACE7F', '#E63E6D'], //From smaller to bigger value ->
      },
    },
    series: [
      {
        type: 'heatmap',
        data: data,
        label: {
          show: true,
          formatter: value => {
            let val = value.value[2];
            return val;
          },
          fontSize: 10,
          color: 'white',
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
