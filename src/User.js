import { useState } from "react";

export default function User() {   
    let [imagem, setImagem] = useState('https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg');
    let [nome, setNome] = useState('Usuário');

    function alterarNome() {
        let novoNome = prompt("Qual o seu nome?");
        !novoNome ? novoNome = 'Usuário' : novoNome = novoNome;
        setNome(novoNome);
    }
    
    function alterarImagem() {
        let novaImagem = prompt("Insira o link da imagem");
        !novaImagem ? novaImagem = 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg' : novaImagem = novaImagem;
        setImagem(novaImagem);
    }

    return (
        <div class="usuario">
            <img src={imagem} alt="imagem de perfil" onClick={alterarImagem} data-test="profile-image"/>
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon name="pencil" onClick={alterarNome} data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}