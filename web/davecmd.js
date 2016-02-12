var dataSet = [
    [ "!afklimit", "[time]", "Sets the maximum afk time", "5421" ],
    [ "!reload", "null", "Reload bot in case there are some problems" ],
    [ "!refresh", "null", "Refreshes the browser of whoever runs the bot" ],
    [ "!kill​", "null", "Turn off the bot​" ],
    [ "!clearchat", "null", "Clears the chat" ],
    [ "!cycle", "null", "Toggle DJ cycle" ],
    [ "cmd", "arg", "desc" ],
    [ "cmd", "arg", "desc" ],
    [ "cmd", "arg", "desc" ],
    [ "cmd", "arg", "desc" ],
    [ "cmd", "arg", "desc" ],

];
 
$(document).ready(function() {
    $('#cmdmenager').DataTable( {
        data: dataSet,
        columns: [
            { title: "Command" },
            { title: "Argument" },
            { title: "Description" }
        ]
    } );
} );
