![AWS Lambda Slack Web Scraper](logo.png "AWS Lambda Slack Web Scraper") 
# AWS Lambda Slack Web Scraper

Scrapes a website (my workplace canteen's menu) and sends it nicely formatted to
slack as a message so everyone can have easy visibility. Example of slack message:

![Sample message in Slack](docs/slack-message-sample.png)

## Getting Started
1. Clone this repository
2. Get the [aws cli][] and login
3. Copy `conf/sample.json` to `conf/config.json` and add your Slack Webhook URL
4. Create a Lambda function (call it `scraper`)
5. Run `npm run deploy` - Thats it! Your code is now on AWS Lambda.


[aws cli]: http://docs.aws.amazon.com/cli/latest/userguide/installing.html


## Customising the code
All the code you need to modify is in [src/scraper.js](src/scraper.js). Just add the address of the website you wish to scrape, and pass it an object of what needs to be pulled from the page. See the [scrape-it](https://github.com/IonicaBizau/scrape-it) documentation for more information.
