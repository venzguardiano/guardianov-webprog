import { useEffect, useState } from 'react';
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
  MenuItem,
  Paper,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { fetchArticles, createArticle, updateArticle, deleteArticle } from '../../services/ArticleService';

const categories = ['technology', 'sports', 'business', 'lifestyle'];

const blankForm = {
  title: '',
  author: '',
  category: '',
  description: '',
  content: '',
  isPublished: true,
};

const labelize = (value) =>
  value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : '';

const DashArticleListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [articles, setArticles] = useState([]);
  const [modal, setModal] = useState({ open: false, id: null });
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ ...blankForm });
  const [errors, setErrors] = useState({});
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  // Fetch articles from API
  useEffect(() => {
    const loadArticles = async () => {
      try {
        const { data } = await fetchArticles();
        setArticles(data.articles.map((article) => ({ ...article, id: article._id })));
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };
    loadArticles();
  }, []);

  const filteredArticles = articles.filter((article) => {
    const searchLower = search.toLowerCase();

    const matchesSearch =
      !search ||
      article.title?.toLowerCase().includes(searchLower) ||
      article.author?.toLowerCase().includes(searchLower) ||
      article.description?.toLowerCase().includes(searchLower);

    const matchesCategory =
      !filterCategory || article.category === filterCategory;

    const matchesStatus =
      !filterStatus ||
      (filterStatus === 'published'
        ? article.isPublished
        : !article.isPublished);

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (article) => {
    setModal({ open: true, id: article?._id ?? null });
    setIsEditing(!!article?._id);
    setForm(article ? { ...blankForm, ...article, content: Array.isArray(article.content) ? article.content.join('\n') : article.content } : { ...blankForm });
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setIsEditing(false);
    resetForm();
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.title.trim()) nextErrors.title = 'Title is required.';
    if (!form.author.trim()) nextErrors.author = 'Author is required.';
    if (!form.category.trim()) nextErrors.category = 'Category is required.';
    if (!form.description.trim()) nextErrors.description = 'Description is required.';
    if (!form.content.trim()) nextErrors.content = 'Content is required.';

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return; }

    const newArticle = {
      name: form.title.toLowerCase().replace(/\s+/g, '-'),
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category.trim().toLowerCase(),
      description: form.description.trim(),
      content: [form.content.trim()],
      isPublished: form.isPublished,
    };

    try {
      if (isEditing) {
        await updateArticle(modal.id, newArticle);
        setArticles((prev) =>
          prev.map((article) =>
            article._id === modal.id ? { ...article, ...newArticle } : article
          )
        );
      } else {
        const { data } = await createArticle(newArticle);
        setArticles((prev) => [...prev, { ...data, id: data._id }]);
      }
      closeModal();
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  const toggleStatus = async (id, isPublished) => {
    try {
      await updateArticle(id, { isPublished: !isPublished });
      setArticles((prev) =>
        prev.map((article) =>
          article._id === id ? { ...article, isPublished: !isPublished } : article
        )
      );
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name],
    fullWidth: true,
    ...extra,
  });

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', flex: 1, minWidth: 220 },
    { field: 'author', headerName: 'Author', minWidth: 160 },
    {
      field: 'category',
      headerName: 'Category',
      minWidth: 150,
      valueGetter: (_, row) => labelize(row.category),
    },
    {
      field: 'isPublished',
      headerName: 'Status',
      minWidth: 130,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          variant="outlined"
          color={row.isPublished ? 'success' : 'default'}
          label={row.isPublished ? 'Published' : 'Draft'}
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      minWidth: 240,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.3 }}>
          <Button
            size="small"
            variant="contained"
            onClick={() => openModal(row)}
            sx={{ backgroundColor: '#facc15', color: '#18181b', fontWeight: 700, '&:hover': { backgroundColor: '#e6b800' } }}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="outlined"
            color={row.isPublished ? 'warning' : 'success'}
            onClick={() => toggleStatus(row._id, row.isPublished)}
          >
            {row.isPublished ? 'Unpublish' : 'Publish'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: '100%', minWidth: 0, p: 2, backgroundColor: '#f4f4f5', minHeight: '100vh' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Article Management
        </Typography>
        <Typography variant="h4" fontWeight="bold" sx={{ color: '#18181b', mt: 0.5 }}>
          Dashboard Articles
        </Typography>
        <Typography variant="body2" sx={{ color: '#71717a', mt: 0.5 }}>
          Manage and publish all articles from the dashboard.
        </Typography>
      </Box>

      <Divider sx={{ mb: 4, borderColor: '#18181b', borderWidth: 2 }} />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 5 }}>
        {[
          { label: 'Total Articles', value: articles.length },
          { label: 'Published', value: articles.filter((a) => a.isPublished).length },
          { label: 'Drafts', value: articles.filter((a) => !a.isPublished).length },
          { label: 'Categories', value: categories.length },
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

      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Filters
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          Search and Filter Articles
        </Typography>
      </Box>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ mb: 3 }}>
        <TextField
          placeholder="Search by title, author or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="small"
          sx={{ flex: 2, backgroundColor: '#fff', borderRadius: 2 }}
        />
        <TextField select label="Category" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} size="small" sx={{ flex: 1, backgroundColor: '#fff', borderRadius: 2 }}>
          <MenuItem value="">All Categories</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>{labelize(category)}</MenuItem>
          ))}
        </TextField>
        <TextField select label="Status" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} size="small" sx={{ flex: 1, backgroundColor: '#fff', borderRadius: 2 }}>
          <MenuItem value="">All Status</MenuItem>
          <MenuItem value="published">Published</MenuItem>
          <MenuItem value="draft">Draft</MenuItem>
        </TextField>
        <Button variant="outlined" onClick={() => { setSearch(''); setFilterCategory(''); setFilterStatus(''); }}
          sx={{ borderColor: '#18181b', color: '#18181b', fontWeight: 700 }}>
          Clear
        </Button>
      </Stack>

      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" onClick={() => openModal()}
          sx={{ backgroundColor: '#facc15', color: '#18181b', fontWeight: 700, '&:hover': { backgroundColor: '#e6b800' } }}>
          Add Article
        </Button>
      </Box>

      <Box sx={{ mb: 1 }}>
        <Typography variant="caption" sx={{ color: '#facc15', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          All Articles
        </Typography>
        <Typography variant="h6" fontWeight="bold" sx={{ color: '#18181b' }}>
          Article List
        </Typography>
      </Box>

      <Paper sx={{ minWidth: 0, overflow: 'hidden', border: '2px solid #18181b', borderRadius: 3 }}>
        {filteredArticles.length ? (
          <Box sx={{ height: 460, width: '100%', minWidth: 0 }}>
            <DataGrid
              rows={filteredArticles}
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
                '& .MuiDataGrid-cell, & .MuiDataGrid-columnHeader': { outline: 'none' },
              }}
            />
          </Box>
        ) : (
          <Alert severity="info">No articles found. Try adjusting your search or filters.</Alert>
        )}
      </Paper>

      <Dialog open={modal.open} onClose={closeModal} fullWidth fullScreen={isMobile} maxWidth="md">
        <Box component="form" onSubmit={handleSubmit}>
          <DialogTitle sx={{ backgroundColor: '#18181b', color: '#facc15', fontWeight: 700 }}>
            {modal.id ? 'Edit Article' : 'Add Article'}
          </DialogTitle>
          <DialogContent dividers sx={{ pt: 2 }}>
            <Stack spacing={2} sx={{ pt: 1 }}>
              <TextField {...fieldProps('title', 'Article Title')} />
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <TextField {...fieldProps('author', 'Author')} />
                <TextField {...fieldProps('category', 'Category', { select: true })}>
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>{labelize(category)}</MenuItem>
                  ))}
                </TextField>
              </Stack>
              <TextField {...fieldProps('description', 'Description', { multiline: true, rows: 3 })} />
              <TextField {...fieldProps('content', 'Content', { multiline: true, rows: 5 })} />
              <FormControlLabel
                control={
                  <Switch
                    name="isPublished"
                    checked={form.isPublished}
                    onChange={handleChange}
                    sx={{
                      '& .MuiSwitch-switchBase.Mui-checked': { color: '#facc15' },
                      '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': { backgroundColor: '#facc15' },
                    }}
                  />
                }
                label={form.isPublished ? 'Article status: Published' : 'Article status: Draft'}
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ pt: 3, py: 2 }}>
            <Button onClick={closeModal}>Cancel</Button>
            <Button type="submit" variant="contained"
              sx={{ backgroundColor: '#facc15', color: '#18181b', fontWeight: 700, '&:hover': { backgroundColor: '#e6b800' } }}>
              {modal.id ? 'Update Article' : 'Save Article'}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;