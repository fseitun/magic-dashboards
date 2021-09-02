import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery } from 'react-query';
import { getMethod } from 'api';

let queryObject = { nomserie: 'name', nomsumarizado: 'value' };

export function AccidentesPorParteDelCuerpo({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'injPlace' };
  const { data } = useQuery(
    [
      innerQueryObject.serie,
      innerQueryObject.sitio,
      innerQueryObject.subloc1,
      innerQueryObject.subloc2,
      innerQueryObject.subloc3,
      innerQueryObject.subloc4,
      innerQueryObject.fromdate,
      innerQueryObject.todate,
    ],
    () => getMethod('/ai/getsum', innerQueryObject)
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
export function RiesgosDeSeguridad({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'predRisk' };
  const { data } = useQuery(
    [
      innerQueryObject.serie,
      innerQueryObject.sitio,
      innerQueryObject.subloc1,
      innerQueryObject.subloc2,
      innerQueryObject.subloc3,
      innerQueryObject.subloc4,
      innerQueryObject.fromdate,
      innerQueryObject.todate,
    ],
    () => getMethod('/rw/getsum', innerQueryObject)
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
