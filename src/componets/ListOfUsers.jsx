import { useFavoriteRepositories } from "../store/favoriteRepositories";
/* eslint-disable react/prop-types */
const ListOfUsers = ({ list }) => {
  const {
    favoriteRepositoriesIds,
    addFavoriteRepository,
    removeFavoriteRepository,
  } = useFavoriteRepositories((state) => ({
    favoriteRepositoriesIds: state.favoriteRepositoriesIds,
    addFavoriteRepository: state.addFavoriteRepository,
    removeFavoriteRepository: state.removeFavoriteRepository,
  }));

  const ToggleFavorite = (id) => {
    favoriteRepositoriesIds?.includes(id)
      ? removeFavoriteRepository(id)
      : addFavoriteRepository(id);
  };

  return (
    <>
      {list?.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <button onClick={() => ToggleFavorite(user.id)}>
            {favoriteRepositoriesIds?.includes(user.id) ? "DiskLike" : "Like"}
          </button>
        </div>
      ))}
    </>
  );
};

export default ListOfUsers;
