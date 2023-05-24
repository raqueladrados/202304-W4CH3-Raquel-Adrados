import { useCallback, useMemo, useState } from "react";
import { ApiRepository } from "../services/api.repository";
import { Character } from "../models/all.characters";
export function useList() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const characterURL = "http://localhost:3000/characters";

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(characterURL),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedCharacters = await repo.getAll();
    setCharacters(loadedCharacters);
  }, [repo]);

  const handleUpdate = async (character: Character) => {
    try {
      const updatedTask = await repo.update(character.id, character);
      setCharacters(
        characters.map((item) =>
          character.id === character.id ? updatedTask : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleLoad,
    handleUpdate,
  };
}
