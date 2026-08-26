import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

// Create Axios Instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 12000,
});

// Request Interceptor: Attach JWT Token
api.interceptors.request.use(
  (config) => {
    try {
      const user = JSON.parse(localStorage.getItem('pathseeker_user') || 'null');
      if (user && user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    } catch {
      // ignore
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle Global Auth Errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Unauthorized: clear stale credentials
      localStorage.removeItem('pathseeker_user');
      window.dispatchEvent(new Event('authChange'));
    }
    return Promise.reject(error);
  }
);

// ========================================================
// AUTHENTICATION APIS
// ========================================================
export const authApi = {
  login: async (credentials) => {
    const res = await api.post('/auth/login', credentials);
    return res.data;
  },
  register: async (userData) => {
    const res = await api.post('/auth/register', userData);
    return res.data;
  },
  getMe: async () => {
    const res = await api.get('/auth/me');
    return res.data;
  },
};

// ========================================================
// CAREERS APIS
// ========================================================
export const careersApi = {
  getAll: async (params = {}) => {
    const res = await api.get('/careers', { params });
    return res.data;
  },
  getById: async (id) => {
    const res = await api.get(`/careers/${id}`);
    return res.data;
  },
  create: async (data) => {
    const res = await api.post('/careers', data);
    return res.data;
  },
  update: async (id, data) => {
    const res = await api.put(`/careers/${id}`, data);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/careers/${id}`);
    return res.data;
  },
};

// ========================================================
// AI QUIZ APIS
// ========================================================
export const quizApi = {
  evaluate: async (answers, persona) => {
    const res = await api.post('/quiz/evaluate', { answers, persona });
    return res.data;
  },
  getQuestions: async () => {
    const res = await api.get('/quiz/questions');
    return res.data;
  },
  getResultById: async (id) => {
    const res = await api.get(`/quiz/results/${id}`);
    return res.data;
  },
};

// ========================================================
// CANDIDATE USER & DASHBOARD APIS
// ========================================================
export const userApi = {
  getDashboard: async () => {
    const res = await api.get('/user/dashboard');
    return res.data;
  },
  toggleTask: async (taskId) => {
    const res = await api.put(`/user/tasks/${taskId}`);
    return res.data;
  },
  addTask: async (taskData) => {
    const res = await api.post('/user/tasks', taskData);
    return res.data;
  },
  getBookmarks: async () => {
    const res = await api.get('/user/bookmarks');
    return res.data;
  },
  toggleBookmark: async (itemType, itemId) => {
    const res = await api.post('/user/bookmarks', { itemType, itemId });
    return res.data;
  },
};

// ========================================================
// SUCCESS STORIES APIS
// ========================================================
export const storiesApi = {
  getAll: async (params = {}) => {
    const res = await api.get('/stories', { params });
    return res.data;
  },
  getMyStories: async (params = {}) => {
    const res = await api.get('/stories/my-stories', { params });
    return res.data;
  },
  getById: async (id) => {
    const res = await api.get(`/stories/${id}`);
    return res.data;
  },
  submit: async (storyData) => {
    const res = await api.post('/stories', storyData);
    return res.data;
  },
  update: async (id, storyData) => {
    const res = await api.put(`/stories/${id}`, storyData);
    return res.data;
  },
  like: async (id) => {
    const res = await api.post(`/stories/${id}/like`);
    return res.data;
  },
  delete: async (id) => {
    const res = await api.delete(`/stories/${id}`);
    return res.data;
  },
  updateStatus: async (id, status) => {
    const res = await api.put(`/admin/stories/${id}`, { status });
    return res.data;
  },
};

// ========================================================
// RESOURCES & MULTIMEDIA APIS
// ========================================================
export const resourcesApi = {
  getAll: async (params = {}) => {
    const res = await api.get('/resources', { params });
    return res.data;
  },
  download: async (id) => {
    const res = await api.post(`/resources/${id}/download`);
    return res.data;
  },
};

export const multimediaApi = {
  getAll: async (params = {}) => {
    const res = await api.get('/multimedia', { params });
    return res.data;
  },
  getById: async (id) => {
    const res = await api.get(`/multimedia/${id}`);
    return res.data;
  },
};

// ========================================================
// ADMIN TELEMETRY & CONTROL APIS
// ========================================================
export const adminApi = {
  getStats: async () => {
    const res = await api.get('/admin/stats');
    return res.data;
  },
  flushCache: async () => {
    const res = await api.post('/admin/flush-cache');
    return res.data;
  },
};

export default api;
