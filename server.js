const net = require('net');
const fs = require('fs');
const fish = JSON.parse(fs.readFileSync('fish.json', 'utf8')); 

 
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

        fs.writeFileSync("buffer.json", JSON.stringify(buff, null, 2));
        //console.log(JSON.stringify(buff,null,2));
        handleFishData(buff);
//        console.log('Bytes read : ' + bread);
 //       console.log('Bytes written : ' + bwrite);
 //       console.log('data recieved: ' + buff.toString('hex'));
    });
    //console.log(
    //c.pipe(c);
});

const handleFishData = (buff) => {
    Object.keys(fish).forEach((index) => {
        Object.keys(fish[index]).forEach((name) => {
            console.log(name + ": " + Boolean(fish[index][name] & buff[index]));
        });
    });
}


server.listen(8888, () => {
    console.log('server bound');
});
