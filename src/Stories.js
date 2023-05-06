import Story from "./Story"

const stories = [
    { image: "assets/img/9gag.svg", user: "9gag" },
    { image: "assets/img/meowed.svg", user: "meowed" },
    { image: "assets/img/barked.svg", user: "barked" },
    { image: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" },
    { image: "assets/img/wawawicomics.svg", user: "wawawicomics" },
    { image: "assets/img/respondeai.svg", user: "respondeai" },
    { image: "assets/img/filomoderna.svg", user: "filomoderna" },
    { image: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }
]

export default function Stories() {
    return (
        <div class="stories">
            {stories.map ( story => <Story key={story.user} user={story.user} image={story.image} /> )}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}