import React from "react";
import { addEventWish, removeEventWish, removeEvent } from "../../actions";
import s from "./card.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as MdIcons from "react-icons/md";
import * as TiIcons from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Card({event}){
  const dispatch = useDispatch();
  const wish = useSelector((state) => state.wishEvents);

  // <Link  to={`/recipes/${props.id}`}>

  return (
    <div>
      
    </div>
  );
}

{/* <div className={`${s.container}`}>
        <img src={event.image} alt="not found" />
        <div className={`${s.details}`}>
          <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
          </Link>
          <div className={`${s.more}`}>
            <div className={`${s.categories}`}>
              {event.categories?.map((category) => (
                <span className={`${s.category}`} key={category.name}>
                  {category.name}
                </span>
              ))}
            </div>
            <div className={`${s.subcategories}`}>
              {event.subCategories?.map((subCategory) => (
                <span className={`${s.subcategory}`} key={subCategory.name}>
                  {subCategory.name}
                </span>
              ))}
            </div>
            <div className={`${s.iconCont}`}>
              <div className={`${s.icons}`}>
                {wish.includes(event) ? (
                  <MdIcons.MdFavorite
                    onClick={() => dispatch(removeEventWish(props.id))}
                  ></MdIcons.MdFavorite>
                ) : (
                  <MdIcons.MdFavoriteBorder
                    onClick={() => dispatch(addEventWish(props.recipe))}
                  ></MdIcons.MdFavoriteBorder>
                )}
                <TiIcons.TiDelete
                  onClick={() => dispatch(removeEvent(props.id))}
                ></TiIcons.TiDelete>
              </div>
            </div>
          </div>
        </div>
      </div> */}