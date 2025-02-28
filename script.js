const boy = document.querySelector('body');
const container = document.querySelector('.container');
const colorText = document.querySelector('.color-text');

const values = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

// Function to generate random hex color

function getGradient() {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.trunc(Math.random() * values.length);
        console.log(randomNumber);
        
    }
        
}

getGradient();