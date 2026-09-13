"use client";

import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function FirebaseTestPage() {
  const saveTestData = async () => {
    try {
      const docRef = await addDoc(collection(db, "reviews"), {
        theaterId: "toho-midorii",
        popcornName: "キャラメル",
        rating: 5,
        price: 450,
      });

      console.log("保存成功:", docRef.id);
      alert("Firestoreに保存できた！");
    } catch (error) {
      console.error("保存失敗:", error);
      alert("保存に失敗しました");
    }
  };

  return (
    <main>
      <h2>Firebaseテスト</h2>

      <button onClick={saveTestData}>
        テストデータを保存
      </button>
    </main>
  );
}