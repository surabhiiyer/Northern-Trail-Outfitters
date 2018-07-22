({
    messageHandler: function (component, event) {
        var message = event.getParam("message");
        try {
            console.log(event);
            var tweets = component.get("v.tweets");
            var tweet = message.data.payload;
            tweet.Sentiment_Predictions__c = JSON.parse(tweet.Sentiment_Predictions__c);
            tweet.Intent_Predictions__c = JSON.parse(tweet.Intent_Predictions__c);
            tweet.Vision_Predictions__c = JSON.parse(tweet.Vision_Predictions__c);
            tweets.push(message.data.payload);
            component.set("v.tweets", tweets);
        } catch (e) {
            console.log(e);
        }
    }
})