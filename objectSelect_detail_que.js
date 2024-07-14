   const myObject={
    botType: "Web",
    enteredDate: {
      $date: "2021-05-25T00:06:08.320Z"
    },
    distanceFromSite: 0,
    totalTimeScore: 0,
    totalBotScore: 0,
    multiplicationScore: 0,
    active: false,
    sourceCampaign: {
      utm_campaign: "Orphan",
      utm_medium: "digital",
      utm_source: "Google"
    },
    chatDetails: [
      {
        sentBy: "bot",
        content: {
          text: "Welcome to ASBL Spire-The Exclusive 3BHK project",
          timestamp: 1622012179808,
          type: 0
        }
      },
      {
        sentBy: "bot",
        content: {
          text: "I am Dhruv. I will be assisting you today",
          timestamp: 1622012179808,
          type: 0
        }
      },
      {
        content: {
          text: "whats the price for 3bhk",
          type: 0,
          timestamp: "2021-05-26T06:57:39.182Z"
        },
        sentBy: "user"
      },
      {
        content: {
          text: "Glad you asked! Let me share those details with you.",
          platform: "FACEBOOK",
          timestamp: 1622012260971,
          intentName: "Pricing",
          type: 0
        },
        sentBy: "bot"
      },
      {
        content: {
          payload: {
            facebook: {
              attachment: {
                type: "98",
                payload: {
                  urls: [
                    {
                      url: "price_sheet.png",
                      alt: "Spire Price Sheet"
                    }
                  ],
                  title: ""
                }
              }
            }
          },
          platform: "FACEBOOK",
          timestamp: 1622012260969,
          intentName: "Pricing",
          type: 4
        },
        sentBy: "bot"
      },
      {
        content: {
          payload: {
            facebook: {
              attachment: {
                payload: {
                  afterImage: true,
                  title: "Can I help you with anything else?",
                  replies: [
                    "Yes",
                    "No"
                  ]
                },
                type: "100"
              }
            }
          },
          platform: "FACEBOOK",
          timestamp: 1622012260969,
          intentName: "Pricing",
          type: 4,
          emptySuggestions: true
        },
        sentBy: "bot"
      }
    ],


  }

//   for(let i=0; i<myObject.length;i++){
//     console.log(myObject);
//   }

// console.log(myObject.chatDetails[sentBy]);

// for(const i=0;i<myObject.lenght;i++){
//     console.log(chatDetails[sentBy]);
// }