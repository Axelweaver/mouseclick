var data = {};
	
function show(event, type) {

	var jsonOutputElement = document.getElementById('jsonOutput');

	if(!event){
		return;
	}

	var eventData =  {
		altKey: event.altKey,
		button: event.button,
		buttons: event.buttons,
		clientX: event.clientX,
		clientY: event.clientY,
		ctrlKey: event.ctrlKey,
		shiftKey: event.shiftKey,
		offsetX: event.offsetX,
		offsetY: event.offsetY,
		pageX: event.pageX,
		pageY: event.pageY,
		screenX: event.screenX,
		screenY: event.screenY,
		metaKey: event.metaKey,
		type: event.type
	};
	
	switch (type) {
		case 'mousedown':
			data.mousedown = eventData;
			break;
		case 'mouseup':
			data.mouseup = eventData;
			break;
		case 'click':
			data.click = eventData;
			break;
		case 'mousemove':
			data.mousemove = eventData;
			break;
		default:
			data.click = eventData;
			break;
	}
	
	jsonOutputElement.innerHTML = JSON.stringify(data, undefined, 4);
}
	
document.addEventListener('mousedown', function(event) {
	console.log('mousedown', event);
	
	show(event, 'mousedown');
});

document.addEventListener('mouseup', function(event) {
	console.log('mouseup', event);

	show(event, 'mouseup');
});

document.addEventListener('click', function(event) {
	console.log('click', event);

	show(event, 'click');
});

document.addEventListener('mousemove', function(event) {
	console.log('mousemove', event);

	show(event, 'mousemove');
});

document.oncontextmenu = (e) => e.preventDefault(); 