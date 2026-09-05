const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/statistik', (req, res) => {
    res.json({
        total_user: 1500,
        pesan: "Data berhasil diambil"
    });
});

app.listen(port, () => {
    console.log(`Server hannzstore berjalan di port ${port}`);
});