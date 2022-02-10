const {Router} = require('express');
const browserObject = require("../scraper/browser")
const scraperController = require("../scraper/pageController");
const router = Router();

router.get('/parse', async (req, res) => {
    let browserInstance = browserObject.startBrowser();
    let data = await scraperController(browserInstance);

    res.json(data);
});

module.exports = router;