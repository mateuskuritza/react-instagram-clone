import Post from "./Post";

export default function Feed(){
    return(
        <div class="posts">
            <Post topLogo="assets/img/meowed.svg" topUser="meowed" feedImg="assets/img/gato-telefone.svg" likeLogo="assets/img/respondeai.svg" likeUser="respondeai" likes="101.523" />
            <Post topLogo="assets/img/barked.svg" topUser="barked" feedImg="assets/img/dog.svg" likeLogo="assets/img/adorable_animals.svg" likeUser="adorable_animals" likes="99.159" />
        </div>
    );
}