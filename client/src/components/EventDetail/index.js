import { React } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./detail.module.css";
import getEventDetail from "../../actions/getEventDetail";

export default function EventDetail(props) {
  const dispatch = useDispatch();

  const eventDetail = useSelector((state) => state.eventDetail);

  useEffect(() => {
    dispatch(getEventDetail(props.match.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={`${s.container}`}>
      {eventDetail ? (
        <div className={`${s.event}`}>
          <img
            className={`${s.img}`}
            src={eventDetail.image}
            alt="not found"
          />

          <div className={`${s.detail}`}>
            <div className={`${s.header}`}>
              <h2>{eventDetail.title}</h2>
              <div className={`${s.cajita}`}>
                <span className={`${s.score}`}>{recipeDetail.score}</span>
                <span className={`${s.flag}`}>Score</span>
                <span className={`${s.score}`}>{recipeDetail.healthiness}</span>
                <span className={`${s.flag}`}>Healthiness</span>
              </div>
            </div>
            {eventDetail.Diets?.map((diet) => (
              <span className={`${s.diet}`}> {diet.name}</span>
            ))}
            <span className={`${s.summary}`}>{recipeDetail.summary}</span>
            {recipeDetail.steps ? (
              <div>
                <span className={`${s.flag}`}>Step by step</span>
                <span>{recipeDetail.steps}</span>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <h3>Loading</h3>
      )}
    </div>
  );
}
