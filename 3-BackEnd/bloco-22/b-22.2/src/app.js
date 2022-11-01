const express = require('express');

const app = express();

const activities = [
  {
    id: 1,
    description: 'Banho cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

app.get('/myActivities/:id', (req, res) => {
  const filterActivities = activities.find(e => e.id === Number(req.params.id));
  res.status(200).json(filterActivities);
});

app.get('/myActivities', (req, res) => res.status(200).json({ activities }));

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filteredActivities = activities;

  if (status) {
    filteredActivities = activities.filter((activity) => activity.status === status);
  }

  res.status(200).json({ activities: filteredActivities });
});

module.exports = app;