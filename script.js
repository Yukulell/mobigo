document.addEventListener("DOMContentLoaded", () => {
    const db = {
        "lr201_aller": {
            stops: ["BESANÇON Centre St-Pierre", "BESANÇON PEM Viotte", "BESANÇON Temis", "RIOZ Centre", "RIOZ ZA Charrière", "VESOUL Pôle multimodal"],
            trips: [
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["06:25", "06:33", "06:42", "06:59", "07:02", "07:25"] },
                { jours: [1,2,3,4,5], periode: "scolaire", times: ["07:25", "07:35", "07:45", "08:03", "08:06", "08:35"] },
                { jours: [1,2,3,4,5], periode: "vacances", times: ["07:30", "07:40", "07:50", "08:04", "08:07", "08:30"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["08:35", "08:44", "08:55", "09:12", "09:15", "09:40"] },
                { jours: [1,2,3,4,5], periode: "scolaire", times: ["09:10", "09:18", "09:26", "09:43", "09:46", "10:10"] },
                { jours: [1,2,3,4,5,0], periode: "toutes", times: ["10:50", "10:58", "11:06", "11:23", "11:26", "11:50"] },
                { jours: [6], periode: "scolaire", times: ["12:10", "12:18", "12:26", "12:43", "12:46", "13:10"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["13:10", "13:18", "13:26", "13:43", "13:46", "14:10"] },
                { jours: [1,2,3,4,5], periode: "toutes", times: ["14:50", "14:58", "15:06", "15:23", "15:25", "15:50"] },
                { jours: [1,2,3,4,5], periode: "scolaire", times: ["16:20", "16:29", "16:40", "16:57", "17:00", "17:25"] },
                { jours: [1,2,3,4,5,0], periode: "toutes", times: ["17:05", "17:15", "17:26", "17:44", "17:47", "18:15"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["17:35", "17:45", "17:56", "18:14", "18:17", "18:45"] },
                { jours: [1,2,3,4,5], periode: "toutes", times: ["18:10", "18:19", "18:30", "18:47", "18:50", "19:15"] },
                { jours: [1,2,3,4,5,0], periode: "toutes", times: ["19:10", "19:20", "19:28", "19:45", "19:48", "20:10"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["20:10", "20:18", "20:26", "20:43", "20:46", "21:10"] }
            ]
        },
        "lr201_retour": {
            stops: ["VESOUL Pôle multimodal", "RIOZ ZA Charrière", "RIOZ Centre", "BESANÇON Temis", "BESANÇON PEM Viotte", "BESANÇON Centre St-Pierre"],
            trips: [
                { jours: [1,2,3,4,5], periode: "toutes", times: ["05:50", "06:12", "06:15", "06:32", "06:42", "06:50"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["06:25", "06:47", "06:50", "07:07", "07:17", "07:25"] },
                { jours: [1,2,3,4,5], periode: "toutes", times: ["06:50", "07:12", "07:15", "07:34", "07:44", "07:56"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["07:30", "07:52", "07:55", "08:16", "08:26", "08:36"] },
                { jours: [1,2,3,4,5,6,0], periode: "toutes", times: ["07:50", "08:11", "08:14", "08:34", "08:44", "08:56"] },
                { jours: [1,2,3,4,5], periode: "scolaire", times: ["08:50", "09:11", "09:14", "09:32", "09:42", "09:50"] },
                { jours: [1,2,3,4,5], periode: "toutes", times: ["10:50", "11:11", "11:14", "11:32", "11:42", "11:50"] },
                { jours: [1,2,3,4,5,6,0], periode: "toutes", times: ["12:50", "13:11", "13:14", "13:32", "13:42", "13:50"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["13:50", "14:11", "14:14", "14:32", "14:42", "14:50"] },
                { jours: [1,2,3,4,5], periode: "scolaire", times: ["15:50", "16:11", "16:14", "16:32", "16:42", "16:50"] },
                { jours: [1,2,3,4,5], periode: "toutes", times: ["16:50", "17:12", "17:15", "17:36", "17:46", "18:00"] },
                { jours: [1,2,3,4,5,6,0], periode: "toutes", times: ["17:30", "17:52", "17:55", "18:16", "18:26", "18:40"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["18:17", "18:39", "18:42", "18:59", "19:09", "19:17"] },
                { jours: [1,2,3,4,5,6,0], periode: "toutes", times: ["19:15", "19:36", "19:39", "19:57", "20:07", "20:15"] }
            ]
        },
        "lr202_aller": {
            stops: ["BESANÇON Centre St-Pierre", "BESANÇON PEM Viotte", "BESANÇON Beauquier", "BESANÇON Temis", "BESANÇON Valentin", "DEVECEY Centre", "VORAY Mairie", "VORAY Gymnase", "BUTHIERS Abribus", "PERROUSE École", "CROMARY Fontaine", "NEUVELLE Poste", "RIOZ Centre", "RIOZ Collège", "RIOZ ZA Charrière", "HYET Aire", "VESOUL Pôle multimodal"],
            trips: [
                { jours: [1,2,3,4,5], periode: "scolaire", times: ["06:10", "06:18", "06:23", "06:26", "06:31", "06:39", "06:41", "06:43", null, null, null, null, "06:51", null, "06:53", "06:58", "07:21"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["06:55", "07:03", "07:08", "07:11", "07:16", "07:24", "07:26", "07:28", "07:31", "07:34", "07:37", "07:42", "07:45", "07:49", "07:51", "07:56", "08:16"] },
                { jours: [0], periode: "toutes", times: ["07:50", "07:58", "08:03", "08:06", "08:11", "08:19", "08:21", "08:24", null, null, null, null, "08:33", null, "08:35", "08:42", "09:06"] },
                { jours: [3], periode: "scolaire", times: ["10:05", "10:12", "10:16", "10:19", "10:24", "10:32", "10:34", "10:36", null, null, null, null, "10:45", null, "10:47", "10:52", "11:11"] },
                { jours: [1,2,3,4,5,6], periode: "scolaire", times: ["12:20", "12:28", "12:33", "12:36", "12:41", "12:48", "12:50", "12:52", "12:55", "12:58", "13:01", "13:06", "13:09", null, "13:11", null, "13:31"] },
                { jours: [0], periode: "toutes", times: ["12:20", "12:28", "12:33", "12:36", "12:41", "12:48", "12:51", "12:54", null, null, null, null, "13:10", null, "13:12", "13:18", "13:28"] },
                { jours: [1,2,3,4,5], periode: "vacances", times: ["12:20", "12:25", "12:29", "12:34", "12:39", "12:47", "12:49", "12:51", null, null, null, null, "13:01", null, "13:04", "13:08", "13:28"] },
                { jours: [1,2,3,4,5,6,0], periode: "toutes", times: ["16:25", "16:35", "16:42", "16:45", "16:50", "16:58", "17:01", "17:04", null, null, null, null, "17:10", null, "17:13", "17:19", "17:41"] },
                { jours: [1,2,3,4,5,6], periode: "scolaire", times: ["17:15", "17:25", "17:32", "17:35", "17:40", "17:48", "17:51", "17:54", null, null, null, null, "18:00", null, "18:03", "18:09", "18:31"] },
                { jours: [1,2,4,5], periode: "scolaire", times: ["18:15", "18:23", "18:28", "18:31", "18:36", "18:44", "18:47", "18:50", "19:01", "19:04", "19:07", "19:12", "18:56", null, "18:59", "19:06", "19:26"] },
                { jours: [1,2,3,4,5], periode: "vacances", times: ["18:25", "18:33", "18:38", "18:41", "18:46", "18:54", "18:56", "18:58", null, null, null, null, "19:15", null, "19:18", null, null] }
            ]
        },
        "lr202_retour": {
            stops: ["VESOUL Pôle multimodal", "HYET Aire", "RIOZ ZA Charrière", "RIOZ Collège", "RIOZ Centre", "NEUVELLE Poste", "CROMARY Fontaine", "PERROUSE École", "BUTHIERS Abribus", "VORAY Gymnase", "VORAY Mairie", "DEVECEY Centre", "BESANÇON Valentin", "BESANÇON Temis", "BESANÇON Beauquier", "BESANÇON PEM Viotte", "BESANÇON Centre St-Pierre"],
            trips: [
                { jours: [1,2,3,4,5], periode: "toutes", times: ["06:30", "06:45", "06:49", null, "06:51", null, null, null, null, "07:00", "07:02", "07:05", "07:14", "07:20", "07:27", "07:36", "07:46"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["07:30", "07:45", "07:49", null, "07:51", null, null, null, null, "08:00", "08:02", "08:05", "08:14", "08:20", "08:27", "08:36", "08:46"] },
                { jours: [1,2,3,4,5,6,0], periode: "toutes", times: ["08:30", "08:45", "08:49", null, "08:51", null, null, null, null, "09:00", "09:02", "09:05", "09:12", "09:17", "09:23", "09:33", "09:41"] },
                { jours: [0], periode: "toutes", times: ["10:30", "10:45", "10:49", null, "10:51", null, null, null, null, "11:00", "11:02", "11:05", "11:12", "11:17", "11:23", "11:28", "11:36"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["12:30", "12:45", "12:49", null, "12:51", null, null, null, null, "13:00", "13:02", "13:05", "13:12", "13:17", "13:23", "13:33", "13:41"] },
                { jours: [1,2,3,4,5], periode: "scolaire", times: ["16:45", "17:00", "17:04", null, "17:06", null, null, null, null, "17:34", "17:36", "17:39", "17:46", "17:49", "18:01", "18:13", "18:21"] },
                { jours: [1,2,4,5], periode: "scolaire", times: [null, null, null, "17:15", "17:16", "17:20", "17:25", "17:28", "17:31", null, null, null, null, null, null, null, "18:21"] },
                { jours: [1,2,3,4,5,6], periode: "toutes", times: ["17:55", "18:10", "18:14", null, "18:16", null, null, null, null, "18:25", "18:27", "18:31", "18:39", "18:43", "18:48", "18:56", "19:06"] },
                { jours: [1,2,3,4,5], periode: "vacances", times: ["18:25", "18:40", "18:44", null, "18:46", null, null, null, null, "18:55", "18:57", "19:00", "19:07", "19:12", "19:18", "19:28", "19:36"] }
            ]
        }
    };

    const vacancesScolaires = [
        { start: '2026-10-17', end: '2026-11-01' },
        { start: '2026-12-19', end: '2027-01-03' },
        { start: '2027-02-13', end: '2027-02-28' },
        { start: '2027-04-10', end: '2027-04-25' },
        { start: '2027-05-06', end: '2027-05-09' },
        { start: '2027-07-03', end: '2027-09-01' }
    ];

    const START_HOUR = 4;
    const END_HOUR = 22;
    
    const ligneSelect = document.getElementById('ligne-select');
    const departSelect = document.getElementById('depart-select');
    const arriveeSelect = document.getElementById('arrivee-select');
    const dateInput = document.getElementById('date-trajet');
    const timeLabelsContainer = document.getElementById('time-labels');
    const timelineGrid = document.getElementById('timeline-grid');
    const currentTimeLine = document.getElementById('current-time-line');
    const scrollArea = document.getElementById('agenda-scroll-area');

    for (let h = START_HOUR; h <= END_HOUR; h++) {
        const label = document.createElement('div');
        label.className = 'time-label';
        label.style.top = `${(h - START_HOUR) * 60}px`;
        label.textContent = `${String(h).padStart(2, '0')}:00`;
        timeLabelsContainer.appendChild(label);
    }

    const today = new Date();
    dateInput.value = today.toISOString().split('T')[0];

    function isVacances(dateStr) {
        const d = new Date(dateStr);
        return vacancesScolaires.some(v => d >= new Date(v.start) && d <= new Date(v.end));
    }

    function timeToMinutes(timeStr) {
        if (!timeStr) return null;
        const [h, m] = timeStr.split(':').map(Number);
        return h * 60 + m;
    }

    function updateStops() {
        const ligne = db[ligneSelect.value];
        departSelect.innerHTML = '';
        ligne.stops.forEach((stop, index) => {
            if (index < ligne.stops.length - 1) departSelect.add(new Option(stop, index));
        });
        updateArrivals();
    }

    function updateArrivals() {
        const ligne = db[ligneSelect.value];
        const departIndex = parseInt(departSelect.value);
        arriveeSelect.innerHTML = '';
        ligne.stops.forEach((stop, index) => {
            if (index > departIndex) arriveeSelect.add(new Option(stop, index));
        });
        arriveeSelect.value = ligne.stops.length - 1;
        renderTimeline();
    }

    function renderTimeline() {
        document.querySelectorAll('.trip-card').forEach(e => e.remove());

        const ligneId = ligneSelect.value;
        const dateStr = dateInput.value;
        const dIndex = parseInt(departSelect.value);
        const aIndex = parseInt(arriveeSelect.value);

        if (!dateStr || isNaN(dIndex) || isNaN(aIndex)) return;

        const dateObj = new Date(dateStr);
        const dayOfWeek = dateObj.getDay();
        const vac = isVacances(dateStr);
        const trips = db[ligneId].trips;
        const ligneStops = db[ligneId].stops;

        let tripsToRender = [];

        trips.forEach(trip => {
            if (!trip.jours.includes(dayOfWeek)) return;
            if (trip.periode === "scolaire" && vac) return;
            if (trip.periode === "vacances" && !vac) return;

            const depTime = trip.times[dIndex];
            const arrTime = trip.times[aIndex];
            if (!depTime || !arrTime) return;

            tripsToRender.push({
                depTime, arrTime, 
                depMins: timeToMinutes(depTime), 
                arrMins: timeToMinutes(arrTime),
                dName: ligneStops[dIndex], aName: ligneStops[aIndex]
            });
        });

        tripsToRender.sort((a, b) => a.depMins - b.depMins);

        tripsToRender.forEach(trip => {
            const realDuration = trip.arrMins - trip.depMins;
            trip.displayHeight = realDuration < 40 ? 40 : realDuration; 
            trip.visualEnd = trip.depMins + trip.displayHeight; 
        });

        let clusters = [];
        let currentCluster = [];
        let clusterEnd = 0;

        tripsToRender.forEach(trip => {
            if (currentCluster.length === 0) {
                currentCluster.push(trip);
                clusterEnd = trip.visualEnd;
            } else {
                if (trip.depMins < clusterEnd) {
                    currentCluster.push(trip);
                    clusterEnd = Math.max(clusterEnd, trip.visualEnd);
                } else {
                    clusters.push(currentCluster);
                    currentCluster = [trip];
                    clusterEnd = trip.visualEnd;
                }
            }
        });
        if (currentCluster.length > 0) clusters.push(currentCluster);

        clusters.forEach(cluster => {
            let columns = []; 
            cluster.forEach(trip => {
                let placed = false;
                for (let col of columns) {
                    if (trip.depMins >= col[col.length - 1].visualEnd) {
                        col.push(trip); trip.colIndex = columns.indexOf(col); placed = true; break;
                    }
                }
                if (!placed) { trip.colIndex = columns.length; columns.push([trip]); }
            });

            const cardWidth = 92 / columns.length;

            cluster.forEach(trip => {
                const card = document.createElement('div');
                card.className = 'trip-card';
                card.dataset.arrivalMins = trip.arrMins;
                
                card.style.top = `${trip.depMins - (START_HOUR * 60)}px`;
                card.style.height = `${trip.displayHeight}px`;
                card.style.width = `calc(${cardWidth}% - 2px)`;
                card.style.left = `${8 + (trip.colIndex * cardWidth)}%`;

                if (trip.displayHeight > 45) {
                    card.innerHTML = `<strong>${trip.depTime} -> ${trip.arrTime}</strong><span>${trip.dName}<br>> ${trip.aName}</span>`;
                } else {
                    card.innerHTML = `<strong>${trip.depTime} -> ${trip.arrTime}</strong><span>${trip.dName} > ${trip.aName}</span>`;
                }

                timelineGrid.appendChild(card);
            });
        });

        updateCurrentTime();
    }

    function updateCurrentTime() {
        const now = new Date();
        const currentMins = now.getHours() * 60 + now.getMinutes();
        const topPx = currentMins - (START_HOUR * 60);
        
        if (topPx >= 0 && topPx <= (END_HOUR - START_HOUR) * 60) {
            currentTimeLine.style.display = 'block';
            currentTimeLine.style.top = `${topPx}px`;
        } else {
            currentTimeLine.style.display = 'none';
        }
        
        document.querySelectorAll('.trip-card').forEach(card => {
            const cardArrival = parseInt(card.dataset.arrivalMins);
            if (cardArrival < currentMins && dateInput.value === today.toISOString().split('T')[0]) {
                card.classList.add('past');
            } else {
                card.classList.remove('past');
            }
        });
    }

    function scrollToCurrentTime() {
        const now = new Date();
        const currentMins = now.getHours() * 60 + now.getMinutes();
        const topPx = currentMins - (START_HOUR * 60);
        if (topPx > 200) {
            scrollArea.scrollTop = topPx - 200;
        }
    }

    ligneSelect.addEventListener('change', updateStops);
    departSelect.addEventListener('change', updateArrivals);
    arriveeSelect.addEventListener('change', renderTimeline);
    dateInput.addEventListener('change', renderTimeline);

    updateStops();
    scrollToCurrentTime();
    setInterval(updateCurrentTime, 60000);
});
