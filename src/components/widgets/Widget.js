import { Funnel } from 'components/widgets/Funnel';
import { Area } from 'components/widgets/Area';
import * as Pie from 'components/widgets/Pie';
import * as Card from 'components/widgets/Card';

export const chartTypes = ['Funnel', 'Pie', 'Area', 'Card'];

export function Widget(chartType) {
  const charts = {
    Funnel: <Funnel />,
    Area: <Area />,
    Pie: <Pie.TiposDeAccidentesOcurridos />,
    Card: <Card.AccidentesEincidentes />,
  };
  return <>{charts[chartType]}</>;
}
