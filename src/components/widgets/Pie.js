import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery, useQueryClient } from 'react-query';
import { getMethod } from 'api';

export function TiposDeAccidentesOcurridos() {
  const queryClient = useQueryClient()

  const { data } = useQuery('accType', ({ queryKey }) =>
    getMethod('/ai/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
  );

  const option = {
    title: { text: 'Tipos de Accidentes Ocurridos', bottom: '5%', left: 'center' }, //pasar dinámicamente?
    tooltip: { trigger: 'item' },
    legend: {
      right: '0',
      top: '25%',
      width: 50,
      icon: 'circle',
    },
    series: [
      {
        type: 'pie',
        radius: ['', '75%'],
        label: { show: false },
        left: 0,
        center: ['30%', '45%'],
        data,
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: '100%' }} />;
}
