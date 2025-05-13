window.onload = function () {
    const pc = document.getElementById('players-container');
    if (pc) {
        players.forEach(p => {
            pc.innerHTML += `
            <div class="card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p>Age: ${p.age}</p>
                <p>Role: ${p.role}</p>
                <p>Team: ${p.team}</p>
            </div>`;
        });
    }

    const tc = document.getElementById('teams-container');
    const teamModal = document.getElementById('team-modal');
    const modalClose = document.getElementById('modal-close');
    const teamLogo = document.getElementById('team-logo');
    const teamCaptain = document.getElementById('team-captain');
    const teamPlayers = document.getElementById('team-players');

    if (tc) {
        teams.forEach(t => {
            const teamCard = document.createElement('div');
            teamCard.classList.add('card');
            teamCard.innerHTML = `
                <img src="${t.logo}" alt="${t.name}">
                <h3>${t.name}</h3>
                <p>Captain: ${t.captain}</p>
            `;
        
            teamCard.addEventListener('click', () => {
                teamModal.style.display = 'block';
                teamLogo.src = t.logo;
                teamCaptain.textContent = `Owner: ${t.owner}`;
                teamPlayers.innerHTML = '';
        
                t.players.forEach(id => {
                    const player = players.find(p => p.id === id);
                    if (player) {
                        const playerCard = document.createElement('div');
                        playerCard.classList.add('card');
                        if (player.name === t.captain) {
                            playerCard.classList.add('captain-highlight');
                        }
                        playerCard.innerHTML = `
                            <img src="${player.image}" alt="${player.name}">
                            <h3>${player.name}</h3>
                            <p>Age: ${player.age}</p>
                            <p>Role: ${player.role}</p>
                        `;
                        teamPlayers.appendChild(playerCard);
                    }
                });
            });
        
            tc.appendChild(teamCard);
        });

        modalClose.addEventListener('click', () => {
            teamModal.style.display = 'none';
        });
    
        window.addEventListener('click', e => {
            if (e.target === teamModal) {
                teamModal.style.display = 'none';
            }
        });
    }

    const pt = document.getElementById('point-table-container');
    if (pt) {
        pt.innerHTML = `
            <table class="points-table">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Played</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Points</th>
                        <th>NRR</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${pointTable.map(team => `
                        <tr>
                            <td>${team.team}</td>
                            <td>${team.played}</td>
                            <td>${team.won}</td>
                            <td>${team.lost}</td>
                            <td>${team.points}</td>
                            <td>${team.nrr}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    const rc = document.getElementById('results-container');
    if (rc) {
    rc.innerHTML = matchResults.map(m => `
        <div class="match-card ${m.status === 'Upcoming' ? 'upcoming' : ''}">
        <h3>${m.match}</h3>
        <div class="teams">
            <div class="team">
            <strong>${m.teamA}</strong>
            <p>${m.scoreA || '-'}</p>
            </div>
            <span>vs</span>
            <div class="team">
            <strong>${m.teamB}</strong>
            <p>${m.scoreB || '-'}</p>
            </div>
        </div>
        <p class="result-text">
            ${m.status === 'Completed' ? `Winner: <strong>${m.winner}</strong>` : '<em>Match Yet To Be Played</em>'}
        </p>
        </div>
    `).join('');
    }

};
