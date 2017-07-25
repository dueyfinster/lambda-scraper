process.env['PATH'] = process.env['PATH'] + ':' + process.env['LAMBDA_TASK_ROOT'] + '/dist/'
import Scraper from './src/scraper';
import Slack from 'node-slack';
import moment from 'moment';
import config from './config';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST',
  'Access-Control-Allow-Headers': 'Content-Type'
};


exports.handler = async (event, context, callback) => {
  try {

    const controller = new Scraper();
    const today = moment().day()-1; 
    const res = await controller.run();
    const response = res['Lunch'][today];
    console.log(`Scraper Response is: ${JSON.stringify(response)}`);

    var slack = new Slack(config.url);
    await slack.send({
          text: "Today's Menu:",
          username: response.title,
          attachments: [
            {
              "fallback": response.soup1 + ' & ' + response.soup2,
              "title": "Soups",
              "text": response.soup1 + '\n' + response.soup2,
              "color": "#00bcd4"
            },
            {
              "fallback": response.main1 + '\n' + response.main2 + '\n' + response.main3,
              "title": "Mains",
              "text": response.main1 + '\n' + response.main2 + '\n' + response.main3,
              "color": "#1a0dab"
            }
          ],
    });

    return context.succeed({ statusCode: 200, body: response, headers: headers });

  } catch (e) {
    console.log(`Application ERROR: ${e.stack}`);
    return context.fail({ statusCode: 500, body: `Application Error: ${e}`, headers });
  }
};
