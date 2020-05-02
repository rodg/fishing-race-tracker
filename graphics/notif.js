import {gsap} from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate')
const nameEl = document.getElementById('name')
//const twitterEl = document.getElementById('twitter')
//const artEl = document.getElementById('album')

nodecg.listenFor('newFishCaught', (newVal) => {
    nameEl.innerHTML = newVal;
    //twitterEl.innerHTML = newVal;
    //artEl.src = newVal;
    //artEl.style.display = "block";

    const tl = gsap.timeline();

    tl.from([nameplateEl, nameEl], 1, {width: 0});

    tl.to([nameplateEl, nameEl], 1, {width: 0}, "+=4");

    tl.call(() => {
            nameEl.innerHTML = "";
     //       artEl.style.display = "none"
    })
    tl.set([nameplateEl, nameEl], {width: ""})
});

