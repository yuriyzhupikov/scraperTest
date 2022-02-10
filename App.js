const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json({extended: true}));
app.use('/', require("./routes/parse.route"));

async function startServer() {
    try {
        app.listen(PORT, () => console.log(`App has been started von port ${PORT}`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

startServer();