const firebaseConfig = {
    apiKey: "AIzaSyBBKBd39B0q45eUFgNPwaNhBxZb2xCl8jE",
    authDomain: "sitevendas-26cf6.firebaseapp.com",
    projectId: "sitevendas-26cf6",
    storageBucket: "sitevendas-26cf6.firebasestorage.app",
    messagingSenderId: "295196585038",
    appId: "1:295196585038:web:7ce698d248d60882afa71f"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

// Função para carregar produtos
function loadStore() {
    db.collection("produtos").onSnapshot(snap => {
        const grid = document.getElementById('products-grid');
        grid.innerHTML = "";
        snap.forEach(doc => {
            const p = doc.data();
            grid.innerHTML += `
                <div class="product-card">
                    <img src="${p.img}">
                    <h4>${p.nome}</h4>
                    <p>R$ ${p.preco}</p>
                    <button class="btn-main">COMPRAR</button>
                </div>`;
        });
    });
}
