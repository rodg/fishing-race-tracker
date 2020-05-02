const fs = require('fs');
const net = require('net');

'use strict';

module.exports = function (nodecg) {
    const fish = JSON.parse(fs.readFileSync('./bundles/auto-fish-tracker/fish.json', 'utf8'));
    var capture_data = nodecg.Replicant('capture_data');
    capture_data = {};

    const server = net.createServer((c) => {
	// 'connection' listener.
	console.log('client connected');
	c.on('end', () => {
	    console.log('client disconnected');
	});
	c.on('data',function(data){
	    var bread = c.bytesRead;
	    var bwrite = c.bytesWritten;
	    var buff = Buffer.alloc(8).fill(data);
            
	    //fs.writeFileSync("buffer.json", JSON.stringify(buff, null, 2));
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
            if((newData[name] != capture_data[name]) && newData[name]){
                nodecg.sendMessage("newFishCaught", name);
                console.log("[FISH] Caught: " + name);
            }
        });
        capture_data = newData;
        
    }

    server.listen(8888, () => {
	console.log('server bound');
    });
};
