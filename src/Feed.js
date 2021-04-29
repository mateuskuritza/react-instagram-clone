import Post from "./Post";

export default function Feed(){

    const posts = [{
        topLogo:"assets/img/meowed.svg",
        topUser:"meowed",
        feedImg:"assets/img/gato-telefone.svg",
        likeLogo:"assets/img/respondeai.svg",
        likeUser:"respondeai",
        likes:"101.523"
    },{
        topLogo:"assets/img/barked.svg",
        topUser:"barked",
        feedImg:"assets/img/dog.svg",
        likeLogo:"assets/img/adorable_animals.svg",
        likeUser:"adorable_animals",
        likes:"99.159"
    }]

    return(
        <div class="posts">
            {posts.map( element => <Post topLogo={element.topLogo} topUser={element.topUser} feedImg={element.feedImg} likeLogo={element.likeLogo} likeUser={element.likeUser} likes={element.likes} />)}
        </div>
    );
}
