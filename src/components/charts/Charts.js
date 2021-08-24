import { Funnel } from 'components/charts/Funnel';
import { Area } from 'components/charts/Area';
import * as Doughnut from 'components/charts/Doughnut';

export const chartTypes = ['Funnel', 'Doughnut', 'Area'];

export function ChartTypeToComponent(chartType) {
  const charts = {
    Funnel: <Funnel />,
    Area: <Area />,
    Doughnut: <Doughnut.AccidentesEIncidentes />,
  };
  return <>{charts[chartType]}</>;
}
