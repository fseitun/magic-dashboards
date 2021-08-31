import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery, useQueryClient } from 'react-query';
import { getMethod } from 'api';

export function Bar() {
  const queryClient = useQueryClient();

  const { data } = useQuery('injPlace', ({ queryKey }) =>
    getMethod('/ai/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
  );
  const option = {
    title: { text: 'Accidentes por parte del cuerpo', bottom: '5%', left: 'center' }, //pasar dinámicamente?
    tooltip: { trigger: 'item' },
    // legend: {
    //   show: true,
    //   //data: async () => await data.filter(e => e.name !== null).map(e => e.name),
    //   data: ['Cabeza', 'Ojos', 'Cara', 'Cuello'],
    // },
    xAxis: {
      type: 'category',
      data:  data?.filter(e => e.name !== null).map(e => e.name),
      //data: ['Cabeza', 'Ojos', 'Cara', 'Cuello'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data:  data?.filter(e => e.name !== null).map(e => e.value),
       // data: [120, 200, 150, 80],
        type: 'bar',
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
