import Scraper from './src/scraper';
import Slacker from './src/slack';
import moment from 'moment';

exports.handler = async (event, context, callback) => {
  try {

    const controller = new Scraper();
    const today = moment().day()-1; 
    const res = await controller.run();
    
    const response = res['Lunch'][today];
    console.log(`Scraper Response is: ${JSON.stringify(response)}`);

    const slack = new Slacker();
    await slack.run(response);

    return context.succeed({ statusCode: 200, body: response, headers: { 'Content-Type': 'application/json' } });

  } catch (e) {
    console.log(`Application ERROR: ${e.stack}`);
    return context.fail({ statusCode: 500, body: `Application Error: ${e}`, headers });
  }
};
