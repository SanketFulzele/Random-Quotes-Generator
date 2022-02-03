 const quoteText = document.querySelector('.quote'),
      authorName = document.querySelector(".author .name"),
        quoteBtn = document.querySelector('button'),
        soundBtn = document.querySelector(".sound"),
         copyBtn = document.querySelector(".copy"),
        instaBtn = document.querySelector(".insta");      





// random quote generator function

function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    //fetching random data from the API and parsing it into javascript object
   fetch ("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author ;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
   } )
}

soundBtn.addEventListener('click', () =>{
    //the SpeechSynthesisUtterance is a web search API that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
    //speak method of speechSynthesis speaks the utterance 
});

copyBtn.addEventListener('click', () =>{
    // copying the quote text on copyBtn click
    // writeText() property write the specified text string to the clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});

instaBtn.addEventListener("click", ()=>{
    let instaUrl = `https://www.instagram.com/?url=${quoteText.innerText}`;
    window.open(instaUrl);
});


quoteBtn.addEventListener('click', randomQuote);





































































































