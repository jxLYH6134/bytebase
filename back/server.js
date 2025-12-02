import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const CLIENT_ID = process.env.CLIENT_ID;       // Ov23lih2npmim7CQWBqD
const CLIENT_SECRET = process.env.CLIENT_SECRET; // GitHub OAuth App Secret

// 前端会把 code 发到这个接口
app.post('/auth/github', async (req, res) => {
  const { code } = req.body;

  try {
    // 获取 access token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
      }),
    });
    const tokenData = await tokenRes.json();
    const access_token = tokenData.access_token;

    if (!access_token) {
      return res.status(400).json({ error: 'No access token received' });
    }

    // 获取用户信息
    const userRes = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `token ${access_token}`,
        Accept: 'application/json',
      },
    });
    const userData = await userRes.json();

    res.json({ user: userData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
