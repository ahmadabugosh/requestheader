
import express from 'express';
import { Parser } from './parser';
 
export const app = express(); // We export app so index.js can make use of it
 
app.get('/api/whoami', (req, res) => {
  res.status(200).send(Parser.parseRequest(req));
});