const nameInput = document.getElementById('name')

function update() {
	nodecg.sendMessage('newFishCaught', nameInput.value);
}
