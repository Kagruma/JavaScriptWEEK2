const massTom = 8;
const heightTom = 9;
const massJerry = 45;
const heightJerry = 10;

const BMITom = massTom / heightTom **2;
const BMIJerry = massJerry/ heightJerry **2;
const tomHigherBMI = BMITom > BMIJerry;

console.log("Is Tom’s BMI higher than Jerry’s? " + tomHigherBMI);
