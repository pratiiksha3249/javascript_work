let visitor = {
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
    channel: 0,
    sessionId: "fplguyql3",
    projectId: {
      $oid: "5f9ff649ffef1e546c79ce9d"
    },
    operatingSystem: "Windows",
    visitorId: "Visitor-41114",
    instanceNumber: 1,
    userActivity: [],
    userBotActivity: [
      {
        timeSpent: 0,
        questionNumber: 1,
        intent: "Pricing"
      }
    ],
    userBotSplIntents: [],
    createdAt: {
      $date: "2021-05-26T06:55:09.060Z"
    },
    updatedAt: {
      $date: "2021-05-27T09:13:53.769Z"
    },
    __v: 0,
    utm_campaign: {
      $oid: "63d7a214e191001f59dd4551"
    },
    cummulativeTimeSpent: 0,
    isTimeSpentUpdated: false
  }


  let array=visitor.chatDetails;
  var max=0;
  for(let i=0;i<array.length;i++){
          //  if(max>array[i].content.text.length)  {
          //   max=array[i].content.text;
          //  }  
               if(array[i].content.text!=undefined){


              let  l = array[i].content.text.length;
            if(max<l){
              max=l;

            
            //console.log(array[i].content.timestamp)
            }

                }


  }

  // console.log(l);

  
//  console.log(visitor.chatDetails.content.payload.facebook.attachment);

for(let i=0;i<visitor.length;i++){

            if(visitor.chatDetails[i].content.payload.facebook.attachment!=undefined){

              
              // console.log(visitor.chatDetails[i].content.payload.facebook.attachment);
              if(visitor.chatDetails[i].content.payload.facebook.hasOwnProperty(attachment)){
                console.log(visitor.chatDetails[i].content.payload.facebook.attachment);
              }
            }
  
}



// console.log(visitor.chatDetails[i].content.payload.facebook.attachment);
//   console.log(visitor.hasOwnProperty('chatDetails'));
//   console.log(visitor.chatDetails);

//   let a = [{num: 2}, {num: 4}, {num: 7}]
// let count =0;

//  ---------1) extract all messages sent by the bot from the chatDetails array.
//    visitor.chatDetails.forEach(element => {
//         if(element["sentBy"] == 'bot'){
//            console.log(element.content.text);
//         }
//    });

// -------------3) find the timestamp of the first message sent by the bot.

// console.log(new Date(visitor.chatDetails[0].content.timestamp));

// ----------4) filter messages that have the intent "Pricing" from the chatDetails
//  let amit = visitor.chatDetails.filter((e)=>{
//     if(e.content.intentName == "Pricing"){
//         console.log(e.content.text);
//     }
//  })



// 5. convert all timestamps in the chatDetails array to a human-readable date format.

// 6. calculate the total time spent from the userBotActivity array.

// 7. extract UTM campaign, medium, and source from the sourceCampaign object.

// 8. find all documents in the chatDetails array that contain a payload with an attachment.

// 9. find all messages sent after a certain date in the chatDetails array.

//  10. check if the bot interaction is active or not by inspecting the active field.
