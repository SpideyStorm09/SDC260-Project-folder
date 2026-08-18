/*
    Author: Alexander Smith
    Date: 08/17/2026
    Purpose: interactive javascript functions and loops for trail webpage. 
*/

/* =========================================
   GREENWAY PARK TRAIL DATA
========================================= */

const trails = [
    { name: "River Walk", difficulty: "low", time: 20 },
    { name: "Forest Loop", difficulty: "medium", time: 45 },
    { name: "Hill Summit Trail", difficulty: "high", time: 90 },
    { name: "Lake Side Path", difficulty: "low", time: 30 },
    { name: "Black History Rock", difficulty: "medium", time: 60 },
    { name: "London Lake Trail", difficulty: "high", time: 120 },
    { name: "Alesmi3791 run ridge", difficulty: "medium", time: 50 },
    { name: "Rock Ridge Trail", difficulty: "high", time: 75 }
];

/* =========================================
   TODO: DISPLAY TRAILS VIA LOOP
========================================= */
let trailIndex = 0;

while (trailIndex < trails.length) {
    trailsContainer.innerHTML += `
        <article class="card">
            <h3>${trails[trailIndex].trails}</h3>
            <p>Difficulty: ${trails[trailIndex].difficulty}</p>
            <p>Average Time: ${trails[trailIndex].time}</p>
        </article>

    `;

    trailIndex++;
}


/* =========================================
   TODO: FORM LOGIC
========================================= */
