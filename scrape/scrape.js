const dotenv = require('dotenv');
dotenv.config();
const {create} = require('../model/coffee');
const puppeteer = require('puppeteer');


async function run() {
    let browser;
    try {
        const auth = process.env.SCRAPING_LOGIN
        browser = await puppeteer.connect({
            browserWSEndpoint: `wss://${auth}@zproxy.lum-superproxy.io:9222`
        })
        const page = await browser.newPage();
        page.setDefaultTimeout(2 * 60 * 1000);
        await page.goto('https://www.amazon.com/s?k=coffee&crid=2O6PB6HXY33RW&sprefix=coffee%2Caps%2C337&ref=nb_sb_noss_2');

        const productData = await page.evaluate(() => {
            const products = Array.from(document.querySelectorAll('.s-result-item'));
            return products.map((product) => {
                const priceElement = product.querySelector('.a-offscreen');
                const titleElement = product.querySelector('.a-size-base-plus');
                //const productIMG = product.querySelector('div.sg-col-inner > div.s-widget-container > div.s-card-container > div.a-section > div.s-product-image-container > span.rush-component > a.a-link-normal > div.a-section > img.s-image');
                //const productURL = product.querySelector('a.a-link-normal[href*="/dp/"]');
                //console.log(productIMG)
                return {
                    title: titleElement ? titleElement.innerText.trim().replace('%', '') : null,
                    price: priceElement ? priceElement.innerText.trim().replace('$', '') : null,
                    vendor: 'Amazon'
                };
            });
        });
        return productData
        
        
        
        
    }
    catch (error) {
        console.log('Scraping failed', error);
    }
    finally {
        await browser?.close();
    }
};


const insertData = async () => {
    console.log('Scraping Data');
    const scrapeData = await run();
    console.log(scrapeData)
    for (let key in scrapeData) {
        const obj = scrapeData[key];
        if (obj.title !== null && obj.price !== null && obj.title.length > 0) {
            try {
                const dateAdded = new Date().toISOString().split('T')[0];
                await create(obj.title, obj.price, dateAdded, obj.vendor)
                console.log(`Added: \n {name: ${obj.title}, price: ${obj.price}, date: ${dateAdded}} to DB.`)
            } catch (error) {
                console.log('Error adding to DB.', error)
            }
        }
    }
}

insertData();
