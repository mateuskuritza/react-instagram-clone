import Sugestion from "./Sugestion";
import UserSideBar from "./UserSideBar";

export default function Sidebar() {

    const sugestionsList = [
        {
            img: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            razao: "Segue você"
        }, {
            img: "assets/img/chibirdart.svg",
            name: "chibirdart",
            razao: "Segue você"
        }, {
            img: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
            razao: "Novo no Instagram"
        }, {
            img: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
            razao: "Segue você"
        }, {
            img: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
            razao: "Segue você"
        }
    ];

    const userConfigs = [{
        userInsta: "catanacomics",
        userName: "Catana",
        userLogo: "assets/img/catanacomics.svg"
    }]

    return (
        <div class="sidebar">

            {userConfigs.map(user => <UserSideBar userName={user.userInsta} userLogo={user.userLogo} userInsta={user.userInsta} />)}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {sugestionsList.map(sugestion => <Sugestion img={sugestion.img} name={sugestion.name} razao={sugestion.razao} />)}

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
        </div>
    );
}