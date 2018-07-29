var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'jen';
		var text = 'some message';
		var message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, text});
	});
});


describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Admin';
		var latitude = 15;
		var longiude = 19;
		var url = 'https://www.google.com/maps?q=15,19'
		var message = generateLocationMessage(from, latitude,longiude);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({from, url});
	});
});