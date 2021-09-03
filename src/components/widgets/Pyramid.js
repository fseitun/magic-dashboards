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
  let renamedData = data?.map(({ count: value, valor: name }) => ({ value, name }));

  let sumOfOthers = 0;

  const filteredData = renamedData?.filter(item => {
    if (
      item.name === 'A+' ||
      item.name === 'A.Riesgo' ||
      item.name === 'Auditorías' ||
      item.name === 'Disciplina'
    ) {
      sumOfOthers += item.value;
    }
    return (
      item.name !== 'A+' &&
      item.name !== 'A.Riesgo' &&
      item.name !== 'Auditorías' &&
      item.name !== 'Disciplina'
    );
  });

  filteredData?.push({ name:'Total', value: sumOfOthers });
  console.log(filteredData);

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
        label: {
          show: true,
          fontSize: 20,
          position: 'inside',
          formatter: '{c}\n{b}',
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
