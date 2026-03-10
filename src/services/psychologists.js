import { ref, get } from "firebase/database";
import { db } from "../firebase/firebase";

export const getPsychologists = async () => {
  const snapshot = await get(ref(db, "psychologists"));

  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  return Object.entries(data).map(([id, value]) => ({ id, ...value }));
};
