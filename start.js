const app = require('./app'); // import the configured express app
const port = 2000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});