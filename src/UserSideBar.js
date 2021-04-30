export default function UserSideBar(props) {
    return (
        <div class="usuario">
            <img src={props.userLogo} alt="user logo" />
            <div class="texto">
                <strong>{props.userInsta}</strong>
                {props.userName}
            </div>
        </div>
    );
}