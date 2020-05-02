const fs = require('fs');
const net = require('net');

'use strict';

module.exports = function (nodecg) {
    const capture_data = nodecg.Replicant('capture_data');
    const fish = JSON.parse(fs.readFileSync('./bundles/auto-fish-tracker/fish.json', 'utf8'));
    capture_data.value = {};

    const server = net.createServer((c) => {
	// 'connection' listener.
	console.log('[FISH] client connected');
        //console.log(c.remoteAddress);
	c.on('end', () => {
	    console.log('[FISH] client disconnected');
	});
	c.on('data',function(data){
	    var bread = c.bytesRead;
	    var bwrite = c.bytesWritten;
	    var buff = Buffer.alloc(8).fill(data);
            
	    handleFishData(buff);
	});
    });

    const handleFishData = (buff) => {
        var newData = {};
	Object.keys(fish).forEach((index) => {
	    Object.keys(fish[index]).forEach((name) => {
		//console.log(name + ": " + Boolean(fish[index][name] & buff[index]));
                newData[name] = Boolean(fish[index][name] & buff[index]);
	    });
	});

        Object.keys(newData).forEach( (name) => {
            if((newData[name] != capture_data.value[name]) && newData[name]){
                nodecg.sendMessage("newFishCaught", name);
                console.log("[FISH] Caught: " + name);
            }
            capture_data.value[name] = capture_data.value[name] || newData[name];
        });
        //capture_data = newData;
        
    }

    server.listen(8888, () => {
	console.log('server bound');
    });
};
