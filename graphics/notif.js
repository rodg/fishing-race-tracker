import {gsap} from '../node_modules/gsap/index.js';

const nameplateEl = document.getElementById('nameplate')
const nameEl = document.getElementById('name')

nodecg.listenFor('newFishCaught', (newVal) => {
    nameEl.innerHTML = newVal;

    const tl = gsap.timeline();

    tl.from([nameplateEl, nameEl], 1, {width: 0});

    tl.to([nameplateEl, nameEl], 1, {width: 0}, "+=4");

    tl.call(() => {
            nameEl.innerHTML = "";
     //       artEl.style.display = "none"
    })
    tl.set([nameplateEl, nameEl], {width: ""})
});

