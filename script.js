const grid = document.getElementById('grid');
const warnaList = ['Navy', 'Oat Milk, 'Hazelnut', 'Burgundy', 'Mahogany, 'Soft Pink', 'Taupe', 'Mauve'];

warnaList.forEach((warna) => {
    const card = document.createElement('div');
    card.className = 'produk-card';
    card.innerHTML = `
        <div class="foto-box"></div>
        <p>Pashmina ${warna}</p>
        <button>Beli</button>
    `;
    grid.appendChild(card);
});