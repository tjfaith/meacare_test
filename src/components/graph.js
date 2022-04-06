import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
    { argument: 'Jan', value: 10 },
    { argument: 'Feb', value: 30 },
    { argument: 'Mar', value: 35 },
    { argument: 'Apr', value: 38 },
    { argument: 'May', value: 18 },
    { argument: 'Jun', value: 30 },
    { argument: 'Jul', value: 41 },
    { argument: 'Aug', value: 32 },
  ];

const GraphComponent = () => {
    return ( 
    <Chart height={250}
      data={data}
    >
      <ArgumentAxis />
      <ValueAxis >
      </ValueAxis> 

      <LineSeries valueField="value" argumentField="argument" />
    </Chart>
     );
}
 
export default GraphComponent;
