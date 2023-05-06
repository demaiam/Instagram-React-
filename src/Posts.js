import Post from "./Post";

export default function Posts() {
    const posts = [
        { pfp: "assets/img/meowed.svg", image: "assets/img/gato-telefone.svg", user: "meowed", likes: 10 },
        { pfp: "assets/img/barked.svg", image: "assets/img/dog.svg", user: "barked", likes: 26 },
        { pfp: "assets/img/meowed.svg", image: "assets/img/gato-telefone.svg", user: "meowed", likes: 14 }
    ]
    
    return (
        <div class="posts">
            {posts.map ( post => <Post key={post.user} user={post.user} image={post.image} pfp={post.pfp} likes={post.likes}/> )}
        </div>
    )
}