import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery } from 'react-query';
import { getMethod } from 'api';

export function PiramideDeAccidentalidad({ filter }) {
  let innerQueryObject = {
    ...filter,
    serie: 'classification',
  };
  const { data } = useQuery(Object.values(innerQueryObject), () =>
    getMethod('/pyramid/getsum', innerQueryObject)
  );
  let renamedData = data?.map(({ count: realValue, valor: name }) => ({ realValue, name }));

  let sumOfOthers = 0;

  const filteredData = renamedData?.filter(item => {
    if (
      item.name === 'A+' ||
      item.name === 'A.Riesgo' ||
      item.name === 'Auditorías' ||
      item.name === 'Disciplina'
    ) {
      sumOfOthers += item.realValue;
    }
    return (
      item.name !== 'A+' &&
      item.name !== 'A.Riesgo' &&
      item.name !== 'Auditorías' &&
      item.name !== 'Disciplina'
    );
  });

  filteredData?.push({ name: 'Total', realValue: sumOfOthers });

  filteredData?.forEach(e => {
    if (e.name === 'LTA') {
      e.value = 20;
    } else if (e.name === 'nLTA') {
      e.value = 40;
    } else if (e.name === 'Incidentes') {
      e.value = 80;
    } else if (e.name === 'Primeros Auxilios') {
      e.value = 60;
    } else if (e.name === 'Total') {
      e.value = 100;
    }
  });

  const option = {
    title: {
      text: 'Pirámide de Accidentalidad',
    },
    series: [
      {
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
        sort: 'ascending',
        gap: 2,
        tooltip: {
          show: true,
          trigger: 'item',
          formatter: params => 'p',
        },
        label: {
          show: true,
          position: 'inside',
          formatter: params => params.name + '\n' + JSON.stringify(params.data.realValue),
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
          borderWidth: 5,
        },
        data: filteredData,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
