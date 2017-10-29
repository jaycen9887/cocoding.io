<script src="https://static.opentok.com/v2/js/opentok.min.js"></script>
<script type="text/javascript">
var apiKey = '{{apiKey}}';
var sessionId = '{{sessionId}}';
var token = '{{token}}';

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
        console.log(error.message);
    }
}

 // Initialize an OpenTok Session object
var session = OT.initSession(apiKey, sessionId);

session.on('streamCreated', function(event) {
    console.log("stream created");
    // Create a container for a new Subscriber, assign it an id using the streamId, put it inside
    // the element with id="subscribers"
    var subContainer = document.createElement('div');
    subContainer.id = 'stream-' + event.stream.streamId;
    document.getElementById('subscribers').appendChild(subContainer);

    session.subscribe(event.stream, subContainer);

    // Subscribe to the stream that caused this event, put it inside the container we just made
//
//        session.subscribe(event.stream, subContainer, {
//            insertMode: 'append',
//            width: '100%',
//            height: '100%'
//        }, handleError);
});

// Create a publisher
//    var publisher = OT.initPublisher('publisher', {
//        insertMode: 'append',
//        width: '100%',
//        height: '100%'
//    }, handleError);

var publisher = OT.initPublisher('publisher');

// Connect to the session
session.connect(token, function(error) {
    // If the connection is successful, initialize a publisher and publish to the session
    if (error) {
        handleError(error);
    } else {
        session.publish(publisher, handleError);
    }
});

//    // Initialize a Publisher, and place it into the element with id="publisher"
//    var publisher = OT.initPublisher('publisher');
//
//    // Attach event handlers
//    session.on({
//
//        // This function runs when session.connect() asynchronously completes
//        sessionConnected: function(event) {
//            console.log(event);
//            console.log("sessionConnected");
//
//            // Publish the publisher we initialzed earlier (this will trigger 'streamCreated' on other
//            // clients)
//            session.publish(publisher);
//        },
//
//        // This function runs when another client publishes a stream (eg. session.publish())
//        streamCreated: function(event) {
//            // Create a container for a new Subscriber, assign it an id using the streamId, put it inside
//            // the element with id="subscribers"
//            var subContainer = document.createElement('div');
//            subContainer.id = 'stream-' + event.stream.streamId;
//            document.getElementById('subscribers').appendChild(subContainer);
//
//            // Subscribe to the stream that caused this event, put it inside the container we just made
//            session.subscribe(event.stream, subContainer);
//        }
//
//    });
//
//    // Connect to the Session using the 'apiKey' of the application and a 'token' for permission
//    session.connect(token);

</script>