const fishName = document.getElementById('fish_name');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

const blueData = nodecg.Replicant('blueData');
const redData = nodecg.Replicant('redData');

function update() {
	nodecg.sendMessage('newFishCaught', fishName.value);
        capture_data = red.checked ? redData : blueData;
        capture_data.value[fishName.value] = true;
}
