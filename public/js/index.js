var socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	socket.emit('createMessage' , {
		from: 'jen@example.com',
		text: 'hey. this is geeta.'
	});
});

socket.on('disconnect', function () {
	console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
	console.log('newMessage', message);
});