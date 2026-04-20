// Configuração extraída do seu arquivo JSON
const firebaseConfig = {
  apiKey: "AIzaSyBBKBd39B0q45eUFgNPwaNhBxZb2xCl8jE",
  authDomain: "sitevendas-26cf6.firebaseapp.com",
  projectId: "sitevendas-26cf6",
  storageBucket: "sitevendas-26cf6.firebasestorage.app",
  messagingSenderId: "295196585038",
  appId: "1:295196585038:web:7ce698d248d60882afa71f" // Gerado para Web
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// --- LOGIN COM GOOGLE ---
const btnLogin = document.getElementById('login-google');
if(btnLogin) {
    btnLogin.onclick = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };
}

auth.onAuthStateChanged(user => {
    if (user) {
        if(document.getElementById('user-info')){
            document.getElementById('login-google').style.display = 'none';
            document.getElementById('user-info').style.display = 'block';
            document.getElementById('user-name').innerText = user.displayName;
        }
    }
});

// --- CARREGAR PRODUTOS NA LOJA ---
const listaContainer = document.getElementById('lista-produtos');
if(listaContainer) {
    db.collection("produtos").orderBy("data", "desc").onSnapshot(snapshot => {
        listaContainer.innerHTML = "";
        snapshot.forEach(doc => {
            const p = doc.data();
            listaContainer.innerHTML += `
                <div class="card">
                    <img src="${p.imagem}" width="100%">
                    <h3>${p.nome}</h3>
                    <p>R$ ${p.preco}</p>
                    <button class="btn-buy">Comprar</button>
                </div>
            `;
        });
    });
}
