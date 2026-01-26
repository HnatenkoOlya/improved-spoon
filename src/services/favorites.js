import { ref, set, remove, get } from "firebase/database";
import { db } from "../firebase/firebase";

export const addFavorites = async (uid, psychologistId) => {
  if (!uid || !psychologistId) return;

  await set(ref(db, `users/${uid}/favorites/${psychologistId}`), true);
};

export const removeFavorites = async (uid, psychologistId) => {
  if (!uid || !psychologistId) return;
  await remove(ref(db, `users/${uid}/favorites/${psychologistId}`));
};

export const getFavorites = async (uid) => {
  if (!uid) return [];

  const snapshot = await get(ref(db, `users/${uid}/favorites`));

  if (!snapshot.exists()) return [];
  return Object.keys(snapshot.val());
};
