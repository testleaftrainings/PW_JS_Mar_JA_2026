

import { expect, test  } from "@playwright/test";
import fs from "fs" // file system

test(`Download File`,async ({page}) => {
    
    test.slow() // test.slow() will increase the global timeout by 3 times of yout default timeout

    await page.goto(`https://leafground.com/file.xhtml`);

    const fDown = page.waitForEvent("download");

    await page.locator(`//span[text()="Download"]`).click();

    const fileDownloaded = await fDown; // resolve the download action 

    const filepath = `Data/logo.png`

    await fileDownloaded.saveAs(filepath);

   // fs.existsSync() the method will check for the file in the given path

    expect(fs.existsSync(filepath)).toBe(true); //ensures file exists

    const stats = fs.statSync(filepath); //fs.statSync(filepath) → fetches file details
    
    const fileSize = stats.size

    console.log(`The size of the file is ${fileSize}`);
    
    
    expect(stats.size).toBeGreaterThan(0) // stats.size → gets file size


 

})

/* Notes :

fs.existsSync(filepath) : method to ensure the existance of the downloaded file

fs.statSync(filepath) : method to get the details of the file


 */