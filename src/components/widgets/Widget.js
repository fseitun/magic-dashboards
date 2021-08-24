import { Funnel } from 'components/widgets/Funnel';
import { Area } from 'components/widgets/Area';
import * as Pie from 'components/widgets/Pie';

export const chartTypes = ['Funnel', 'Pie', 'Area'];

export function Widget(chartType) {
  const charts = {
    Funnel: <Funnel />,
    Area: <Area />,
    Pie: <Pie.TiposDeAccidentesOcurridos />,
  };
  return <>{charts[chartType]}</>;
}
