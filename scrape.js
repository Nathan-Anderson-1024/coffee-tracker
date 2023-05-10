import puppeteer from "puppeteer-core";
import * as dotenv from 'dotenv';
dotenv.config()

export async function run() {
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
            const products = Array.from(document.querySelectorAll('.s-result-item'))
            return products.map((product) => {
                const priceElement = product.querySelector('.a-offscreen');
                const titleElement = product.querySelector('.a-size-base-plus');
                // const productURL = product.querySelector('a.a-link-normal[href*="/dp/"]').href;
                return {
                    title: titleElement ? titleElement.innerText.trim() : null,
                    price: priceElement ? priceElement.innerText.trim().replace('$', '') : null,
                    // productURL: productURL ? productURL : null
                };
            });
        });
        
        
        
    }
    catch (error) {
        console.log('Scraping failed', error);
    }
    finally {
        await browser?.close();
    }
}
