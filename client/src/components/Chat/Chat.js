import Chat from "../Chat";
var socket = io();
$(function () {
    var socket = io();
    $('#chatForm').submit(function(){
        socket.emit('chat message', "{{username}}: " + $('#m').val());
        $('#m').val('');
        return false;
    });
});
socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});


export default Chat;