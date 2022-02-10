const pageScraper = require('./pageAnalisisPhone');
async function scrapeAll(browserInstance, res){
    let browser;
    try{
        browser = await browserInstance;
        return await pageScraper.scraper(browser);

    }
    catch(err){
        console.log("Could not resolve the browser instance => ", err);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)