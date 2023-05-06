import { useState } from "react";

export default function Post(props) {
    let [coracao, setCoracao] = useState('heart-outline');
    let [classeCoracao, setClasseCoracao] = useState('preto');
    let [salvar, setSalvar] = useState('bookmark-outline');
    let curtes = props.likes;
    let [classCurtes, setClassCurtes] = useState(curtes);
    
    function curtirPostBotao() {
        if (coracao === 'heart-outline') {
            setCoracao('heart');
            setClasseCoracao('vermelho');
            setClassCurtes(curtes + 1);
        } else {
            setCoracao('heart-outline');
            setClasseCoracao('preto');
            setClassCurtes(curtes);
        }
    }

    function curtirPostImagem() {
        if (coracao === 'heart-outline') {
            setCoracao('heart');
            setClasseCoracao('vermelho');
            setClassCurtes(curtes + 1);
        } 
    }
    
    function salvarPost() {
        if (salvar === 'bookmark-outline') {
            setSalvar('bookmark');
        } else {
            setSalvar('bookmark-outline');
        }
    }

    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.pfp} alt={props.user} />
                    {props.user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.image} alt={props.image} data-test="post-image" onClick={curtirPostImagem}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name={coracao} class={classeCoracao} onClick={curtirPostBotao} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={salvar} onClick={salvarPost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>respondeai</strong> e <strong>outras {classCurtes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}