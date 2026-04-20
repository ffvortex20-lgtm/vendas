// Configuração extraída do seu arquivo google-services.json
const firebaseConfig = {
    apiKey: "AIzaSyBBKBd39B0q45eUFgNPwaNhBxZb2xCl8jE",
    authDomain: "sitevendas-26cf6.firebaseapp.com",
    projectId: "sitevendas-26cf6",
    storageBucket: "sitevendas-26cf6.firebasestorage.app",
    messagingSenderId: "295196585038",
    appId: "1:295196585038:web:7ce698d248d60882afa71f" // Substitua se seu App ID real for diferente
};

// Inicializar Firebase (Apenas Auth é necessário agora)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ==========================================
// --- DEFINIÇÃO DE PRODUTOS ESTÁTICOS ---
// ==========================================
// Edite este array para alterar os produtos que aparecem no site.
// Nenhuma alteração é salva no Firebase, é tudo visual.

const produtosEstaticos = [
    {
        id: "p1",
        nome: "Produto Drip Épico",
        preco: 97.90,
        img: "https://via.placeholder.com/300x300/1a1a1a/ff0000?text=PRODUTO+1", // URL da imagem
        link_compra: "https://pay.kiwify.com.br/exemplo1" // SEU LINK EXTERNO AQUI
    },
    {
        id: "p2",
        nome: "Pack Vortex Premium",
        preco: 149.90,
        img: "https://via.placeholder.com/300x300/1a1a1a/ff0000?text=PRODUTO+2",
        link_compra: "https://pay.kiwify.com.br/exemplo2" // SEU LINK EXTERNO AQUI
    },
    {
        id: "p3",
        nome: "Acesso Vitalício Drip",
        preco: 297.00,
        img: "https://via.placeholder.com/300x300/1a1a1a/ff0000?text=PRODUTO+3",
        link_compra: "https://pay.hotmart.com/exemplo3" // SEU LINK EXTERNO AQUI
    }
];
