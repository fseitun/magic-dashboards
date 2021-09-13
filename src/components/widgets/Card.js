import styled from 'styled-components';
import { useQuery } from 'react-query';
// import { mediaQueries } from '@tops/global_config';
// import { theme } from '@tops/global_config';
import theme from 'borrarConTopsComp/theme'; //cuando traiga tops borrar linea
import mediaQueries from 'borrarConTopsComp/media-queries'; //cuando traiga tops borrar linea

import { getMethod } from 'api';

const LegendNumber = ({ number, legend, fontSize, numberSize, numColor, legColor, textAlign }) => {
  const hasFontSize = fontSize !== undefined;
  const hasNumberSize = numberSize !== undefined;

  return (
    <div style={{ textAlign: textAlign !== undefined ? textAlign : 'left' }}>
      <div
        style={{
          fontSize: hasNumberSize ? numberSize : hasFontSize ? fontSize + 5 : 20,
          color: numColor !== undefined ? numColor : theme.colors.darkGray,
        }}>
        {number}
      </div>
      <div
        style={{
          fontSize: hasFontSize ? fontSize : 15,
          color: legColor !== undefined ? legColor : theme.colors.darkGray,
        }}>
        {legend}
      </div>
    </div>
  );
};

const Legend = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 15px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 0;
  //   border-bottom: 1px solid ${({ theme }) => theme.colors.accent};
  ${mediaQueries.mobile`
  padding: 0px 15px;
`}
`;

const SectionTitle = styled.div`
  color: ${({ theme }) => theme.colors.darkLilac};
  font-size: 15px;
  padding: 8px 0;
`;

const filterByParam = (arr, param) => arr.filter(obj => obj.valor === param);
const counter = arr => arr.reduce((ac, cur) => (ac += cur.count), 0);

let queryObject = {};

export function AccidentesEincidentes({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'phase' };
  const { data } = useQuery(Object.values(innerQueryObject), () =>
    getMethod('/ai/getsum', innerQueryObject)
  );
  return (
    <Section>
      <SectionTitle dashboard> {'Accidentes e incidentes'} </SectionTitle>
      <div
        style={{
          boxSizing: 'border-box',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          padding: '10px 0',
        }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <LegendNumber
                number={data && counter(data)}
                legend={'Reportes totales'}
                fontSize={17}
                numberSize={30}
                numColor={theme.colors.darkLilac}
              />
            </div>
            <div
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <div style={{ display: 'flex' }}>
                <LegendNumber
                  number={data && counter(filterByParam(data, 'Reportes Pendientes'))}
                  legend={'Reportes pendientes'}
                  fontSize={15}
                />
              </div>
              <div style={{ display: 'flex' }}>
                <LegendNumber
                  number={data && counter(filterByParam(data, 'Acciones Pendientes'))}
                  legend={'Acciones pendientes'}
                  fontSize={15}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function TiposDeRiesgoOcurridos({ filter }) {
  let innerQueryObject = { ...queryObject, ...filter, serie: 'gravity' };
  const { data } = useQuery(Object.values(innerQueryObject), () =>
    getMethod('/ai/getsum', innerQueryObject)
  );

  return (
    <div>
      <Section>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            borderLeft: '1px solid',
            borderLeftColor: theme.colors.accent,
          }}>
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}>
              <LegendNumber
                number={data && counter(filterByParam(data, 'Sin lesiones'))}
                legend={'Sin lesiones'}
                fontSize={15}
                legColor={'#a4d454'}
                textAlign={'center'}
              />
              <LegendNumber
                number={data && counter(filterByParam(data, 'Importante'))}
                legend={'Importante'}
                fontSize={15}
                legColor={'#fd9c65'}
                textAlign={'center'}
              />
              <LegendNumber
                number={data && counter(filterByParam(data, 'Fatal'))}
                legend={'Fatal'}
                fontSize={15}
                legColor={'#fd6565'}
                textAlign={'center'}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}>
              <LegendNumber
                number={data && counter(filterByParam(data, 'Menor'))}
                legend={'Menor'}
                fontSize={15}
                legColor={'#a4d454'}
                textAlign={'center'}
              />
              <LegendNumber
                number={data && counter(filterByParam(data, 'Severo'))}
                legend={'Severo'}
                fontSize={15}
                legColor={'#fd9c65'}
                textAlign={'center'}
              />
              <LegendNumber
                number={data && counter(filterByParam(data, 'Catastrófico'))}
                legend={'Catastrofico'}
                fontSize={15}
                legColor={'#fd6565'}
                textAlign={'center'}
              />
            </div>
          </div>
          <Legend>{'Tipos de riesgo ocurridos'}</Legend>
        </div>
      </Section>
    </div>
  );
}
