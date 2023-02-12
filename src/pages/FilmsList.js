import Card from "../Card";
import { useFilms } from "../hooks/useFilms";

const FilmsList = () => {
  const { error, loading, data } = useFilms();
  if (loading) return <h1>Loading, Please Wait...</h1>;
  if (error) return <h1>Something Went Wrong...Please Refresh</h1>;

  return (
    <>
      <div className="filmsList">
        {data.allFilms.films.map((film) => {
          return (
            <div>
              <Card
                key={film.id}
                title={film.title}
                director={film.director}
                releaseDate={film.releaseDate}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilmsList;
