function notify (msg) {
	alert(msg)
}

function logMsg (msg) {
	console.log(msg);
}


export default {
	notify: notify,
	log: logMsg
};
