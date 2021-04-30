


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
  { skill: 'Javascript', area: 12 },
  { skill: 'Python', area: 7 },
  { skill: 'Excel', area: 15 },
  { skill: 'Tango', area: 7 },
  { skill: 'Photoshop', area: 6 },
  { skill: 'GDS', area: 10 },
  { skill: 'SAP', area: 2 },
  { skill: 'Github', area: 30 },
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
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="skill"
          />
       
          <Title
            text="LAS HABILIDADES BLANDAS MAS BUSCADAS"
          />
        
          <Animation />
         

         <Legend/>

        </Chart>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="area"
            argumentField="skill"
          />
          <Title
            text="LAS HABILIDADES TECNICAS MAS BUSCADAS"
          />
          <Animation />
         

         <Legend/>

        </Chart>
      </Box>
    );
  }
}