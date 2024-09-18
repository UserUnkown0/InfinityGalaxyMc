// Simular algunos datos dinámicos
const totalServers = 10;
const activeUsers = 5;
const serverUptime = "99.9%";

// Mostrar los datos en las tarjetas
document.getElementById('total-servers').innerText = totalServers;
document.getElementById('active-users').innerText = activeUsers;

// Funcionalidad adicional para agregar logs
const logsList = document.getElementById('logs-list');

// Añadir nuevo log para simular actividad reciente
function addLog(logMessage) {
    const newLog = document.createElement('li');
    newLog.textContent = logMessage;
    logsList.appendChild(newLog);
}

// Ejemplo de cómo agregar un log dinámicamente
setTimeout(() => {
    addLog('User "JaneDoe" connected on 2024-09-11');
}, 2000);

// Se podría añadir funcionalidad de logout y redireccionamiento aquí si es necesario
