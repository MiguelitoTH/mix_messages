const signs = ['Sun','Moon','Earth'];

const aboutSun =['The sun often thought of as warm and bright','The sund often burns bright and hard','The sun will always be there even past humanity'];
const quoteSun =['try to walk today with warmth and balance','with your warmth like try to brighten someone up today','doing what makes you happy can allow you to brigten you\'re self like the sun'];

const aboutMoon = ['The Moon is dark but calm','The Moon can seem warm and bright in the right condition','The Moon can give a since of tranquility',];
const quoteMoon = ['be calm and breathe dont let your thoughts take you away','just like how the moon is all alone but yet still glims in the night be okay with lonelyness and you might shine','just how the moon can calm you, add the end of the day focus on yourself'];

const aboutEarth = ['The Earth is  balance and cetered ','The Earth can be destructive ','The Earth can attach you to the plants'];
const quoteEarth = ['just like the earth stay grounded and think','Be careful with your destructive nature try to grow and benifit from the Earth','The earth can feed so make sure you eat today'];


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
sunRandomMessage.push('Your sign is: ' +signs[randomMizer]+ ', about the sun: '+aboutSun[randomMizer2]+', your sign\'s quote this time is: ' +quoteSun[randomMizer3]+'.');
return sunRandomMessage.join(' ');
}else if(newSign === 'Moon'){
sunRandomMessage.push('Your sign is: ' +signs[randomMizer]+ ', about the Moon: '+aboutMoon[randomMizer2]+', your sign\'s quote this time is: ' +quoteMoon[randomMizer3]+'.');
return sunRandomMessage.join(' ');
}else if(newSign === 'Earth'){
sunRandomMessage.push('Your sign is: ' +signs[randomMizer]+ ', about the Earth: '+aboutEarth[randomMizer2]+', your sign\'s quote this time is: ' +quoteEarth[randomMizer3]+'.');
return sunRandomMessage.join(' ');

};
}
console.log(checksRandomSign());