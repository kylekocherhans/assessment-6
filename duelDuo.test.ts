
import { Builder, Capabilities, By } from "selenium-webdriver";

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
    driver.get('http://localhost:4000/');
});

afterAll(async () => {
    driver.quit();
});

test('title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'));
    const displayed = await title.isDisplayed();
    expect(displayed).toBe(true);
});

test('choices div shows up when Draw button clicked', async () => {
    await driver.findElement(By.id('draw')).click();
    
    const choicesDiv = await driver.findElement(By.id('choices'));
    const displayed = await choicesDiv.isDisplayed();

    expect(displayed).toBe(true);
});

test('player-duo div shows up when Add to Duo button clicked', async () => {
    await driver.findElement(By.id('draw')).click();
    await driver.findElement(By.css(".bot-btn")).click();

    const playerDuoDiv = await driver.findElement(By.id('choices'));
    const displayed = await playerDuoDiv.isDisplayed();

    expect(displayed).toBe(true);
});