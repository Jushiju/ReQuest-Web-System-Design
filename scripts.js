const quests = [
    {
        title: "The Coding Conundrum",
        description: "Help a client with a tricky piece of code. Expertise in JavaScript required.",
        reward: "300 gold coins (USD)",
        difficulty: "Medium",
        timeLimit: "5 days"
    },
    {
        title: "The Designer's Dilemma",
        description: "Design a website with a modern twist, but with fantasy influences. Figma or Adobe skills needed.",
        reward: "500 gold coins (USD)",
        difficulty: "Easy",
        timeLimit: "3 days"
    },
    {
        title: "The Game Development Quest",
        description: "Collaborate with a team to develop an indie game. Unity experience is a must.",
        reward: "700 gold coins (USD)",
        difficulty: "Hard",
        timeLimit: "10 days"
    },
    {
        title: "The Social Media Strategist",
        description: "Help a startup build their social media presence. Creativity and marketing knowledge needed.",
        reward: "350 gold coins (USD)",
        difficulty: "Medium",
        timeLimit: "6 days"
    },
    {
        title: "The Content Creator Challenge",
        description: "Create engaging content for a brand's social media. Video editing skills are a plus.",
        reward: "400 gold coins (USD)",
        difficulty: "Medium",
        timeLimit: "4 days"
    },
    {
        title: "The SEO Specialist",
        description: "Optimize a website for search engines. Knowledge of SEO tools is required.",
        reward: "450 gold coins (USD)",
        difficulty: "Medium",
        timeLimit: "7 days"
    }
];

let currentQuestIndex = 0;

function loadQuests() {
    const questBoard = document.querySelector('.quest-board');
    questBoard.innerHTML = '';
    quests.forEach((quest, index) => {
        const questElement = document.createElement('div');
        questElement.className = 'quest';
        questElement.innerHTML = `
            <h3>${quest.title}</h3>
            <p>${quest.description}</p>
            <p><strong>Reward:</strong> ${quest.reward}</p>
            <p><strong>Difficulty:</strong> ${quest.difficulty}</p>
            <p><strong>Time Limit:</strong> ${quest.timeLimit}</p>
            <button class="apply-button">Apply</button>
        `;
        questBoard.appendChild(questElement);
    });
}

function updateQuestDisplay() {
    const quests = document.querySelectorAll('.quest');
    quests.forEach((quest, index) => {
        quest.style.display = index === currentQuestIndex ? 'block' : 'none';
    });
}

document.getElementById('next-quest').addEventListener('click', () => {
    currentQuestIndex = (currentQuestIndex + 1) % quests.length;
    updateQuestDisplay();
});

document.getElementById('prev-quest').addEventListener('click', () => {
    currentQuestIndex = (currentQuestIndex - 1 + quests.length) % quests.length;
    updateQuestDisplay();
});

// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Load quests on page load
window.onload = function() {
    loadQuests();
    updateQuestDisplay();
};
