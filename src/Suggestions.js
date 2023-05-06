import Suggestion from "./Suggestion";

export default function Suggestions() {
    const sugestoes = [
        { image: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes", reason: "Segue você" },
        { image: "assets/img/chibirdart.svg", user: "chibirdart", reason: "Segue você" },
        { image: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", reason: "Novo no Instagram" },
        { image: "assets/img/adorable_animals.svg", user: "adorable_animals", reason: "Segue você" },
        { image: "assets/img/smallcutecats.svg", user: "smallcutecats", reason: "Segue você"}
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
                {sugestoes.map ( sugestao => <Suggestion key={sugestao.user} user={sugestao.user} image={sugestao.image} reason={sugestao.reason}/> )}
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}