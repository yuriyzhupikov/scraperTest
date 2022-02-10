const scraperObject = {
    url: 'https://www.dns-shop.ru/product/4623cd4d0da43332/61-smartfon-apple-iphone-12-256-gb-cernyj/',

    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        await page.goto(this.url);

        await page.waitForSelector('.product-buy__price.product-buy__price_active');
        let outData = {};
        outData['price'] = await page.$eval('.product-buy__price.product-buy__price_active',
            text => parseInt(text.textContent.replace(/\s/g, '')));

        await page.waitForSelector('.order-avail-wrap > a');
        await page.click('.order-avail-wrap > a');

        await page.waitForSelector('.vue-shop-avail__content');
        let urls = await page.$$eval('.base-shop-choose-list.vue-shop-avail__shops-list > div', links => {
            links = links.map(link => link.querySelector('.base-shop-view__title').textContent);
            return links;
        });
        outData['shop'] = urls;

        console.log(outData);

        await page.close();
        await browser.close();

        return outData;
    }
}

module.exports = scraperObject;