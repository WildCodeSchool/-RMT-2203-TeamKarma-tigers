import { React } from "react";
import { useParams } from "react-router-dom";
import CardCastingCarousel from "../components/Casting/CardCastingCarousel";
import CardReviewCarousel from "../components/CardReviewCarousel";
import MovieVideoCarousel from "../components/MovieVideoCarousel";
import CardDetailSynopsis from "../components/CardDetailSynopsis";
import Header from "../components/Header";

export default function OneMovie() {
  const { movieid } = useParams();

  return (
    <div>
      <Header />
      <CardReviewCarousel movie={movieid} />
      <CardCastingCarousel movie={movieid} />
      <MovieVideoCarousel movie={movieid} />
      <CardDetailSynopsis />
    </div>
  );
}