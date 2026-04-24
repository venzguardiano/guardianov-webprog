import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, Box, Divider, Card, CardContent, Stack } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full Name',
    sortable: false,
    width: 200,
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

function UsersPage() {
  return (
    <Box sx={{ p: 2, backgroundColor: '#f4f4f5', minHeight: '100vh' }}>

      {/* Page Title */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          User Management
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ color: '#18181b', mt: 0.5 }}>
          Users
        </Typography>
        <Typography variant="body2" sx={{ color: '#71717a', mt: 0.5 }}>
          A complete list of all registered users in the system.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4, borderColor: '#18181b', borderWidth: 2 }} />

      {/* Summary Cards */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 5 }}>
        {[
          { label: 'Total Users', value: rows.length },
          {
            label: 'Average Age',
            value: (
              rows.reduce((sum, row) => sum + (row.age || 0), 0) /
              rows.filter((row) => row.age !== null).length
            ).toFixed(1),
          },
          {
            label: 'Youngest User',
            value: Math.min(...rows.filter((r) => r.age !== null).map((r) => r.age)),
          },
          {
            label: 'Oldest User',
            value: Math.max(...rows.filter((r) => r.age !== null).map((r) => r.age)),
          },
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

      {/* Users Table */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          All Users
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          User List
        </Typography>
      </Box>
      <Box sx={{ height: 600, width: '100%', borderRadius: 3, overflow: 'hidden', border: '2px solid #18181b' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 9 },
            },
          }}
          pageSizeOptions={[5, 9]}
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

    </Box>
  );
}

export default UsersPage;