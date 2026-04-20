// Cole o seu objeto firebaseConfig do Firebase Console aqui
const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_AUTH_DOMAIN",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE_BUCKET",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Elementos da UI
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const userInfo = document.getElementById('userInfo');
const produtosContainer = document.getElementById('produtos-container');

// Autenticação com Google
loginBtn.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
        console.log("Usuário logado:", result.user);
    }).catch((error) => {
        console.error("Erro no login:", error);
    });
});

logoutBtn.addEventListener('click', () => {
    auth.signOut();
});

// Monitorar estado da autenticação
auth.onAuthStateChanged(user => {
    if (user) {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        userInfo.innerText = `Olá, ${user.displayName}`;
    } else {
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        userInfo.innerText = '';
    }
});

// Carregar Produtos da Loja
function carregarProdutos() {
    db.collection("produtos").onSnapshot((querySnapshot) => {
        produtosContainer.innerHTML = "";
        querySnapshot.forEach((doc) => {
            const produto = doc.data();
            const produtoCard = `
                <div class="product-card">
                    <img src="${produto.image_url}" alt="${produto.name}">
                    <h3>${produto.name}</h3>
                    <p>R$ ${produto.price.toFixed(2)}</p>
                    <button>Adicionar ao Carrinho</button>
                </div>
            `;
            produtosContainer.innerHTML += produtoCard;
        });
    });
}

// Iniciar carregamento
carregarProdutos();
