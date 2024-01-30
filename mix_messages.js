const signs = ['Sun','Moon','Earth'];
const aboutSun =['The sun often thought of as warm and bright','The sund often burns bright and hard','The sun will always be there even past humanity'];
const quoteSigns =['try to walk today with warmth and balance','with your warmth like try to brighten someone up today','doing what makes you happy can allow you to brigten you\'re self like the sun'];

let randomMizer = Math.floor(Math.random()*3);

const checksRandomSign = sign =>{
let newSign = signs[randomMizer];
let newAboutSun = aboutSun[randomMizer];
return `${newSign}, ${newAboutSun}`;
};

console.log(checksRandomSign(signs));