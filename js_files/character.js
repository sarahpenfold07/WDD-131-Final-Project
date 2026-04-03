const characters = [

    {
    "name": "Kaden",
    "identity": "The Assassin sent by the kingdom of Venda to kill Princess Lia",
    "origin": "Venda, the savage kingdom considered an enemy to Morrighan",
    "skills": [
        "Highly trained assassin",
        "Expert in tracking",
        "Expert fighter",
        "Camouflage",
        "Stealth",
        "Highly observant"
    ],
    "personality": [
        "Brooding",
        "Intense",
        "Cynical",
        "Emotionally guarded",
        "Fiercely loyal",
        "Protective",
        "Dry wit"
    ]
    },
    {
    "name": "Rafe",
    "identity": "The Crown Prince (later King) of Dalbreck",
    "origin": "The Royal House of Dalbreck, the wealthiest and most militarily advanced kingdom",
    "skills": [
        "Political savvy",
        "Excellent swordsman",
        "Adept strategist",
        "Skilled at maintaining disguises"
    ],
    "personality": [
        "Commanding",
        "Regal",
        "Kind",
        "Brave",
        "Stubborn",
        "Blunt",
        "Highly protective"
    ]
    },
    {
    "name": "Lia",
    "identity": "Princess (First Daughter) of Morrighan",
    "origin": "The Royal House of Morrighan, a kingdom known for tradition and desert terrain",
    "skills": [
        "Resilient",
        "Quick survival learner",
        "Observant",
        "Strong leader",
        "Skilled in battle",
        "Political leadership"
    ],
    "personality": [
        "Headstrong",
        "Compassionate",
        "Stubborn",
        "Devoted to close friends",
        "Natural leader",
        "Inspires loyalty"
    ]
}
];

const header = [
    {
        "overview": "The The Remnant Chronicles by Mary E. Pearson features characters who are complex, morally conflicted, and shaped by the political tensions between their kingdoms. Rather than simple heroes or villains, many characters struggle between duty, loyalty, and personal feelings. Characters like Princess Arabella Celestine Idris Jezelia (Lia), Kaden, and Prince Rafe often hide their true identities or motives, creating tension and mystery as the story unfolds. The series emphasizes strong character growth, especially as individuals are forced to confront war, betrayal, love, and leadership. Overall, the characters tend to be resilient, determined, and deeply human, balancing moments of vulnerability with courage as they navigate a dangerous and politically divided world."
    }
];

const title = [
    {
        "characterTitle": "Characters"
    }
];

const nav = [
    {
        nav1: "Home", 
        nav2: "Character", 
        nav3: "Book Summary"
    }
];


const buttons = [
    {
        btn1: "Kaden",
        btn2: "Lia",
        btn3: "Rafe"
    }
];



const titleContent = document.querySelector('#logo h1');

let titleHTML = ''

title.forEach((characterH1) => {
    titleHTML += `
        <h1>${characterH1.characterTitle}</h1>
    `
});

titleContent.innerHTML = titleHTML


const navContent = document.querySelector('nav ul');

let navHTML = ''

nav.forEach((characterNav) => {
    navHTML += `
        <li><a href="home.html">${characterNav.nav1}</a></li>
        <li><a href="character.html">${characterNav.nav2}</a></li>
        <li><a href="book_summary.html">${characterNav.nav3}</a></li>
    `;
});

navContent.innerHTML = navHTML

const headerContent = document.getElementById('overview')

let headerHTML = ''

header.forEach((top) => {
    headerHTML += `
        <p>${top.overview}</p>
    `
});

headerContent.innerHTML = headerHTML



const btnHome = document.getElementById('button-container');

let buttonsHTML = ''

buttons.forEach((btn) => {
    buttonsHTML +=`
        <button class="book-button">${btn.btn1}</button>
        <button class="book-button">${btn.btn2}</button>
        <button class="book-button">${btn.btn3}</button>
    `
})

btnHome.innerHTML = buttonsHTML


const summaryInfo = document.getElementById('character-info-container');
const identityBox = document.getElementById('identity');
const originBox = document.getElementById('origin');
const skillsBox = document.getElementById('skills');
const personBox = document.getElementById('personality')

const btns2 = document.querySelectorAll('.book-button')

btns2.forEach(btn2 => {
    btn2.addEventListener("click", () => {
        
        const characterName = btn2.textContent
        const charactersInfo = characters.find(q => q.name === characterName);
        

        showCharacters(charactersInfo);
    
    });

});

function showCharacters(filteredList) {

    const identityBox = document.createElement('div');
    const originBox = document.createElement('div');
    const skillsBox = document.createElement('div');
    const personBox = document.createElement('div');

    const info = filteredList


    identityBox.classList.add('identity');
    originBox.classList.add('origin');
    skillsBox.classList.add('skills');
    personBox.classList.add('personality')

    
    summaryInfo.innerHTML = `
        <div class="identity">
            <p><strong>Identity: </strong>${info.identity}</p>
        </div>
        <div class="origin">
            <p><strong>Origin: </strong>${info.origin}</p>
        </div>
        <div class="skills">
            <p><strong>Skills: </strong>${info.skills.join(', ')}</p>
        </div>
        <div class="personality">
        <p><strong>Personality: </strong>${info.personality.join(', ')}</p>
        </div>
    `;
};



