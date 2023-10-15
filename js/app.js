const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const path = require('path');

const PORT = process.env.PORT || 3000

dotenv.config();

const app = express();

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set('layout', './layouts/main-layout');


app.get('/', async(req, res) => {
    res.render('index', {
        title: 'Dashboard',
        customPluginScripts: `<script src="assets/plugins/apexcharts-bundle/js/apexcharts.min.js"></script>
                              <script src="assets/js/dashboard.js"></script>     
                            `,
        customScripts: '<script src="assets/js/nft.js"></script>'
    });
});

app.get('/ddos', async(req, res) => {
    res.render('ddos', {
        title: 'DDos Test',
        customPluginScripts: null,
        customScripts: '<script src="assets/js/pages/ddos.js"></script>'
    });
});

app.get('/cyber', async(req, res) => {
    res.render('cyber', {
        title: 'Cyber Security Research',
        customPluginScripts: null,
        customScripts: '<script src="assets/js/pages/cyber.js"></script>'
    });
});

app.get('/vulnerability', async(req, res) => {
    res.render('vulnerability', {
        title: 'Vulnerability Scanning',
        customPluginScripts: null,
        customScripts: '<script src="assets/js/pages/vulnerability.js"></script>'
    });
});

app.get('/super', async(req, res) => {
    res.render('super', {
        title: 'Super Computer',
        customPluginScripts: null,
        customScripts: '<script src="assets/js/pages/super.js"></script>'
    });
});

app.get('/blockchain', async(req, res) => {
    res.render('blockchain', {
        title: 'Blockchain Security',
        customPluginScripts: null,
        customScripts: '<script src="assets/js/pages/blockchain.js"></script>'
    });
});

app.listen(PORT, () => {
    console.log(`Server is connected on ${PORT}`);
})