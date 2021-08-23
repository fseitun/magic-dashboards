import { Funnel } from 'charts/Funnel';
import { Area } from 'charts/Area';

export const chartTypes = ['Funnel', 'Area'];

export function ChartTypeToComponent(chartType) {
  const charts = {
    Funnel: <Funnel />,
    Area: <Area />,
  };
  return <>{charts[chartType]}</>;
}
