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
  getById: async (id) => {
    const res = await api.get(`/resources/${id}`);
    return res.data;
  },
  download: async (id) => {
    const res = await api.post(`/resources/${id}/download`);
    return res.data;
  },
  requestBlueprint: async (data) => {
    const res = await api.post('/resources/request', data);
    return res.data;
  },
  getTelemetry: async () => {
    const res = await api.get('/resources/telemetry');
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
  recordProgress: async (id, data) => {
    const res = await api.post(`/multimedia/${id}/progress`, data);
    return res.data;
  },
  postDiscussion: async (id, data) => {
    const res = await api.post(`/multimedia/${id}/discussion`, data);
    return res.data;
  },
  updateDiscussion: async (id, commentId, data) => {
    const res = await api.put(`/multimedia/${id}/discussion/${commentId}`, data);
    return res.data;
  },
  deleteDiscussion: async (id, commentId) => {
    const res = await api.delete(`/multimedia/${id}/discussion/${commentId}`);
    return res.data;
  },
  rate: async (id, scoreData) => {
    const res = await api.post(`/multimedia/${id}/rate`, scoreData);
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
    const res = await api.post('/admin/system/flush-cache');
    return res.data;
  },
  syncDatabase: async () => {
    const res = await api.post('/admin/system/sync-db');
    return res.data;
  },
  // Story moderation
  getStories: async () => {
    const res = await api.get('/admin/stories');
    return res.data;
  },
  updateStoryStatus: async (id, status, isFeatured) => {
    const res = await api.put(`/admin/stories/${id}/status`, { status, isFeatured });
    return res.data;
  },
  deleteStory: async (id) => {
    const res = await api.delete(`/admin/stories/${id}`);
    return res.data;
  },
  // Media CMS
  getMedia: async () => {
    const res = await api.get('/admin/multimedia');
    return res.data;
  },
  createMedia: async (data) => {
    const res = await api.post('/admin/multimedia', data);
    return res.data;
  },
  updateMedia: async (id, data) => {
    const res = await api.put(`/admin/multimedia/${id}`, data);
    return res.data;
  },
  deleteMedia: async (id) => {
    const res = await api.delete(`/admin/multimedia/${id}`);
    return res.data;
  },
  // Resource CMS
  getResources: async () => {
    const res = await api.get('/admin/resources');
    return res.data;
  },
  createResource: async (data) => {
    const res = await api.post('/admin/resources', data);
    return res.data;
  },
  updateResource: async (id, data) => {
    const res = await api.put(`/admin/resources/${id}`, data);
    return res.data;
  },
  deleteResource: async (id) => {
    const res = await api.delete(`/admin/resources/${id}`);
    return res.data;
  },
  getBlueprintRequests: async () => {
    const res = await api.get('/admin/requests');
    return res.data;
  },
  updateBlueprintRequest: async (id, status) => {
    const res = await api.put(`/admin/requests/${id}`, { status });
    return res.data;
  },
  // Career Bank CRUD
  getCareers: async () => {
    const res = await api.get('/admin/careers');
    return res.data;
  },
  createCareer: async (data) => {
    const res = await api.post('/admin/careers', data);
    return res.data;
  },
  updateCareer: async (id, data) => {
    const res = await api.put(`/admin/careers/${id}`, data);
    return res.data;
  },
  deleteCareer: async (id) => {
    const res = await api.delete(`/admin/careers/${id}`);
    return res.data;
  },
  // Quiz Questions CMS
  getQuizQuestions: async () => {
    const res = await api.get('/admin/quiz-questions');
    return res.data;
  },
  createQuizQuestion: async (data) => {
    const res = await api.post('/admin/quiz-questions', data);
    return res.data;
  },
  updateQuizQuestion: async (id, data) => {
    const res = await api.put(`/admin/quiz-questions/${id}`, data);
    return res.data;
  },
  deleteQuizQuestion: async (id) => {
    const res = await api.delete(`/admin/quiz-questions/${id}`);
    return res.data;
  },
  // User Management
  getUsers: async () => {
    const res = await api.get('/admin/users');
    return res.data;
  },
  updateUserRole: async (id, role) => {
    const res = await api.put(`/admin/users/${id}/role`, { role });
    return res.data;
  },
  toggleUserVerification: async (id) => {
    const res = await api.put(`/admin/users/${id}/verify`);
    return res.data;
  },
  toggleUserBlock: async (id) => {
    const res = await api.put(`/admin/users/${id}/block`);
    return res.data;
  },
  deleteUser: async (id) => {
    const res = await api.delete(`/admin/users/${id}`);
    return res.data;
  },
};

// ========================================================
// AI CHATBOT APIS (Powered by Google Gemini)
// ========================================================
export const chatApi = {
  sendMessage: async (messages, user = null) => {
    const res = await api.post('/chat', { messages, user });
    return res.data;
  },
  getStatus: async () => {
    const res = await api.get('/chat/status');
    return res.data;
  },
};

export default api;
