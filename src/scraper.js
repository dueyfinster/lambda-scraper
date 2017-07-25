const scrapeIt = require("scrape-it");

export default class Scraper {

  async run() {
     return scrapeIt("http://www.ksg.ie/restaurants/ericsson/athlone/menu/index.php", {
        Lunch: {
            listItem: '.lunch',
            data: {
              title: {
                 selector: 'h2'
              },
              soup1:{
                 selector: "p",
                 eq: 0
              },
              soup2:{
                 selector: "p",
                 eq: 2
              },
              main1:{
                 selector: "p",
                 eq: 3
              },
              main2:{
                 selector: "p",
                 eq: 4
              },
              main3:{
                 selector: "p",
                 eq: 5
              }
            }
        }
    });
  }
};
