const nameInput = document.getElementById('name')
const twitterInput = document.getElementById('twitter')
const mySong = nodecg.Replicant('mySong');

/*songRep.on('change', newVal => {
    update();
});*/

function update() {
	/*const data = {song: songRep.value.name, 
                        artist: songRep.value.artist, 
                        art: songRep.value.albumArt};*/
	nodecg.sendMessage('showLowerthird');
}
