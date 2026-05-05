import { useState } from 'react';
import {
  Alert,
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from '../../data/users.json?raw';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase()
          : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email: String(user.email ?? '').trim().toLowerCase(),
        role: roles.includes(String(user.role ?? '').trim().toLowerCase())
          ? String(user.role ?? '').trim().toLowerCase()
          : 'editor',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? ''),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch {
    return {
      users: [],
      error: 'Unable to read users from src/data/users.json.',
    };
  }
};

const seed = loadUsers();

const UsersPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState({ ...blankForm });
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const filteredUsers = users.filter((user) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      !search ||
      user.firstName.toLowerCase().includes(searchLower) ||
      user.lastName.toLowerCase().includes(searchLower) ||
      user.email.toLowerCase().includes(searchLower) ||
      user.username.toLowerCase().includes(searchLower);
    const matchesRole = !filterRole || user.role === filterRole;
    const matchesGender = !filterGender || user.gender === filterGender;
    const matchesStatus =
      !filterStatus ||
      (filterStatus === 'active' ? user.isActive : !user.isActive);
    return matchesSearch && matchesRole && matchesGender && matchesStatus;
  });

  const resetForm = () => { setForm({ ...blankForm }); setErrors([]); };

  const openModal = (user) => {
    setModal({ open: true, id: user?.id ?? null });
    setForm(user ? { ...blankForm, ...user } : { ...blankForm });
    setErrors([]);
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setShowPassword(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const nextErrors = {};
    const mustEmail = form.email.trim().toLowerCase();
    const username = form.username.trim().toLowerCase();

    [
      ['firstName', 'First name'],
      ['lastName', 'Last name'],
      ['age', 'Age'],
      ['gender', 'Gender'],
      ['contactNumber', 'Contact number'],
      ['email', 'Email'],
      ['role', 'Role'],
      ['username', 'Username'],
      ['password', 'Password'],
      ['address', 'Address'],
    ].forEach(([key, label]) => {
      if (!String(form[key]).trim()) nextErrors[key] = `${label} is required.`;
    });

    if (form.age && !/^\d+$/.test(form.age.trim()))
      nextErrors.age = 'Age must be a number only.';
    if (form.contactNumber && !/^\d{11}$/.test(form.contactNumber.trim()))
      nextErrors.contactNumber = 'Contact number must be exactly 11 digits.';
    if (form.password && form.password.length < 8)
      nextErrors.password = 'Password must be at least 8 characters.';
    if (form.username && /\s/.test(form.username))
      nextErrors.username = 'Username must not contain spaces.';
    if (mustEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mustEmail))
      nextErrors.email = 'Enter a valid email address.';
    if (mustEmail && users.some((user) => user.id !== modal.id && user.email === mustEmail))
      nextErrors.email = 'Email address already exists.';
    if (username && users.some((u) => u.id !== modal.id && u.username === username))
      nextErrors.username = 'Username already exists.';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }

    const newUser = {
      firstName: form.firstName.trim(),
      lastName: form.lastName.trim(),
      age: form.age.trim(),
      gender: form.gender.trim().toLowerCase(),
      contactNumber: form.contactNumber.trim(),
      email: form.email.trim().toLowerCase(),
      role: form.role.trim().toLowerCase(),
      username: form.username.trim().toLowerCase(),
      password: form.password,
      address: form.address.trim(),
      isActive: form.isActive,
    };

    setUsers((prev) =>
      modal.id
        ? prev.map((user) => user.id === modal.id ? { ...user, ...newUser } : user)
        : [...prev, { id: prev.reduce((max, user) => Math.max(max, Number(user.id) || 0), 0) + 1, ...newUser }]
    );
    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) => prev.map((user) => user.id === id ? { ...user, isActive: !user.isActive } : user));
  };

  const fieldProps = (name, label, extra = {}) => ({
    name, label, value: form[name], onChange: handleChange,
    error: Boolean(errors[name]), helperText: errors[name], fullWidth: true, ...extra,
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'fullName', headerName: 'Full Name', width: 170, valueGetter: (_, row) => `${row.firstName} ${row.lastName}`.trim() },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'age', headerName: 'Age', width: 80 },
    { field: 'gender', headerName: 'Gender', minWidth: 110, valueGetter: (_, row) => labelize(row.gender) },
    { field: 'contactNumber', headerName: 'Contact Number', minWidth: 150 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 150 },
    { field: 'role', headerName: 'Role', minWidth: 170, valueGetter: (_, row) => labelize(row.role) },
    {
      field: 'isActive', headerName: 'Status', minWidth: 110, sortable: false,
      renderCell: (({ row }) => (
        <Chip size="small" variant="outlined" color={row.isActive ? 'success' : 'default'} label={row.isActive ? 'Active' : 'Inactive'} />
      )),
    },
    {
      field: 'actions', headerName: 'Actions', minWidth: 220, sortable: false, filterable: false,
      renderCell: (({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.3 }}>
          <Button size="small" variant="contained" onClick={() => openModal(row)}
            sx={{ backgroundColor: '#facc15', color: '#18181b', fontWeight: 700, '&:hover': { backgroundColor: '#e6b800' } }}>
            Edit
          </Button>
          <Button size="small" variant="outlined" color={row.isActive ? 'warning' : 'success'} onClick={() => toggleStatus(row.id)}>
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      )),
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0, p: 2, backgroundColor: '#f4f4f5', minHeight: '100vh' }}>

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
          { label: 'Total Users', value: users.length },
          { label: 'Active Users', value: users.filter(u => u.isActive).length },
          { label: 'Inactive Users', value: users.filter(u => !u.isActive).length },
          { label: 'Admin Users', value: users.filter(u => u.role === 'admin').length },
        ].map((card) => (
          <Box key={card.label} sx={{ flex: 1, borderTop: '4px solid #facc15', borderRadius: 3, backgroundColor: '#18181b', p: 2 }}>
            <Typography variant="body2" sx={{ color: '#a1a1aa', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '11px', fontWeight: 700 }}>
              {card.label}
            </Typography>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#facc15', mt: 1 }}>
              {card.value}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ mb: 4, borderColor: '#e4e4e7' }} />

      {/* Search and Filters */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Filters
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          Search and Filter Users
        </Typography>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 3 }}>
        <TextField
          placeholder="Search by name, email or username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ flex: 2, backgroundColor: '#fff', borderRadius: 2 }}
        />
        <TextField select label="Role" value={filterRole} onChange={(e) => setFilterRole(e.target.value)} size="small" sx={{ flex: 1, backgroundColor: '#fff', borderRadius: 2 }}>
          <MenuItem value="">All Roles</MenuItem>
          {roles.map((role) => <MenuItem key={role} value={role}>{labelize(role)}</MenuItem>)}
        </TextField>
        <TextField select label="Gender" value={filterGender} onChange={(e) => setFilterGender(e.target.value)} size="small" sx={{ flex: 1, backgroundColor: '#fff', borderRadius: 2 }}>
          <MenuItem value="">All Genders</MenuItem>
          {genders.map((gender) => <MenuItem key={gender} value={gender}>{labelize(gender)}</MenuItem>)}
        </TextField>
        <TextField select label="Status" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} size="small" sx={{ flex: 1, backgroundColor: '#fff', borderRadius: 2 }}>
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
        </TextField>
        <Button variant="outlined" onClick={() => { setSearch(''); setFilterRole(''); setFilterGender(''); setFilterStatus(''); }}
          sx={{ borderColor: '#18181b', color: '#18181b', fontWeight: 700 }}>
          Clear
        </Button>
      </Stack>

      {/* Add User Button */}
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" onClick={() => openModal()}
          sx={{ backgroundColor: '#facc15', color: '#18181b', fontWeight: 700, '&:hover': { backgroundColor: '#e6b800' } }}>
          Add User
        </Button>
      </Box>

      {seed.error ? <Alert severity="error" sx={{ mb: 2 }}>{seed.error}</Alert> : null}

      {/* Users Table */}
      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          All Users
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          User List
        </Typography>
      </Box>
      <Paper sx={{ minWidth: 0, overflow: 'hidden', border: '2px solid #18181b', borderRadius: 3 }}>
        {filteredUsers.length ? (
          <Box sx={{ height: 460, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{ pagination: { paginationModel: { pageSize: 5, page: 0 } } }}
              sx={{
                minWidth: 0,
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
                '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': { outline: 'none' },
              }}
            />
          </Box>
        ) : (
          <Alert severity="info">No users found. Try adjusting your search or filters.</Alert>
        )}
      </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle sx={{ backgroundColor: '#18181b', color: '#facc15', fontWeight: 700 }}>
            {modal.id ? 'Edit User' : 'Add User'}
          </DialogTitle>
          <DialogContent dividers sx={{ pt: 2 }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('age', 'Age')} />
                <TextField {...fieldProps('gender', 'Gender', { select: true })}>
                  {genders.map((gender) => <MenuItem key={gender} value={gender}>{labelize(gender)}</MenuItem>)}
                </TextField>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address', { type: 'email' })} />
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('role', 'Role', { select: true })}>
                  {roles.map((role) => <MenuItem key={role} value={role}>{labelize(role)}</MenuItem>)}
                </TextField>
                <TextField {...fieldProps('username', 'Username')} />
              </Stack>
              <TextField
                {...fieldProps('password', 'Password')}
                type={showPassword ? 'text' : 'password'}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}
                          onMouseDown={(event) => event.preventDefault()}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField {...fieldProps('address', 'Address', { multiline: true, rows: 3 })} />
              <FormControlLabel
                control={
                  <Switch name="isActive" checked={form.isActive} onChange={handleChange}
                    sx={{ '& .MuiSwitch-switchBase.Mui-checked': { color: '#facc15' }, '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#facc15' } }}
                  />
                }
                label={form.isActive ? 'User status: Active' : 'User status: Inactive'}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ pt: 3, py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained"
              sx={{ backgroundColor: '#facc15', color: '#18181b', fontWeight: 700, '&:hover': { backgroundColor: '#e6b800' } }}>
              {modal.id ? 'Update User' : 'Save User'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default UsersPage;