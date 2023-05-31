import React, { useEffect } from "react";
import styles from "./ListCards.module.scss";
import { Card } from "components/Card/Card";
import { useDispatch } from "react-redux";
import { setStateCards } from "store/slices/card/card";
import { useSelector } from "store/store";

export const ListCards = () => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      setStateCards([
        {
          id: "0032a1b5-8b30-4e10-a27c-3bd818d2f376",
          premium: false,
          details: {
            descripition: "tonelada",
            name: "panela",
          },
        },
      ])
    );
  }, [dispatch]);

  return (
    <section className={styles.wrapper}>
      <article className={styles.contentArticle}>
        <span className={styles.label}>Resultados</span>
        <div className={styles.contentCards}>
          {cards.cards.map((item) => (
            <Card key={item.id} image={item.id} label={item.details.name} />
          ))}
        </div>
      </article>
    </section>
  );
};
