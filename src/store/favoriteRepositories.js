import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useFavoriteRepositories = create(
  persist(
    (set) => ({
      favoriteRepositoriesIds: [],
      addFavoriteRepository: (id) =>
        set((state) => ({
          favoriteRepositoriesIds: [...state.favoriteRepositoriesIds, id],
        })),
      removeFavoriteRepository: (id) =>
        set((state) => ({
          favoriteRepositoriesIds: state.favoriteRepositoriesIds.filter(
            (repoId) => repoId !== id
          ),
        })),
    }),
    { name: "favoriteRepositories" }
  )
);
