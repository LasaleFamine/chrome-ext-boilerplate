import '../img/chrome-128.png';
import '../img/chrome-34.png';

window.chrome.browserAction.onClicked.addListener(tab => {
	console.log(tab);
	/* eslint-disable no-alert */
	alert('You should check the console within the background page (chrome://extensions and check the background page of this extension)');
});

