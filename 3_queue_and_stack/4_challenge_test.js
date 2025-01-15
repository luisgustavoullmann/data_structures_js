import Browser from "./4_challenge.js"

// Test
let browser = new Browser();

console.log("Test 1");
console.log(browser.getCurrentPage());
browser.access("https://amazon.com");
browser.access("https://cnn.com");
console.log(browser.getCurrentPage());
browser.back();
console.log(browser.getCurrentPage());
browser.back();
console.log(browser.getCurrentPage());
// browser.back();

let browser_2 = new Browser();

console.log("Test 2");
browser_2.access("https://amazon.com");
browser_2.access("https://cnn.com");
console.log(browser_2.getCurrentPage());
// browser_2.forward();

let browser_3 = new Browser();

console.log("Test 3");
browser_3.access("https://amazon.com");
browser_3.access("https://cnn.com");
browser_3.access("https://gmail.com");
browser_3.access("https://outlook.com");
console.log(browser_3.getCurrentPage());
browser_3.back();
browser_3.back();
browser_3.back();
console.log(browser_3.getCurrentPage());
browser_3.forward();
browser_3.forward();
console.log(browser_3.getCurrentPage());

let browser_4 = new Browser();

console.log("Test 4");
browser_4.access("https://amazon.com");
browser_4.access("https://cnn.com");
browser_4.access("https://gmail.com");
browser_4.access("https://outlook.com");
console.log(browser_4.getCurrentPage());
browser_4.back();
browser_4.back();
browser_4.back();
console.log(browser_4.getCurrentPage());
browser_4.forward();
browser_4.forward();
console.log(browser_4.getCurrentPage());
browser_4.access("https://yahoo.com");
browser_4.back();
browser_4.forward();
console.log(browser_4.getCurrentPage());
browser_4.forward();

