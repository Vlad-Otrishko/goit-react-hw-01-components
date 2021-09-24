import defaultAvatar from "./Avatar.jpg";
import s from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({
  avatar = defaultAvatar,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          className={s.avatar}
          alt="Аватар пользователя"
          onError={(event) => (event.target.src = defaultAvatar)} //подстановка дефолтной картинки если по ссылке из props не находит изображение
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.category}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.category}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {views} </span>
        </li>
        <li className={s.category}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
