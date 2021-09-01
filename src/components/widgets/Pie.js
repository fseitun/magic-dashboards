import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery } from 'react-query';
import { Typography, Box } from '@material-ui/core';
import { getMethod } from 'api';

let queryObject = { serie: 'accType', nomserie: 'name', nomsumarizado: 'value' };

export function TiposDeAccidentesOcurridos({ filter }) {
  queryObject = { ...queryObject, ...filter };
  const { data } = useQuery([queryObject.serie, queryObject.sitio], () =>
    getMethod('/ai/getsum', queryObject)
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

export function AvisosDeRiesgoPorEstado() {
  const { data } = useQuery('state', ({ queryKey }) =>
    getMethod('/rw/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
  );

  const option = {
    title: {
      text: `Total: ${data?.reduce((a, c) => (a += c.value), 0)}`,
      top: '41%',
      left: '29%',
      textAlign: 'center',
    },
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
        radius: ['35%', '75%'],
        label: { show: false },
        left: 0,
        center: ['30%', '45%'],
        data,
      },
    ],
  };

  return (
    <Box sx={{ height: 1, display: 'flex', flexFlow: 'column' }}>
      <ReactECharts option={option} style={{ height: '90%' }} />
      <Typography color='text.secondary'>Avisos de Riesgo por Estado</Typography>
    </Box>
  );
}

export function RiesgoPotencial() {
  const { data } = useQuery('potRisk', ({ queryKey }) =>
    getMethod('/rw/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
  );

  const option = {
    title: {
      text: `Total: ${data?.reduce((a, c) => (a += c.value), 0)}`,
      top: '41%',
      left: '29%',
      textAlign: 'center',
    },
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
        radius: ['35%', '75%'],
        label: { show: false },
        left: 0,
        center: ['30%', '45%'],
        data,
      },
    ],
  };

  return (
    <Box sx={{ height: 1, display: 'flex', flexFlow: 'column' }}>
      <ReactECharts option={option} style={{ height: '90%' }} />
      <Typography color='text.secondary'> Riesgo Potencial</Typography>
    </Box>
  );
}

export function RiesgoDeCalidad() {
  const { data } = useQuery('accType', ({ queryKey }) =>
    getMethod('/rw/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
  );

  const option = {
    title: {
      text: `Total: ${data?.reduce((a, c) => (a += c.value), 0)}`,
      top: '41%',
      left: '29%',
      textAlign: 'center',
    },
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
        radius: ['35%', '75%'],
        label: { show: false },
        left: 0,
        center: ['30%', '45%'],
        data,
      },
    ],
  };

  return (
    <Box sx={{ height: 1, display: 'flex', flexFlow: 'column' }}>
      <ReactECharts option={option} style={{ height: '90%' }} />
      <Typography color='text.secondary'> Riesgo de Calidad</Typography>
    </Box>
  );
}

export function RiesgoMedioambiental() {
  const { data } = useQuery('accType', ({ queryKey }) =>
    getMethod('/ai/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
  );

  const option = {
    title: { text: 'Riesgo Medioambiental', bottom: '5%', left: 'center' }, //pasar dinámicamente?
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

export function RiesgoDeSalud() {
  const { data } = useQuery('accType', ({ queryKey }) =>
    getMethod('/ai/getsum', { serie: `${queryKey[0]}`, nomserie: 'name', nomsumarizado: 'value' })
  );

  const option = {
    title: { text: 'Riesgo de Salud', bottom: '5%', left: 'center' }, //pasar dinámicamente?
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
