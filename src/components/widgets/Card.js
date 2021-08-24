import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export function AccidentesEincidentes() {
  const data = { reportesTotales: 200, reportesPendientes: 68, accionesPendientes: 38 };
  return (
    <>
      <Card sx={{ display: 'inline-block', maxWidth: 300, justifyContent: 'center', m: 1 }}>
        <CardContent justifyContent='center'>
          <Typography variant='h5' component='div'>
            {data.reportesTotales}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Reportes totales
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: 'inline-block', maxWidth: 300, justifyContent: 'center', m: 1 }}>
        <CardContent justifyContent='center'>
          <Typography variant='h5' component='div'>
            {data.reportesPendientes}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Reportes pendientes
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ display: 'inline-block', maxWidth: 300, justifyContent: 'center', m: 1 }}>
        <CardContent justifyContent='center'>
          <Typography variant='h5' component='div'>
            {data.accionesPendientes}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            Acciones pendientes
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
