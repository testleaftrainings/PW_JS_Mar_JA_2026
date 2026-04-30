

import { expect, test } from "@playwright/test";
import path from "path"
import fs from "fs"

test(`Assert Upload file type`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    const filePath = "Data/logo.jpeg";

    const ext = path.extname(filePath); //this method is to get the extension of the file to be uploaded

    expect(ext).toBe(".png"); // assertions to check the extension of file

    const stats = fs.statSync(filePath);
    
    const filesize = stats.size
    console.log(filesize);
    
   expect(filesize).toBeGreaterThan(0);

    if (ext === ".png") {
        await page.setInputFiles(`(//input[@type="file"])[1]`, filePath)

        await page.waitForTimeout(3000)
    } else {
        console.log("Incorrect file extension");

    }



})

/* path.extname() => this method is to get the extension of the file to be uploaded */