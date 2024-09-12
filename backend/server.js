const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/items', (req, res) => {
    res.json({message: 'List of items'});
});

app.post('/api/items', (req, res) => {
    const newItem = req.body;
    res.json({message: `Item added: ${newItem.name}`});
});

app.put('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.json({message: `Item with ID ${itemId} updated`});
});

app.delete('/api/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.json({message: `Item with ID ${itemId} deleted`});
});

app.listen(3001, () => console.log('Server running on port 3001'));
