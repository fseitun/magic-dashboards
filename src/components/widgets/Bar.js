import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery } from 'react-query';
import { getMethod } from 'api';

export function AccidentesPorParteDelCuerpo() {
  const { data } = useQuery('injPlace', ({ queryKey }) =>
    getMethod('/ai/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
  );
  const option = {
    title: { text: 'Accidentes por parte del cuerpo', bottom: '5%', left: 'center' }, //pasar dinámicamente?
    tooltip: { trigger: 'item' },
    // legend: {
    //   show: true,
    //   //data: async () => await data.filter(e => e.name !== null).map(e => e.name),
    // },
    xAxis: {
      type: 'category',
      data: data?.filter(e => e.name !== null).map(e => e.name),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data?.filter(e => e.name !== null).map(e => e.value),
        type: 'bar',
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
export function RiesgosDeSeguridad() {
  const { data } = useQuery('predRisk', ({ queryKey }) =>
    getMethod('/rw/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
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
      data: data?.filter(e => e.name !== null).map(e => e.name),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data?.filter(e => e.name !== null).map(e => e.value),
        type: 'bar',
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
