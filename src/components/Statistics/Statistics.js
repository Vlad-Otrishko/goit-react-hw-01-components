import s from "./Statistics.module.css";
import PropTypes from "prop-types";

function makeColor() {
  let r = Math.floor(256 * Math.random());
  let g = Math.floor(256 * Math.random());
  let b = Math.floor(256 * Math.random());
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.stat_list}>
        {stats.map((el) => (
          <li
            className={s.item}
            key={el.id}
            style={{ backgroundColor: makeColor() }}
          >
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage + "%"}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
