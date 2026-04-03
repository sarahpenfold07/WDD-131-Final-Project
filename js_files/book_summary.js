

const books = [
    {
        title: "Kiss of Deception",
        summary: "Princess Arabella Celestine Idris Jezelia flees her wedding day to work at an inn under the alias Lia. She falls in love with the prince she was meant to marry, Rafe, and the assassin sent to kill her, Kaden. Lia struggles to keep her identity hidden while adjusting to life at the inn.",
        loveTriangle: "Rafe and Kaden both compete for Lia's affection while living in Terravin. They each try to gain her favor, but everything changes when Lia discovers Kaden's true past.",
        themes: [
            "Tradition",
            "Duty vs. desire",
            "Deception and secrets"
        ]
    },
    {
        title: "Heart of Betrayal",
        summary: "After being captured by Kaden, Lia adapts to life in Venda while Rafe learns how deeply his kingdom is hated there. Rafe and Lia plan to escape and return to Dalbreck, but the Komizar has his own plans for Lia that threaten their escape.",
        loveTriangle: "While sharing a room in Venda, Kaden and Lia grow closer as they learn about each other's difficult pasts. Meanwhile, Rafe becomes increasingly jealous and determined to take Lia far away from Venda.",
        themes: [
            "Betrayal",
            "Self-discovery",
            "Political intrigue"
        ]
    },
    {
        title: "Beauty of Darkness",
        summary: "After barely escaping Venda, Rafe cares for Lia as they travel toward an outpost. Lia eventually learns that Rafe does not plan to return her to her kingdom, so she journeys back alone and discovers the full truth about the war in Morrighan.",
        loveTriangle: "Rafe and Lia grow closer on their journey to safety, but conflict arises when she realizes he won't take her home. Kaden later brings her back to Morrighan and vows to protect her. In the end, Lia chooses Rafe while Kaden finds love with her friend Pauline.",
        themes: [
            "Leadership",
            "Love vs. duty",
            "Survival"
        ]
    }
];

const header = [
    {
        "overview": "The Remnant Chronicles follows Princess Lia of Morrighan, who flees her unwanted political wedding only to find herself pursued by both the jilted Prince and a deadly Assassin, neither of whose identities she knows, as they all cross paths in a remote village. After a compelling deception and a tragic betrayal, Lia is captured and brought to the enemy kingdom of Venda, where she must navigate the dangerous court of the Komizar while wrestling with the truth of her own secret 'Gift' of sight and the two men who love her. The series culminates in an epic confrontation where Lia must embrace her destiny and unite the fractured kingdoms against a rising tide of ancient prophecy and war to save her people and forge a new future for the Remnant world."
    }
];


const title = [
    {
        "bookSummaryTitle": "Book Summaries"
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
        btn1: "Kiss of Deception",
        btn2: "Heart of Betrayal",
        btn3: "Beauty of Darkness"
    }
];



const titleContent = document.querySelector('#logo h1');

let titleHTML = ''

title.forEach((bookSummaryH1) => {
    titleHTML += `
        <h1>${bookSummaryH1.bookSummaryTitle}</h1>
    `
})

titleContent.innerHTML = titleHTML


const navContent = document.querySelector('nav ul');

let navHTML = ''

nav.forEach((bookSummaryNav) => {
    navHTML += `
        <li><a href="home.html">${bookSummaryNav.nav1}</a></li>
        <li><a href="character.html">${bookSummaryNav.nav2}</a></li>
        <li><a href="book_summary.html">${bookSummaryNav.nav3}</a></li>
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


const summaryInfo = document.getElementById('summary-info-container');
const plotBox = document.getElementById('plot');
const loveBox = document.getElementById('love-triangle');
const themeBox = document.getElementById('theme');

const btns2 = document.querySelectorAll('.book-button')

btns2.forEach(btn2 => {
    btn2.addEventListener("click", () => {
        
        const bookName = btn2.textContent
        const bookSummary = books.find(q => q.title === bookName);
        

        showSummary(bookSummary);
    
    });

});

function showSummary(filteredList) {

    const plotBox = document.createElement('div');
    const loveBox = document.createElement('div');
    const themeBox = document.createElement('div');

    const info = filteredList


    plotBox.classList.add('plot');
    loveBox.classList.add('love');
    themeBox.classList.add('theme');

    
    summaryInfo.innerHTML = `
        <div class="plot">
            <p><strong>Summary: </strong>${info.summary}</p>
        </div>
        <div class="love">
            <p><strong>Love Triangle Development: </strong>${info.loveTriangle}</p>
        </div>
        <div class="theme">
            <p><strong>Themes: </strong>${info.themes.join(', ')}</p>
        </div>
    `;
};


