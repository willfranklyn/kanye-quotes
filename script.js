document.getElementById("new-message").addEventListener("click", buttonSubmit);

async function fetchData() {
    const options = {
        method: 'GET'
    }
    const res = await fetch('https://api.kanye.rest', options);
    const record = await res.json();
    document.getElementById("message").innerHTML = record.quote +   ' - Kanye West';
}

function buttonSubmit() {
    fetchData();
}

fetchData();