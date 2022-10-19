import React from 'react';
import styled from '@emotion/styled';
import { labels, datas } from '../../../fake/chart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
type Props = {};
const Container = styled.div`
  padding: 24px 16px;
  height: 594px;
  border: 1px solid rgba(38, 56, 150, 0.14);
  box-shadow: 0px 4px 12px rgba(34, 41, 47, 0.12);
  border-radius: 10px;
  & canvas {
    height: 549px !important;
  }
`;

const Chart = (props: Props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        align: 'start' as 'start',
        text: 'Dữ liệu tiêm theo ngày',
        color: '#000',
        font: {
          size: 20,
          weight: 'bold',
          family: 'roboto'
        }
      }
    },
    elements: {
      point: {
        borderWidth: 0
      }
    }
  };
  const data = {
    labels,
    datasets: [
      {
        label: 'Đã tiêm',
        data: datas,
        backgroundColor: '#281BA4', //red:#EE0033 blue: #281BA4
        borderColor: '#281BA4',
        with: 0,
        pointBackgroundColor: '#EE0033'
      }
    ]
  };

  const chartStyle = {
    paddingTop: '34px'
  };
  return (
    <div style={chartStyle}>
      <Container>
        <Line options={options} data={data} />
      </Container>
    </div>
  );
};
export { Chart };
