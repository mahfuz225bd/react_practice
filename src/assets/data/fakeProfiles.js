const faker = require("faker");

let data = [];

function pushFakeData() {
    const generate_name = faker.name.findName();
    const generate_username = generate_name.toLocaleLowerCase().split(" ")[0];

    const generateFakeSkills = (num) => {
        const skills = ["Advising", "Coaching", "Decision making", "Delegating", "Diplomacy", "Interviewing", "Motivation", "Problem solving", "Dedication", "Ethics", "Honesty", "Integrity", "Maturity", "Patience", "Presentation", "Reliability", "Self confidence", "Coordinating", "Goal setting", "Multi-tasking", "Prioritizing", "Scheduling", "Time management", "Collaboration", "Communication", "Flexibility", "Listening", "Observation", "Participation", "Respect", "Sharing", "Data analysis", "Numeracy", "Reporting", "Research", "Troubleshooting", "Car maintenance", "Cleaning", "Driving", "Making a bed", "Painting a room", "Parenting", "Studying", "Vacuuming", "Adaptability", "Caring", "Common sense", "Cooperation", "Curiosity", "Effort", "Flexibility", "Friendship", "Initiative", "Integrity", "Organization", "Patience", "Perseverance", "Problem solving", "Responsibility", "Sense of humor", "Accountability", "Communication", "Imagination", "Initiative", "Organization", "Problem solving", "Questioning", "Reading", "Time management", "Writing", "Concentration", "Coordination", "Flexibility", "Footwork", "Power", "Precision", "Tactics", "Teamwork", "Cybersecurity", "Cloud computing", "Programming", "Virtualization", "Web Design", "Web Development"]
        let mySkills = []

        for (let i = 0; i < num; i++) {
            let randomNum = faker.datatype.number(skills.length);
            let randomSkill = skills[randomNum]
            if(!mySkills.includes(randomSkill)){            
                mySkills.push(randomSkill)
            }        
        }
        
        return mySkills
    }

    data.push({
    name: generate_name,
    title: faker.name.jobTitle(),
    skills: [...generateFakeSkills(faker.datatype.number({min: 3, max: 5}))],
    socialLinks: [
        {
        icon: "fab fa-facebook-f",
        url: "https://facebook.com/" + generate_username,
        label: "Facebook",
        },
        {
        icon: "fab fa-twitter",
        url: "https://twitter.com/" + generate_username,
        label: "Twitter",
        },
        {
        icon: "fab fa-linkedin",
        url: "https://in.linkedin.com/in/" + generate_username,
        label: "LinkedIn",
        },
        {
        icon: "fab fa-github",
        url: "https://github.com/" + generate_username,
        label: "GitHub",
        },
    ],
    });
}

let pushFakeDataNth = n => {
    for (let i = 0; i < n; i++) {
        pushFakeData();
    }
}

// Make 10 Fake Data
pushFakeDataNth(10)

export default data;