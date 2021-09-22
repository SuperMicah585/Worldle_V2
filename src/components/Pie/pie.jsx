import { PieChart } from 'react-minimal-pie-chart';
import Paper from "@material-ui/core/Paper";
export default function DataGridDemo() {
  return (
    <Paper>
<PieChart
  data={[
    { title: 'One', value: 10, color: '#00FFFF' },
    { title: 'Two', value: 15, color: '#7393B3' },
    { title: 'Three', value: 20, color:'#89CFF0' },
  ]}
/>
</Paper>
);
}
