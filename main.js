window.onload = function () {
    if (playersData.length === 0) {
        document.addEventListener('playersLoaded', initializeUI);
    } else {
        initializeUI();
    }
};

function initializeUI() {
    const pc = document.getElementById('players-container');
    if (pc) {
        const searchBar = document.getElementById('search-bar');
        const batchButtons = document.querySelectorAll('#batch-buttons .filter-btn');
        const roleButtons = document.querySelectorAll('#role-buttons .filter-btn');
        const categoryButtons = document.querySelectorAll('#cat-buttons .filter-btn');
        const clearFilters = document.getElementById('clear-filters');

        let selectedBatch = 'all';
        let selectedRole = 'all';
        let selectedCategory = 'all'; 

        function renderPlayers(filteredPlayers) {
            pc.innerHTML = '';
            filteredPlayers.forEach(p => {
                pc.innerHTML += `
                <div class="card">
                    <img src="${p.image}" alt="${p.name}" onerror="this.src='image/players/image.jpg'">
                    <h3>${p.name}</h3>
                    <p>Batch: ${p.batch}</p>
                    <p>Category: ${p.category}</p>
                    <p>${p.role}</p>
                    ${p.bat !== "Not applicable" ? `<p>${p.bat} batsman</p>` : ""}
                    ${p.ball !== "Not applicable" ? `<p>${p.ball} bowler</p>` : ""}
                    <p>Team: ${p.team || 'Unassigned'}</p>
                </div>`;
            });
        }

        renderPlayers(playersData);

        searchBar.addEventListener('input', () => {
            const searchValue = searchBar.value.toLowerCase();
            const filteredPlayers = playersData.filter(p => 
                p.name.toLowerCase().includes(searchValue) &&
                (selectedBatch === 'all' || p.batch === selectedBatch) &&
                (selectedRole === 'all' || 
                    (selectedRole === p.bat || selectedRole === p.ball || p.role.includes(selectedRole))) &&
                (selectedCategory === 'all' || p.category === selectedCategory) 
            );
            renderPlayers(filteredPlayers);
        });

        batchButtons.forEach(button => {
            button.addEventListener('click', () => {
                batchButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                selectedBatch = button.getAttribute('data-batch');
                const filteredPlayers = playersData.filter(p => 
                    (selectedBatch === 'all' || p.batch === selectedBatch) &&
                    (selectedRole === 'all' || 
                        (selectedRole === p.bat || selectedRole === p.ball || p.role.includes(selectedRole))) &&
                    (selectedCategory === 'all' || p.category === selectedCategory) 
                );
                renderPlayers(filteredPlayers);
            });
        });

        roleButtons.forEach(button => {
            button.addEventListener('click', () => {
                roleButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                selectedRole = button.getAttribute('data-role');
                const filteredPlayers = playersData.filter(p => 
                    (selectedBatch === 'all' || p.batch === selectedBatch) &&
                    (selectedRole === 'all' || 
                        (selectedRole === p.bat || selectedRole === p.ball || p.role.includes(selectedRole))) &&
                    (selectedCategory === 'all' || p.category === selectedCategory) 
                );
                renderPlayers(filteredPlayers);
            });
        });

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                selectedCategory = button.getAttribute('data-category');
                const filteredPlayers = playersData.filter(p => 
                    (selectedBatch === 'all' || p.batch === selectedBatch) &&
                    (selectedRole === 'all' || 
                        (selectedRole === p.bat || selectedRole === p.ball || p.role.includes(selectedRole))) &&
                    (selectedCategory === 'all' || p.category === selectedCategory)
                );
                renderPlayers(filteredPlayers);
            });
        });

        clearFilters.addEventListener('click', () => {
            searchBar.value = '';
            selectedBatch = 'all';
            selectedRole = 'all';
            selectedCategory = 'all'; 
            
            batchButtons.forEach(btn => btn.classList.remove('active'));
            roleButtons.forEach(btn => btn.classList.remove('active'));
            categoryButtons.forEach(btn => btn.classList.remove('active')); 
            
            document.querySelector('#batch-buttons [data-batch="all"]').classList.add('active');
            document.querySelector('#role-buttons [data-role="all"]').classList.add('active');
            document.querySelector('#cat-buttons [data-category="all"]').classList.add('active'); 
            
            renderPlayers(playersData);
        });
    }

    const tc = document.getElementById('teams-container');
    if (tc) {
        const teamModal = document.getElementById('team-modal');
        const modalClose = document.getElementById('modal-close');
        const teamLogo = document.getElementById('team-logo');
        const teamCaptain = document.getElementById('team-captain');
        const teamPlayers = document.getElementById('team-players');

        teams.forEach(t => {
            const teamCard = document.createElement('div');
            teamCard.classList.add('card');
            teamCard.innerHTML = `
                <img src="${t.logo}" alt="${t.name || t.owner}">
                <h3>${t.name}</h3>
            `;
        
            teamCard.addEventListener('click', () => {
                teamModal.style.display = 'block';
                teamLogo.src = t.logo;
                teamCaptain.textContent = `Owner: ${t.owner}`;
                teamPlayers.innerHTML = '';
                if (t.players.length === 0) {
                    teamPlayers.innerHTML = '<div style="margin-bottom: 30px; color: red;">No players have been assigned to this team yet.</div>';
                    return;
                }
        
                t.players.forEach(id => {
                    const player = playersData.find(p => p.id === id);
                    if (player) {
                        const playerCard = document.createElement('div');
                        playerCard.classList.add('card');
                        if (player.name === t.captain) {
                            playerCard.classList.add('captain-highlight');
                        }
                        playerCard.innerHTML = `
                            <img src="${player.image}" alt="${player.name}" onerror="this.src='image/players/image.jpg'">
                            <h3>${player.name}</h3>
                            <p>${player.role}</p>
                            ${player.bat !== "Not applicable" ? `<p>${player.bat} batsman</p>` : ""}
                            ${player.ball !== "Not applicable" ? `<p>${player.ball} bowler</p>` : ""}
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
    database.ref('pointTable').on('value', (snapshot) => {
        if (snapshot.exists()) {
            const pointTableData = [];
            snapshot.forEach(childSnapshot => {
                pointTableData.push(childSnapshot.val());
            });
            
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
                        ${pointTableData.map(team => `
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
        } else {
            pt.innerHTML = '<p style="text-align: center;">No point table data available.</p>';
        }
    });
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
