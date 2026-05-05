import { useRef } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { BarChart } from "@mui/x-charts/BarChart";
import { Gauge } from "@mui/x-charts/Gauge";
import { PieChart } from "@mui/x-charts/PieChart";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
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
  { label: 'Generated Reports', value: 27 },
  { label: 'Completed Reports', value: 23 },
  { label: 'Completion Rate', value: '70%' },
  { label: 'Categories', value: 4 },
];

const whiteTextChart = {
  '& text': { fill: '#ffffff !important' },
  '& tspan': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-tickLabel': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-label': { fill: '#ffffff !important' },
  '& .MuiChartsAxis-line': { stroke: '#ffffff !important' },
  '& .MuiChartsAxis-tick': { stroke: '#ffffff !important' },
};

const ReportsPage = () => {
  const printRef = useRef(null);

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank', 'width=1200,height=900');
    if (!printWindow) return;

    const headMarkup = Array.from(
      document.querySelectorAll('style, link[rel="stylesheet"]')
    ).map((node) => node.outerHTML).join('');

    const exportedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(new Date());

    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Print Report</title>
          ${headMarkup}
          <style>
            @page { size: A4; margin: 16mm; }
            * { box-sizing: border-box; }
            body {
              margin: 0;
              font-family: Arial, Helvetica, sans-serif;
              background: #f4f4f5;
              color: #18181b;
            }
            .report-shell { padding: 28px; }
            .report-header {
              margin-bottom: 24px;
              padding: 20px 28px;
              border-radius: 8px;
              background-color: #18181b;
              border-bottom: 4px solid #facc15;
            }
            .report-header h1 {
              margin: 0 0 6px;
              font-size: 24px;
              font-weight: 800;
              color: #facc15;
              letter-spacing: 1px;
            }
            .report-header p {
              margin: 0;
              font-size: 14px;
              color: #a1a1aa;
              line-height: 1.5;
            }
            .report-content .MuiCard-root {
              box-shadow: none !important;
              background-color: #18181b !important;
              border: 2px solid #facc15 !important;
              border-radius: 12px;
              break-inside: avoid;
              page-break-inside: avoid;
              margin-bottom: 16px;
            }
            .report-content .MuiCardContent-root { padding: 20px; }
            .report-content svg { max-width: 100%; }
            .report-content .MuiTypography-h6 {
              color: #facc15 !important;
              font-weight: 700;
              border-left: 4px solid #facc15;
              padding-left: 10px;
              margin-bottom: 8px;
            }
            .report-content .MuiTypography-body2 { color: #a1a1aa !important; }
            .report-content .MuiDataGrid-root {
              border: 2px solid #18181b !important;
              border-radius: 8px;
            }
            .report-content .MuiDataGrid-columnHeaders {
              background-color: #18181b !important;
              color: #facc15 !important;
              font-weight: 700;
            }
          </style>
        </head>
        <body>
          <main class="report-shell">
            <header class="report-header">
              <h1>Reports Summary</h1>
              <p>Analytics overview for generated reports, category breakdown, and completion performance.</p>
              <p>Prepared on ${exportedAt}</p>
            </header>
            <section class="report-content">
              ${printContent.outerHTML}
            </section>
          </main>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

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
          Report analytics overview showing generated reports, category breakdown, and current completion performance.
        </Typography>
      </Box>

      {/* Action Buttons */}
      <Stack direction="row" spacing={1.5} sx={{ mb: 4 }}>
        <Button variant="contained" sx={{ backgroundColor: '#facc15', color: '#18181b', fontWeight: 700, '&:hover': { backgroundColor: '#e6b800' } }}>
          Generate
        </Button>
        <Button variant="outlined" onClick={handlePrint} sx={{ borderColor: '#facc15', color: '#facc15', fontWeight: 700, '&:hover': { backgroundColor: '#facc1510' } }}>
          Export
        </Button>
        <Button variant="outlined" sx={{ borderColor: '#18181b', color: '#18181b', fontWeight: 700 }}>
          Filter
        </Button>
      </Stack>

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

      <Divider sx={{ mb: 4, borderColor: '#e4e4e7' }} />

      <Stack ref={printRef} spacing={3}>

        {/* Bar Chart */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Analytics
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
            Monthly Report Output
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: '#18181b', borderRadius: 3, p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 1 }}>
            This chart compares how many reports were generated and how many were completed across the last four months.
          </Typography>
          <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
            {[
              { label: 'Generated', color: '#facc15' },
              { label: 'Completed', color: '#a1a1aa' },
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
                { data: [18, 24, 20, 27], label: 'Generated', color: '#facc15' },
                { data: [12, 19, 17, 23], label: 'Completed', color: '#a1a1aa' },
              ]}
              height={300}
              xAxis={[{
                data: ['January', 'February', 'March', 'April'],
                scaleType: 'band',
                label: 'Months',
              }]}
              slotProps={{ legend: { hidden: true } }}
            />
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#e4e4e7' }} />

        {/* Pie + Gauge */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Breakdown
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
            Category Share and Completion Rate
          </Typography>
        </Box>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3}>
          <Box sx={{ flex: 1, backgroundColor: '#18181b', borderRadius: 3, p: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 1 }}>
              Report Category Share
            </Typography>
            <Typography variant="body2" sx={{ color: '#a1a1aa', mb: 2, fontSize: '12px' }}>
              Distribution of report requests by category for the current reporting period.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
              {[
                { label: 'Sales', color: '#facc15' },
                { label: 'Users', color: '#a1a1aa' },
                { label: 'Inventory', color: '#71717a' },
                { label: 'Finance', color: '#3f3f46' },
              ].map((item) => (
                <Stack key={item.label} direction="row" alignItems="center" spacing={0.5}>
                  <Box sx={{ width: 12, height: 12, backgroundColor: item.color, borderRadius: '50%' }} />
                  <Typography sx={{ color: '#ffffff', fontSize: '12px' }}>{item.label}</Typography>
                </Stack>
              ))}
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'center', ...whiteTextChart }}>
              <PieChart
                series={[{
                  data: [
                    { id: 0, value: 14, label: 'Sales', color: '#facc15' },
                    { id: 1, value: 30, label: 'Users', color: '#a1a1aa' },
                    { id: 2, value: 6, label: 'Inventory', color: '#71717a' },
                    { id: 3, value: 6, label: 'Finance', color: '#3f3f46' },
                  ],
                }]}
                width={200}
                height={220}
                slotProps={{ legend: { hidden: true } }}
              />
            </Box>
          </Box>

          <Box sx={{ flex: 1, backgroundColor: '#18181b', borderRadius: 3, p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="subtitle2" sx={{ color: '#ffffff', mb: 1 }}>
              Completion Rate
            </Typography>
            <Typography variant="body2" sx={{ color: '#a1a1aa', mb: 2, fontSize: '12px', textAlign: 'center' }}>
              Current percentage of reports completed on time based on the latest reporting cycle.
            </Typography>
            <Box textAlign="center">
              <Gauge width={150} height={150} value={70}
                sx={{
                  '& .MuiGauge-referenceArc': { fill: '#3f3f46' },
                  '& .MuiGauge-valueArc': { fill: '#facc15' },
                  '& .MuiGauge-valueText text': { fill: '#ffffff', fontWeight: 700 },
                }}
              />
              <Typography sx={{ color: '#a1a1aa', fontSize: '12px', mt: 1 }}>Completion Rate</Typography>
            </Box>
          </Box>
        </Stack>

        <Divider sx={{ borderColor: '#e4e4e7' }} />

        {/* DataGrid */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            Data
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
            Report Data
          </Typography>
        </Box>
        <Box sx={{ height: 400, width: '100%', borderRadius: 3, overflow: 'hidden', border: '2px solid #18181b' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            experimentalFeatures={{ newEditingApi: true }}
            initialState={{
              pagination: { paginationModel: { pageSize: 5 } },
            }}
            pageSizeOptions={[5, 10]}
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
              '& .MuiDataGrid-row:hover': { backgroundColor: '#fafafa' },
              '& .MuiCheckbox-root.Mui-checked': { color: '#facc15' },
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default ReportsPage;