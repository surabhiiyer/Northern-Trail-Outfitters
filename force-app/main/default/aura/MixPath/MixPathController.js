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
    }
})
