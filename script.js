document.addEventListener("DOMContentLoaded", () => {
    const datePicker = document.getElementById('date-trajet');
    const timeDisplay = document.getElementById('current-time-display');
    const table = document.getElementById('horaires');

    // Dates des vacances scolaires (Zone A / Besançon) d'après les fiches Mobigo
    const vacancesScolaires = [
        { start: '2026-10-17', end: '2026-11-01' }, // Toussaint
        { start: '2026-12-19', end: '2027-01-03' }, // Noël
        { start: '2027-02-13', end: '2027-02-28' }, // Hiver
        { start: '2027-04-10', end: '2027-04-25' }, // Printemps
        { start: '2027-05-06', end: '2027-05-09' }, // Ascension
        { start: '2027-07-03', end: '2027-09-01' }  // Été
    ];

    function isVacances(dateStr) {
        const d = new Date(dateStr);
        for (let period of vacancesScolaires) {
            const start = new Date(period.start);
            const end = new Date(period.end);
            if (d >= start && d <= end) return true;
        }
        return false;
    }

    // Initialiser la date du jour
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    datePicker.value = `${yyyy}-${mm}-${dd}`;

    function updateSchedule() {
        const now = new Date();
        const currentTimeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
        timeDisplay.textContent = currentTimeStr;

        const selectedDateStr = datePicker.value;
        if (!selectedDateStr || !table) return;

        const selectedDate = new Date(selectedDateStr);
        const dayOfWeek = selectedDate.getDay(); // 0=Dimanche, 1=Lundi, ..., 6=Samedi
        const isVac = isVacances(selectedDateStr);
        const isToday = selectedDateStr === `${yyyy}-${mm}-${dd}`;

        const ths = table.querySelectorAll('thead th');
        const rows = table.querySelectorAll('tbody tr');
        
        // 1. Filtrer les colonnes (jours et vacances)
        for (let col = 1; col < ths.length; col++) {
            const th = ths[col];
            const joursAttr = th.getAttribute('data-jours');
            const periodeAttr = th.getAttribute('data-periode');
            
            let isVisible = true;

            // Vérifier le jour de la semaine
            if (joursAttr) {
                const joursArray = joursAttr.split(',').map(Number);
                if (!joursArray.includes(dayOfWeek)) isVisible = false;
            }

            // Vérifier la période (scolaire ou vacances)
            if (periodeAttr) {
                if (periodeAttr === 'scolaire' && isVac) isVisible = false;
                if (periodeAttr === 'vacances' && !isVac) isVisible = false;
            }

            // Appliquer la visibilité
            const classAction = isVisible ? 'remove' : 'add';
            th.classList[classAction]('hidden-col');
            rows.forEach(row => {
                const td = row.querySelectorAll('td, th')[col];
                if (td) td.classList[classAction]('hidden-col');
            });
        }

        // 2. Calculer le prochain bus uniquement sur les colonnes visibles
        let nextTripFound = false;
        for (let col = 1; col < ths.length; col++) {
            const th = ths[col];
            if (th.classList.contains('hidden-col')) continue; // On ignore les bus qui ne roulent pas

            // Réinitialiser le style
            th.classList.remove('col-past', 'col-next');
            rows.forEach(row => {
                const td = row.querySelectorAll('td')[col];
                if (td) td.classList.remove('col-past', 'col-next');
            });

            if (!isToday) continue; // Pas de surbrillance si ce n'est pas aujourd'hui

            const firstTime = rows[0].querySelectorAll('td')[col].textContent.trim();
            const lastTime = rows[rows.length - 1].querySelectorAll('td')[col].textContent.trim();

            if (lastTime !== "" && lastTime < currentTimeStr) {
                th.classList.add('col-past');
                rows.forEach(row => row.querySelectorAll('td')[col].classList.add('col-past'));
            } else if (!nextTripFound && firstTime >= currentTimeStr) {
                th.classList.add('col-next');
                rows.forEach(row => row.querySelectorAll('td')[col].classList.add('col-next'));
                nextTripFound = true;
            }
        }
    }

    updateSchedule();
    datePicker.addEventListener('change', updateSchedule);
    setInterval(updateSchedule, 60000);
});