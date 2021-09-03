import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery } from 'react-query';
import { getMethod } from 'api';

let queryObject = { nomserie: 'name', nomsumarizado: 'value' };

export function RiesgosDeSeguridad({ filter }) {
  let innerQueryObject = {
    nomsumarizado: 'value',
    ...filter,
    serie: 'predRiskClas',
    serie2: 'predRisk',
  };
  const { data } = useQuery(Object.values(innerQueryObject), () =>
    getMethod('/rw/getsum2Levels', innerQueryObject)
  );
  const option = {
    title: { text: 'Riesgos de Seguridad', bottom: '5%', left: 'center' }, //pasar dinámicamente?
    tooltip: { trigger: 'item' },
    // legend: {
    //   show: true,
    //   //data: async () => await data.filter(e => e.name !== null).map(e => e.name),
    // },
    xAxis: {
      type: 'category',
      data: data
        ?.map(({ valor2: name, ...rest }) => ({ name, ...rest }))
        .filter(e => e.valor === 'Seguridad'),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data
          ?.map(({ valor2: name, ...rest }) => ({ name, ...rest }))
          .filter(e => e.valor === 'Seguridad'),
        type: 'bar',
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
