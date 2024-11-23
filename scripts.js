let jobList = [];

const addQuest = (title, description) => {
    const quest = {
        title: title,
        description: description,
    };
    jobList.push(quest);
    displayJobs();
};

const displayJobs = () => {
    const jobListContainer = document.getElementById("job-list");
    jobListContainer.innerHTML = "";
    jobList.forEach((job) => {
        const jobItem = document.createElement("div");
        jobItem.className = "quest";
        jobItem.innerHTML = `
            <h3><i class="fas fa-briefcase"></i> ${job.title}</h3>
            <p>${job.description}</p>
            <ul>
                <li><i class="fas fa-coins"></i> Reward: TBD (USD)</li>
                <li><i class="fas fa-exclamation-triangle"></i> Difficulty: TBD</li>
                <li><i class="fas fa-clock"></i> Time Limit: TBD</li>
            </ul>
            <button class="apply-button"><i class="fas fa-check"></i> Accept Quest</button>
        `;
        jobListContainer.appendChild(jobItem);
    });
};

document.getElementById("quest-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("quest-title").value;
    const description = document.getElementById("quest-description").value;
    addQuest(title, description);
    document.getElementById("quest-form").reset();
});
