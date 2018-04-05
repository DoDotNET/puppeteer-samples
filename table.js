const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.bundesliga.com/de/bundesliga/tabelle/2017-2018/', {waitUntil: 'networkidle2'});

  const resultsSelector = '#tableWrapper > div > div > div.panel.buli-table > div > table > tbody > tr.table-DFL-CLU-000007 > td.team > a > span.lg';
  await page.waitForSelector(resultsSelector);

const resultsSelector2 = "#tableWrapper > div > div > div.panel.buli-table > div > table > tbody > tr.table-DFL-CLU-000007 > td.pts";
await page.waitForSelector(resultsSelector2);


  const result = await page.$eval(resultsSelector, rs => rs.innerHTML);
  const resultPts = await page.$eval(resultsSelector2, rs => rs.innerHTML);

  console.log(result+":"+resultPts);

  await browser.close();
})();