import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Card, CardContent, Box, Stack, Divider } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130, editable: true },
  { field: 'lastName', headerName: 'Last Name', width: 130, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 90, editable: true },
  {
    field: 'fullName',
    headerName: 'Full Name',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const summaryCards = [
  { label: 'Total Users', value: rows.length },
  {
    label: 'Average Age',
    value: (
      rows.reduce((sum, row) => sum + (row.age || 0), 0) /
      rows.filter((row) => row.age !== null).length
    ).toFixed(1),
  },
  { label: 'Active Sessions', value: 42 },
  { label: 'Reports Generated', value: 7 },
];

const whiteTextChart = {
  '& text': { fill: '#ffffff !important' },
  '& tspan': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-tickLabel': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-label': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-line': { stroke: '#ffffff !important' },
  '& .MuiChartsAxis-tick': { stroke: '#ffffff !important' },
};

function DashboardPage() {
  return (
    <Box sx={{ p: 2, backgroundColor: '#f4f4f5', minHeight: '100vh' }}>

      {/* Page Title */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Overview
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ color: '#18181b', mt: 0.5 }}>
          Dashboard
        </Typography>
        <Typography variant="body2" sx={{ color: '#71717a', mt: 0.5 }}>
          Welcome back! Here is a summary of your system activity.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4, borderColor: '#18181b', borderWidth: 2 }} />

      {/* Summary Cards */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 5 }}>
        {summaryCards.map((card) => (
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

      {/* Performance */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Performance
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          System Performance
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 5 }}>
        <Card sx={{ flex: 1, backgroundColor: '#18181b', borderRadius: 3, boxShadow: 'none' }}>
          <CardContent>
            <Typography sx={{ color: '#a1a1aa', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>CPU Usage</Typography>
            <Typography variant="h4" sx={{ color: '#facc15', fontWeight: 700, mt: 1 }}>50%</Typography>
            <Box sx={{ mt: 2, backgroundColor: '#3f3f46', borderRadius: 2, height: 8 }}>
              <Box sx={{ width: '50%', backgroundColor: '#facc15', borderRadius: 2, height: 8 }} />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, backgroundColor: '#18181b', borderRadius: 3, boxShadow: 'none' }}>
          <CardContent>
            <Typography sx={{ color: '#a1a1aa', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Memory Usage</Typography>
            <Typography variant="h4" sx={{ color: '#facc15', fontWeight: 700, mt: 1 }}>70%</Typography>
            <Box sx={{ mt: 2, backgroundColor: '#3f3f46', borderRadius: 2, height: 8 }}>
              <Box sx={{ width: '70%', backgroundColor: '#facc15', borderRadius: 2, height: 8 }} />
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, backgroundColor: '#18181b', borderRadius: 3, boxShadow: 'none' }}>
          <CardContent>
            <Typography sx={{ color: '#a1a1aa', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Disk Usage</Typography>
            <Typography variant="h4" sx={{ color: '#facc15', fontWeight: 700, mt: 1 }}>35%</Typography>
            <Box sx={{ mt: 2, backgroundColor: '#3f3f46', borderRadius: 2, height: 8 }}>
              <Box sx={{ width: '35%', backgroundColor: '#facc15', borderRadius: 2, height: 8 }} />
            </Box>
          </CardContent>
        </Card>
      </Stack>

      <Divider sx={{ mb: 4, borderColor: '#e4e4e7' }} />

      {/* Charts */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Analytics
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          Data Visualization
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ mb: 5 }}>

        {/* Bar Chart */}
        <Box sx={{ flex: 1, backgroundColor: '#18181b', borderRadius: 3, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 1 }}>
            Quarterly Sales
          </Typography>
          {/* Custom Legend */}
          <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box sx={{ width: 12, height: 12, backgroundColor: '#facc15', borderRadius: 1 }} />
              <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>Series 1</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Box sx={{ width: 12, height: 12, backgroundColor: '#a1a1aa', borderRadius: 1 }} />
              <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>Series 2</Typography>
            </Stack>
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
            Series Distribution
          </Typography>
          {/* Custom Legend */}
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
              width={260}
              height={200}
              slotProps={{ legend: { hidden: true } }}
            />
          </Box>
        </Box>
      </Stack>

      <Divider sx={{ mb: 4, borderColor: '#e4e4e7' }} />

      {/* DataGrid */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Users
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          Users Overview
        </Typography>
      </Box>
      <Box sx={{ height: 400, width: '100%', mb: 5, borderRadius: 3, overflow: 'hidden', border: '2px solid #18181b' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5 },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#18181b',
              color: '#facc15',
              fontWeight: 700,
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: '#fafafa',
            },
            '& .MuiCheckbox-root.Mui-checked': {
              color: '#facc15',
            },
          }}
        />
      </Box>

      <Divider sx={{ mb: 4, borderColor: '#e4e4e7' }} />

      {/* Map */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Location
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b', mb: 2 }}>
          Location Map
        </Typography>
      </Box>
      <Box sx={{ height: 500, width: '100%', borderRadius: 3, overflow: 'hidden', border: '2px solid #18181b' }}>
        <MapContainer
          center={[14.604253, 120.994314]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[14.604253, 120.994314]}>
            <Popup>
              National University-Manila <br />
              <p><i>551 F Jhocson St, Sampaloc, Manila, 1008 Metro Manila</i></p>
            </Popup>
          </Marker>
        </MapContainer>
      </Box>

    </Box>
  );
}

export default DashboardPage;