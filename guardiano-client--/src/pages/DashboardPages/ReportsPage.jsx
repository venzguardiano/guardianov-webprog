import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { Typography, Card, CardContent, Box, Stack, Divider } from '@mui/material';

const whiteTextChart = {
  '& text': { fill: '#ffffff !important' },
  '& tspan': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-tickLabel': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-label': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-line': { stroke: '#ffffff !important' },
  '& .MuiChartsAxis-tick': { stroke: '#ffffff !important' },
};

function ReportsPage() {
  return (
    <Box sx={{ p: 2, backgroundColor: '#f4f4f5', minHeight: '100vh' }}>

      {/* Page Title */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Data Visualization
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ color: '#18181b', mt: 0.5 }}>
          Reports
        </Typography>
        <Typography variant="body2" sx={{ color: '#71717a', mt: 0.5 }}>
          A detailed view of your data through charts and visual reports.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4, borderColor: '#18181b', borderWidth: 2 }} />

      {/* Summary Cards */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 5 }}>
        {[
          { label: 'Total Revenue', value: '₱48,200' },
          { label: 'Total Expenses', value: '₱21,500' },
          { label: 'Net Profit', value: '₱26,700' },
          { label: 'Growth Rate', value: '+12.4%' },
        ].map((card) => (
          <Card key={card.label} sx={{
            flex: 1,
            borderTop: '4px solid #facc15',
            borderRadius: 3,
            backgroundColor: '#18181b',
            boxShadow: 'none',
          }}>
            <CardContent>
              <Typography variant="body2" sx={{ color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '11px', fontWeight: 700 }}>
                {card.label}
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ color: '#facc15', mt: 1 }}>
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Divider sx={{ mb: 4, borderColor: '#e4e4e7' }} />

      {/* Line Chart - MUI Sample Data */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Trends
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          Line Chart
        </Typography>
      </Box>
      <Box sx={{ backgroundColor: '#18181b', borderRadius: 3, p: 2, mb: 5 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
          {[
            { label: 'Series 1', color: '#facc15' },
            { label: 'Series 2', color: '#a1a1aa' },
            { label: 'Series 3', color: '#71717a' },
          ].map((item) => (
            <Stack key={item.label} direction="row" alignItems="center" spacing={0.5}>
              <Box sx={{ width: 12, height: 12, backgroundColor: item.color, borderRadius: 1 }} />
              <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>{item.label}</Typography>
            </Stack>
          ))}
        </Stack>
        <Box sx={whiteTextChart}>
          <LineChart
            series={[
              { data: [2, 5.5, 2, 8.5, 1.5, 5], label: 'Series 1', color: '#facc15' },
              { data: [null, null, null, null, 5.5, 2], label: 'Series 2', color: '#a1a1aa' },
              { data: [7, 8, 5, 4, null, null], label: 'Series 3', color: '#71717a' },
            ]}
            height={300}
            slotProps={{ legend: { hidden: true } }}
          />
        </Box>
      </Box>

      <Divider sx={{ mb: 4, borderColor: '#e4e4e7' }} />

      {/* Bar + Pie Charts - MUI Sample Data */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Breakdown
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          Bar and Pie Charts
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ mb: 5 }}>

        {/* Bar Chart */}
        <Box sx={{ flex: 1, backgroundColor: '#18181b', borderRadius: 3, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 1 }}>
            Bar Chart
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
            {[
              { label: 'Series 1', color: '#facc15' },
              { label: 'Series 2', color: '#a1a1aa' },
            ].map((item) => (
              <Stack key={item.label} direction="row" alignItems="center" spacing={0.5}>
                <Box sx={{ width: 12, height: 12, backgroundColor: item.color, borderRadius: 1 }} />
                <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>{item.label}</Typography>
              </Stack>
            ))}
          </Stack>
          <Box sx={whiteTextChart}>
            <BarChart
              series={[
                { data: [35, 44, 24, 34], label: 'Series 1', color: '#facc15' },
                { data: [51, 6, 49, 30], label: 'Series 2', color: '#a1a1aa' },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band', label: 'Quarters' }]}
              slotProps={{ legend: { hidden: true } }}
            />
          </Box>
        </Box>

        {/* Pie Chart */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#18181b', borderRadius: 3, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 1 }}>
            Pie Chart
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
            {[
              { label: 'Series A', color: '#facc15' },
              { label: 'Series B', color: '#a1a1aa' },
              { label: 'Series C', color: '#71717a' },
            ].map((item) => (
              <Stack key={item.label} direction="row" alignItems="center" spacing={0.5}>
                <Box sx={{ width: 12, height: 12, backgroundColor: item.color, borderRadius: '50%' }} />
                <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>{item.label}</Typography>
              </Stack>
            ))}
          </Stack>
          <Box sx={whiteTextChart}>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: 'Series A', color: '#facc15' },
                    { id: 1, value: 15, label: 'Series B', color: '#a1a1aa' },
                    { id: 2, value: 20, label: 'Series C', color: '#71717a' },
                  ],
                },
              ]}
              width={280}
              height={220}
              slotProps={{ legend: { hidden: true } }}
            />
          </Box>
        </Box>
      </Stack>

      <Divider sx={{ mb: 4, borderColor: '#e4e4e7' }} />

      {/* Progress */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Progress
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          Department Performance
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 5 }}>
        {[
          { label: 'Sales', value: 82 },
          { label: 'Marketing', value: 65 },
          { label: 'Engineering', value: 91 },
          { label: 'Support', value: 74 },
        ].map((item) => (
          <Card key={item.label} sx={{ flex: 1, backgroundColor: '#18181b', borderRadius: 3, boxShadow: 'none' }}>
            <CardContent>
              <Typography sx={{ color: '#a1a1aa', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {item.label}
              </Typography>
              <Typography variant="h4" sx={{ color: '#facc15', fontWeight: 700, mt: 1 }}>
                {item.value}%
              </Typography>
              <Box sx={{ mt: 2, backgroundColor: '#3f3f46', borderRadius: 2, height: 8 }}>
                <Box sx={{ width: `${item.value}%`, backgroundColor: '#facc15', borderRadius: 2, height: 8 }} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>

    </Box>
  );
}

export default ReportsPage;