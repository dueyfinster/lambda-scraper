# AWS Lambda Slack Web Scraper

Scrapes a website (my workplace canteen's menu) and sends it nicely formatted to
slack as a message so everyone can have easy visibility. Example of slack message:

![Sample message in Slack](docs/slack-message-sample.png)

## How to
1. Clone this repository
2. Get the [aws cli][] and login
3. Create a Lambda function (call it `scraper`)
4. Run `npm run deploy` - Thats it! Your code is now on AWS Lambda.


[aws cli]: http://docs.aws.amazon.com/cli/latest/userguide/installing.html
