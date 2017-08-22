import Slack from 'node-slack';
import config from '../config';

export default class Slacker {
  
  async run(message) {
    var slack = new Slack(config.url);
    return slack.send({
          text: "Today's Menu:",
          username: message.title,
          attachments: [
            {
              "fallback": message.soup1 + ' & ' + message.soup2,
              "title": "Soups",
              "text": message.soup1 + '\n' + message.soup2,
              "color": "#00bcd4"
            },
            {
              "fallback": message.main1 + '\n' + message.main2 + '\n' + message.main3,
              "title": "Mains",
              "text": message.main1 + '\n' + message.main2 + '\n' + message.main3,
              "color": "#1a0dab"
            }
          ],
    });   
  }

};
