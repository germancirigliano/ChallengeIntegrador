import express from 'express';
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`);
});