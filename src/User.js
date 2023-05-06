import { useState } from "react";

export default function User() {   
    let [imagem, setImagem] = useState('assets/img/default-pfp.svg');
    let [nome, setNome] = useState('Usuário');

    function alterarNome() {
        let novoNome = prompt("Qual o seu nome?");
        setNome(novoNome);
    }
    
    function alterarImagem() {
        let novaImagem = prompt("Insira o link da imagem");
        setImagem(novaImagem);
    }

    return (
        <div class="usuario">
            <img src={imagem} alt="imagem de perfil" onClick={alterarImagem}/>
            <div class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon name="pencil" onClick={alterarNome}></ion-icon>
                </span>
            </div>
        </div>
    );
}