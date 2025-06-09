
const form = document.getElementById('terminForm');
const lista = document.getElementById('terminetList');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {
        emri: formData.get('emri'),
        data: formData.get('data'),
        ora: formData.get('ora'),
        telefoni: formData.get('telefoni'),
    };

    await fetch('http://localhost:5001/api/termin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    form.reset();
    merrTerminet(); // rifresko listen
});

async function merrTerminet() {
    const res = await fetch('http://localhost:5001/api/termin');
    const terminet = await res.json();

    lista.innerHTML = '';
    terminet.forEach(t => {
        const li = document.createElement('li');
        li.textContent = `${t.emri} - ${t.data} në ora ${t.ora}`;
        lista.appendChild(li);
    });
}

merrTerminet(); // thirre sapo hapet faqja
