


import * as React from 'react';
import {Box} from '@material-ui/core/';

import {
  Chart,
  Title,
  PieSeries,
  Legend
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { skill: 'Excel', area: 500 },
  { skill: 'React', area: 334 },
  { skill: 'Office', area: 1000 },
  { skill: 'Internet', area: 68 },
  { skill: 'Planos', area: 45 },
  { skill: 'Estructura', area: 29 },
  { skill: 'Python', area: 27 },
  { skill: 'HTML', area: 26 },
];
const softSkills = [
  { skill: 'Oratoria', area: 30 },
  { skill: 'SCRUM', area: 12},
  { skill: 'Liderazgo', area: 10 },
  { skill: 'Creatividad', area: 7 },
  { skill: 'Compromiso', area: 15 },
  
];

export default class ChartGraphics extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Box style={{ backgroundColor:"transparent" , width:"1000px",display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
        <Chart style={{ width:"45%"}}
          data={softSkills}
        >
          <PieSeries 
            valueField="area"
            argumentField="skill"
          />
       
          <Title
            text="HABILIDADES BLANDAS "
          />
        
          <Animation />
         

         <Legend/>

        </Chart>
        <Chart style={{ marginLeft:"10%",width:"45%"}}
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="skill"
          />
          <Title
            text="HABILIDADES TECNICAS"
          />
          <Animation />
         

         <Legend/>

        </Chart>
      </Box>
    );
  }
}