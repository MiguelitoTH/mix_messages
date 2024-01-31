const signs = ['Sun','Moon','Earth'];
const aboutSun =['The sun often thought of as warm and bright','The sund often burns bright and hard','The sun will always be there even past humanity'];
const quoteSigns =['try to walk today with warmth and balance','with your warmth like try to brighten someone up today','doing what makes you happy can allow you to brigten you\'re self like the sun'];

let randomMizer = Math.floor(Math.random()*3);
let randomMizer2 = Math.floor(Math.random()*3);
let randomMizer3 = Math.floor(Math.random()*3);

let sunRandomMessage = [];

console.log(randomMizer);
console.log(randomMizer2);
console.log(randomMizer3);

const checksRandomSign = () =>{
let newSign = signs[randomMizer];
//let newAboutSun = aboutSun[randomMizer];
//let newQuoteSigns = quoteSigns[randomMizer]

if(newSign === 'Sun'){
sunRandomMessage.push('Your sign is: ' +signs[randomMizer]+ ', about the sun: '+aboutSun[randomMizer2]+', your sign\'s quote this time is: ' +quoteSigns[randomMizer3]+'.');
return sunRandomMessage.join(' ');
};

}
console.log(checksRandomSign());