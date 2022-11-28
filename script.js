const wftUrl = "https://yesno.wtf/api";

const imgArticle = document.getElementById('image-article');
const textAnswer = document.getElementById('text-answer');
const thinking = document.getElementById('thinking');

const randomNo = ["hell no", "not a chance", "i don't know", "no way", "don't talk to me", "purely impossible", "fuck off", "never", "nope", "i don't care", "stop it", "back off", "i can't tell", "why would i care", "impossible", "don't disturb me", "no no", "you can't", "no chance", "hmmm no"];
const randomYes = ["yes", "okay", "sure", "why not", "go ahead", "definely", "100%", "i'm with you", "wish you luck", "it's worth it", "worth a try", "go go go", "go on", "try it", "i will not stop you", "hmm maybe", "think about it", "think twice", "you can do it", "ahhh sure", "of course", "you got it", "i believe in you", "hell yeahhhh"];

const showThinking = display => thinking.style.display = display

const decide = event => {
    event.preventDefault();
    imgArticle.innerHTML = "";
    textAnswer.innerHTML = ""

    showThinking("block")

    fetch(wftUrl, {
        method: 'GET',
        headers: {
            'accept': 'application/api'
        }
    }).then( async response => {
        const result = await response.json();

        const img = document.createElement('img');
        img.setAttribute('src', result.image)
        img.classList = "w-full bg-center h-full"

        const answer = result.answer === "yes" 
            ? randomYes[Math.floor(Math.random()* randomYes.length + 1)]
            : randomNo[Math.floor(Math.random()* randomNo.length + 1)]
            
        //Display image and text 
        imgArticle.append(img);
        textAnswer.textContent = answer;
        document.body.style.cssText = `
            background-image:url(${result.image});
            background-repeat:no-repeat;
            background-size:cover;
        `;
        showThinking('none')
    })
}

document.querySelector('form').addEventListener('submit', decide);