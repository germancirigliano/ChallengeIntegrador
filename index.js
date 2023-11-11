import express from 'express';

const PORT = 8080;

express().listen(PORT, () => {
  console.log(`Listen in port ${PORT}`);
});