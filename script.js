const quoteInfo = [
    {
        book: "Kiss of Deception",
        bookQuote: "Today was the day a thousand dreams would die and a single dream would be born.",
        context: "The day Lia flees her wedding day duty dies behind her, but she follows her dreams.",
        meaning: "Fate and destiny is not chosen for you. You get to decide who you are and what dreams you want to follow."
    },

    {
        book: "Kiss of Deception",
        bookQuote: "Taking another life, even a quilty one, should never be easy.",
        context: "Lia's mother tells her this when she is witnessing an execution.",
        meaning: "Even if a crime is punishable by death, it shouldn't be easy to kill them because they are still human. This quote shows the depth of humanity."
    },

    {
        book: "Kiss of Deception",
        bookQuote: "Who was this girl who thumbed her nose at two kingdoms?",
        context: "Rafe asks himself this after he learns that the Lia fled the wedding. This question suggests that her decision increases his respect for her because of her bravery.",
        meaning: "Those who stand up for themselves and others stand out. Rafe sees the bravery of Lia and is drawn to her."
    },

    {
        book: "Kiss of Deception",
        bookQuote: "There were two ways to approach the innevitable: Being dragged to meet your fate or taking the offensive",
        context: "As Lia is being brought a camp after getting captured by Kaden. At this moment, she decides that she is going to 'the offensive'",
        meaning: "Many circumstance cannot be avoided and we can either let it slowly happen or you can let it change you."
    },

    {
        book: "Heart of Betrayal",
        bookQuote: "If one can't be trusted in love, one can't be trusted in anything. Some things can't be forgiven.",
        context: "When lia reflects on her Kaden's reltionship, she relaizes that she can't trust someone who isn't honest about their feelings.",
        meaning: "Relationships require extensive amounts of trust. If you can't be trusted with that kind of love and commitment, then you can't be trusted at all"
    },

    {
        book: "Heart of Betrayal",
        bookQuote: "Maybe there was no one way to define it. Maybe there were as many shades of love as the blues of the sky.",
        context: "Lia weighs her love for Kaden and Rafe. She decides that there is no one answer. She loves them both differently.",
        meaning: "There is no one way to define love. You can love different people for different reasons. That doesn't mean that your love is any less strong."
    },

    {
        book: "Heart of Betrayal",
        bookQuote: "It can take years to mold a dream. It takes only a fraction of a second for it to be shattered.",
        context: "Lia has planned to make her own decisions, not just decision from an old prophesy, for years. But she soon realizes that the rest of the kingdoms have other plans for her. ",
        meaning: "It can take a long time to decide what you want and how you can get it. It only takes one person to shatter your hopes of getting it."
    },

    {
        book: "Heart of Betrayal",
        bookQuote: "The prince has grand dreams. Is it worth it to have any other kind?",
        context: "When Rafe is talking to Komizar as the princes emissary he discusses his plans for his kingdom.",
        meaning: "If your hopes and dreams aren't big and cause you to reach within yourself then are they worth it? If they don't change you why would you search after it?"
    },

    {
        book: "Beauty of Darkness",
        bookQuote: "It doesn't matter how many universes come and go. I will always remember who were together.",
        context: "When the kingoms are tearing Rafe and Lia apart, he confesses his love for her. They have progressed throughout the books and he will always remember how far they've come.",
        meaning: "Relationships come and go. Rafe understood that current and future circustances might pull them apart. Whatever happens remembering memories made and what you learned is most important."
    },

    {
        book: "Beauty of Darkness",
        bookQuote: "You couldn't command love to stop any more than marriage document could order it to appear. Maybe love had to bleed away a drop at a time until your heart was numb and cold and mostly dead. ",
        context: "When Lia realizes that Rafe is betrothed and has other obligations, she realizes that she needs to let him go. Letting go Rafe requires time and healing.",
        meaning: "Love is the most powerful feeling. Letting go of someone that you love dearly can be difficult process. It requires a slow recovery that can drain you in the process."
    },

    {
        book: "Beauty of Darkness",
        bookQuote: "When we lose a battle, we have to regroup and move forward again. Choose an alternate path if necessary. But if we dwell on every action we've taken, it will cripple us, and soon we'll take no action at all.",
        context: "Throughout the book many plans have failed and they have taken loses. Lia understands this truth and invites her friends not to lose hope as they go into war.",
        meaning: "We can't let loses hold us back from progressing further in the future. If we focus on what we couldn't do, then we will never move forward."
    },

    {
        book: "Beauty of Darkness",
        bookQuote: "It was only me, a thousand blinking stars, and the beauty of darkness stretched to the ends of the universe, snuffing out the endless games of courts and kingdoms.",
        context: "After the war is over, Lia reflects on what her future will look like. Whether that includes Rafe or not.",
        meaning: "The kingdoms had no control over Lia's life and what her future would look like. Nobody can decide what you do except you. It's just you, your choices, everything that can influence those choices."
    }
];

const quoteContent = document.getElementById('quote-container')
const quoteBox = document.getElementById('quote');
const quoteContext = document.getElementById('context');
const quoteMeaning = document.getElementById('meaning');

const btns = document.querySelectorAll(".book-button");

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        
        const bookName = btn.textContent
        const bookQuotes = quoteInfo.filter(q => q.book === bookName);
        const randomIndex = Math.floor(Math.random() * bookQuotes.length); 
        

        showQuote(bookQuotes, randomIndex);

    });

});

function showQuote(filteredList, randomIndex) {

    quoteContent.textContent = '';

    const quoteBox = document.createElement('div');
    const quoteContext = document.createElement('div');
    const quoteMeaning = document.createElement('div');
    const quote = filteredList[randomIndex];
    quoteBox.classList.add('quote');
    quoteContext.classList.add('context');
    quoteMeaning.classList.add('meaning');

    quoteBox.textContent = quote.bookQuote;
    quoteContext.textContent = quote.context;
    quoteMeaning.textContent = quote.meaning;

    quoteContent.appendChild(quoteBox);
    quoteContent.appendChild(quoteContext);
    quoteContent.appendChild(quoteMeaning);

    quoteContent.innerHTML = `
        <div class="quote">
            <p>${quote.bookQuote}</p>
        </div>
        <div class="context">
            <p>${quote.context}</p>
        </div>
        <div class="meaning">
            <p>${quote.meaning}</p>
        </div>
    `;
};

