const nameInput = document.getElementById('name')
var capture_data = nodecg.Replicant('capture_data');

function update() {
	nodecg.sendMessage('newFishCaught', nameInput.value);
        capture_data.value[nameInput.value] = true;
}
