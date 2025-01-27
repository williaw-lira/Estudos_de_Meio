const estoque = [];
const tabelaEstoque = document.getElementById("tabela-estoque");

function atualizarEstoque() {
    tabelaEstoque.innerHTML = ""; // Limpa a tabela antes de atualizá-la
    estoque.forEach((produto, index) => {
        const produtoDiv = document.createElement("div");
        produtoDiv.className = "produto";

        produtoDiv.innerHTML = `
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
            <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
            <p><strong>Validade:</strong> ${produto.validade}</p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <button onclick="editarProduto(${index})">Editar</button>
            <button onclick="removerProduto(${index})">Remover</button>
        `;
        tabelaEstoque.appendChild(produtoDiv);
    });
}

function cadastrar() {
    const nome = document.getElementById("name").value.trim();
    const quantidade = parseInt(document.getElementById("quantidade").value, 10);
    const preco = parseFloat(document.getElementById("preco").value);
    const validade = document.getElementById("validade").value;
    const categoria = document.getElementById("categoria").value.trim();

    if (!nome || isNaN(quantidade) || isNaN(preco) || !validade || !categoria) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    estoque.push({ nome, quantidade, preco, validade, categoria });
    atualizarEstoque();
    document.getElementById("form-cadastro").reset();
}

function editarProduto(index) {
    const produto = estoque[index];
    document.getElementById("name").value = produto.nome;
    document.getElementById("quantidade").value = produto.quantidade;
    document.getElementById("preco").value = produto.preco;
    document.getElementById("validade").value = produto.validade;
    document.getElementById("categoria").value = produto.categoria;

    estoque.splice(index, 1); // Remove o produto da lista para ser atualizado
    atualizarEstoque();
}

function removerProduto(index) {
    if (confirm("Tem certeza que deseja remover este produto?")) {
        estoque.splice(index, 1);
        atualizarEstoque();
    }
}

function limparEstoque() {
    if (confirm("Tem certeza que deseja limpar todo o estoque?")) {
        estoque.length = 0; // Limpa o array
        atualizarEstoque();
    }
}

// converter obj para json
const jsonEstoque = JSON.stringify(estoque);
console.log(jsonEstoque);
