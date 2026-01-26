import { ref, get } from "firebase/database";
import { db } from "../firebase/firebase";

export const getPsychologists = async () => {
  const snapshot = await get(ref(db, "psychologists"));
  //const snapshot = await get(ref(db, "/"));
  //console.log("ROOT:", snapshot.val());
  if (!snapshot.exists()) return [];
  const data = snapshot.val();
  return Object.entries(data).map(([id, value]) => ({ id, ...value }));
};
