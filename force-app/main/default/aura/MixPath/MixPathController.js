({
    onStepChange: function (component, event) {
        var mix = component.get("v.record");
        if (mix) {
            mix.Status__c = event.getParam("detail").value;
            component.find("mixRecord").saveRecord($A.getCallback(function (saveResult) {
                //
            }));
        }
    },
    onRecordUpdated: function (component, event) {
        var changeType = event.getParams().changeType;
        if (changeType === "CHANGED") {
            var service = component.find("mixRecord");
            service.reloadRecord();
        }
    },

    messageHandler: function (component, event) {
        try {
            var mix = component.get("v.record");
            var message = event.getParam("message");
            if (message && message.data && message.data.sobject) {
                var mixId = message.data.sobject.Id;
                var status = message.data.sobject.Status__c;
                console.log(status);
                if (mixId === mix.Id && status !== mix.Status__c) {
                    component.find("mixRecord").reloadRecord(true);
                }
            }
        } catch (e) {
            console.log(e);
        }
    }

})