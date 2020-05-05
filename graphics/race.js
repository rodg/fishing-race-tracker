const blueData = nodecg.Replicant('blueData');
const redData = nodecg.Replicant('redData');

// New listener which updates on replicant data changes
// persists over browser refresh but not server restart
blueData.on('change', (newData) => {
    var caught;
    Object.keys(blueData.value).forEach( (name) => {
        if(blueData.value[name]){
            caught = document.getElementById(name)
            caught.classList.add("caught");
            caught.classList.add("blue");
        }
    });
});

redData.on('change', (newData) => {
    var caught;
    Object.keys(redData.value).forEach( (name) => {
        if(redData.value[name]){
            caught = document.getElementById(name)
            caught.classList.add("caught");
            caught.classList.add("red");
        }
    });
});
