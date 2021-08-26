import { Card, Box, Typography, CardContent } from '@material-ui/core';

export function AccidentesEincidentes() {
  const data = { reportesTotales: 200, reportesPendientes: 68, accionesPendientes: 38 };
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
            {data.reportesTotales}
          </Typography>
          <Typography color='text.secondary'>Reportes totales</Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: 'inline-block', m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data.reportesPendientes}
          </Typography>
          <Typography color='text.secondary'>Reportes pendientes</Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: 'inline-block', m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data.accionesPendientes}
          </Typography>
          <Typography color='text.secondary'>Acciones pendientes</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export function TiposDeRiesgoOcurridos() {
  const data = { sinLesiones: 30, menor: 6, importante: 3, severo: 10, fatal: 8, catastrofico: 29 };
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data.sinLesiones}
          </Typography>
          <Typography color='text.secondary'>Sin Lesiones</Typography>
        </CardContent>
      </Card>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data.menor}
          </Typography>
          <Typography color='text.secondary'>Menor</Typography>
        </CardContent>
      </Card>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data.importante}
          </Typography>
          <Typography color='text.secondary'>Importante</Typography>
        </CardContent>
      </Card>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data.severo}
          </Typography>
          <Typography color='text.secondary'>Severo</Typography>
        </CardContent>
      </Card>
      <Card sx={{ flexBasis: 60, m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data.fatal}
          </Typography>
          <Typography color='text.secondary'>Fatal</Typography>
        </CardContent>
      </Card>
      <Card sx={{ m: 1 }}>
        <CardContent>
          <Typography variant='h6' component='div'>
            {data.catastrofico}
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
