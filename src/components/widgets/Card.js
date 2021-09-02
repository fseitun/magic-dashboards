import { Card, Box, Typography, CardContent } from '@material-ui/core';
import { useQuery } from 'react-query';
import { getMethod } from 'api';

const filterByParam = (arr, param) => arr.filter(obj => obj.valor === param);
const counter = arr => arr.reduce((ac, cur) => (ac += cur.count), 0);

let queryObject = {};

export function AccidentesEincidentes({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'phase' };
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
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h6' component='div' justifyItems='center'>
          Accidentes e Incidentes
        </Typography>
      </Box>
      <Card sx={{ display: 'inline-block', m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data && counter(data)}
          </Typography>
          <Typography color='text.secondary'>Reportes totales</Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: 'inline-block', m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data && counter(filterByParam(data, 'Reportes pendientes'))}
          </Typography>
          <Typography color='text.secondary'>Reportes pendientes</Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: 'inline-block', m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data && counter(filterByParam(data, 'Acciones pendientes'))}
          </Typography>
          <Typography color='text.secondary'>Acciones pendientes</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export function TiposDeRiesgoOcurridos({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'injType' };
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

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data && counter(filterByParam(data, 'Sin lesiones'))}
          </Typography>
          <Typography color='text.secondary'>Sin Lesiones</Typography>
        </CardContent>
      </Card>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data && counter(filterByParam(data, 'Menor'))}
          </Typography>
          <Typography color='text.secondary'>Menor</Typography>
        </CardContent>
      </Card>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data && counter(filterByParam(data, 'Importante'))}
          </Typography>
          <Typography color='text.secondary'>Importante</Typography>
        </CardContent>
      </Card>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data && counter(filterByParam(data, 'Severo'))}
          </Typography>
          <Typography color='text.secondary'>Severo</Typography>
        </CardContent>
      </Card>
      <Card sx={{ flexBasis: 60, m: 1, minWidth: '40%' }}>
        <CardContent>
          <Typography variant='h6' component='div' sx={{ p: 'auto' }}>
            {data && counter(filterByParam(data, 'Fatal'))}
          </Typography>
          <Typography color='text.secondary'>Fatal</Typography>
        </CardContent>
      </Card>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data && counter(filterByParam(data, 'Catastrófico'))}
          </Typography>
          <Typography color='text.secondary'>Catastrófico</Typography>
        </CardContent>
      </Card>
      <Typography variant='h6' component='div' justifyItems='center'>
        Tipo de Riesgo Ocurrido
      </Typography>
    </Box>
  );
}
