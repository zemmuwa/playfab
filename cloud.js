handlers.grantItemsToUser = function (args, context) {
    try {
        
        var grantItemRequest = {PlayFabId:currentPlayerId,CatalogVersion:args.catalogVersion,ItemIds:itemsIds};
        // var playerStatResult = server.GrantItemsToUser(request);
        return {success:true,data:args};
    } catch (ex) {
        server.WriteTitleEvent({
            EventName : 'cs_error',
            Body : ex
        });
        return ex;
    }
}

