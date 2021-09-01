import * as Widgets from 'components/widgets/WidgetBarrel';

export const widgetTypes = Object.keys(Widgets);

export function TypeToComponent({ filter, widgetType }) {
  const Widget = Widgets[widgetType];
  return <Widget filter={filter} />;
}
