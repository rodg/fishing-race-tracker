import {gsap} from '../node_modules/gsap/index.js';

const capture_data = nodecg.Replicant('redData');

// New listener which updates on replicant data changes
// persists over browser refresh but not server restart
capture_data.on('change', (newData) => {
    var caught;
    Object.keys(capture_data.value).forEach( (name) => {
        if(capture_data.value[name]){
            caught = document.getElementById(name)
            caught.classList.add("caught");
        }
    }); 
});

// old listener based on messages
/*nodecg.listenFor('newFishCaught', (name) => {
    caught = document.getElementById(name);
    caught.classList.add("caught");
});*/


