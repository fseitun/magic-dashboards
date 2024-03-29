import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useQuery } from 'react-query';
import { Typography, Box } from '@material-ui/core';
import { getMethod } from 'api';

let queryObject = { nomserie: 'name', nomsumarizado: 'value' };

export function TiposDeAccidentesOcurridos({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'accType' };
  const { data } = useQuery(Object.values(innerQueryObject), () =>
    getMethod('/ai/getsum', innerQueryObject)
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

export function AvisosDeRiesgoPorEstado({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'state' };
  const { data } = useQuery(Object.values(innerQueryObject), () =>
    getMethod('/rw/getsum', innerQueryObject)
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

export function RiesgoPotencial({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'potRisk' };
  const { data } = useQuery(Object.values(innerQueryObject), () =>
    getMethod('/rw/getsum', innerQueryObject)
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

export function RiesgoDeCalidad({ filter }) {
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
    title: {
      text: `Total: ${data
        ?.map(({ valor2: name, ...rest }) => ({ name, ...rest }))
        .filter(e => e.valor === 'Salud')
        .reduce((a, c) => (a += c.value), 0)}`,
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
        data: data
          ?.map(({ valor2: name, ...rest }) => ({ name, ...rest }))
          .filter(e => e.valor === 'Salud'),
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

export function RiesgoMedioambiental({ filter }) {
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
    title: {
      text: `Total: ${data
        ?.map(({ valor2: name, ...rest }) => ({ name, ...rest }))
        .filter(e => e.valor === 'Ambiental')
        .reduce((a, c) => (a += c.value), 0)}`,
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
        data: data
          ?.map(({ valor2: name, ...rest }) => ({ name, ...rest }))
          .filter(e => e.valor === 'Ambiental'),
      },
    ],
  };

  return (
    <Box sx={{ height: 1, display: 'flex', flexFlow: 'column' }}>
      <ReactECharts option={option} style={{ height: '90%' }} />
      <Typography color='text.secondary'> Riesgo Medioambiental</Typography>
    </Box>
  );
}

export function RiesgoDeSalud({ filter }) {
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
    title: {
      text: `Total: ${data
        ?.map(({ valor2: name, ...rest }) => ({ name, ...rest }))
        .filter(e => e.valor === 'Salud')
        .reduce((a, c) => (a += c.value), 0)}`,
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
        data: data
          ?.map(({ valor2: name, ...rest }) => ({ name, ...rest }))
          .filter(e => e.valor === 'Salud'),
      },
    ],
  };

  return (
    <Box sx={{ height: 1, display: 'flex', flexFlow: 'column' }}>
      <ReactECharts option={option} style={{ height: '90%' }} />
      <Typography color='text.secondary'> Riesgo de Salud</Typography>
    </Box>
  );
}

