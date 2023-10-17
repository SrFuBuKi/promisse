const express = require('express');
const app = express();
const port = 3000;
const datetime = require('date-and-time');

app.get('/promisse', (req, res) => {
  const now = new Date();
  const futureDate = datetime.addDays(now, 5);
  const formattedDate = datetime.format(futureDate, 'DD/MM/YYYY');
  res.json({ valid_until: formattedDate });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
