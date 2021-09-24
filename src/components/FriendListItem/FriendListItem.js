import defaultAvatar from "./Avatar.jpg";
import s from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar = defaultAvatar, name, isOnline }) => {
  return (
    <li className={`${s["item"]} ${isOnline && s["isOnline"]}`}>
      <div className={s.wrapper}>
        <span className={s.status}></span>
        <img
          className={s.avatar}
          src={avatar}
          alt="My friend"
          width="48"
          onError={(event) => (event.target.src = defaultAvatar)} //подстановка дефолтной картинки если по ссылке из props не находит изображение
        />
        <p className={s.name}>{name}</p>
      </div>
    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
