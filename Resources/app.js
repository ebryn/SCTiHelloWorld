var startTime = +(new Date);
var window = this;
Ti.include('/lib/sproutcore-runtime.min.js');
var curTime = +(new Date);

var win = Titanium.UI.createWindow({  
    title:'SCTiHelloWorld',
    backgroundColor:'#fff'
});

var label = Titanium.UI.createLabel({
	text: "sproutcore-runtime loaded in: " + ((curTime - startTime) / 1000) + "secs",
	color: 'black'
});

win.add(label);

win.open();