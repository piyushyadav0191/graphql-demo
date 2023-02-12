import { useQuery, gql } from "@apollo/client";

const GET_FILMS = gql`
  query {
    allFilms {
      films {
        id
        title
        director
        releaseDate
      }
    }
  }
`;

export const useFilms = () => {
  const { data, loading, error } = useQuery(GET_FILMS);

  return {
    error,
    loading,
    data,
  };
};
