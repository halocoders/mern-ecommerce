import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTc2MzdjNTYxYWU5YWUyNTIxOTBiMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODUxMTUxNiwiZXhwIjoxNjM4NTk3OTE2fQ.EnsxEBkjoVu-J_Bs06jpZYrWPLf9AQ2yVn_RLakkJmo';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
