"use client";

import { useState } from "react";
import { theaters } from "@/data/theaters";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import styles from "./page.module.css";

export default function AddPage() {
    const [id, setId] = useState("");
    const [flavor, setFlavor] = useState("");
    const [rating, setRating] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [comment, setComment] = useState("");
    const [movieTitle, setMovieTitle] = useState("");

    const saveTestData = async () => {
        try {
            const docRef = await addDoc(collection(db, "reviews"), {
                theaterId: id,
                flavor: flavor,
                rating: Number(rating),
                prices: [{
                    name: name,
                    price: Number(price)
                }],
                comment: comment,
                movieTitle: [movieTitle]
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
            <h1 className="mt-6 text-2xl font-bold text-center">Poppin<span className="inline-block">ポップコーンレビューアプリ</span></h1>
            <p className="text-center mb-2">ポップコーンのレビュー登録ページです。</p>
            <div>
                <div className ={styles.list}>
                    <label htmlFor="theaters">映画館</label>
                    <select
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    >
                        <option value="">映画館</option>
                        {theaters.map((theater) => {
                            return (
                                <option key={theater.id} value={theater.id}>{theater.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className ={styles.list}>
                    <label htmlFor="flavor">味</label>
                    <input
                        type="text"
                        id="flavor"
                        name="flavor"
                        placeholder="キャラメル"
                        value={flavor}
                        onChange={(e) => setFlavor(e.target.value)}
                    />
                </div>
                <div className ={styles.list}>
                    <label htmlFor="rating">評価</label>
                    <select
                        name="rating"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                    >
                        <option value="">評価</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className ={styles.list}>
                    <label htmlFor="name">価格名</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="ポップコーンペアセット"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className ={styles.list}>
                    <label htmlFor="price">価格</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        placeholder="1200"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className ={styles.list}>
                    <label htmlFor="comment">コメント</label>
                    <textarea
                        id="comment"
                        name="comment"
                        rows={5}
                        cols={33}
                        value={comment}
                        onChange={(e) => setComment(e.target.value)} />
                </div>
                <div className ={styles.list}>
                    <label htmlFor="movieTitle">映画タイトル</label>
                    <input
                        type="text"
                        id="movieTitle"
                        name="movieTitle"
                        placeholder="劇場版『名探偵コナン 隻眼の残像』"
                        value={movieTitle}
                        onChange={(e) => setMovieTitle(e.target.value)}
                    />
                </div>
                <button onClick={saveTestData}>登録する</button>
            </div>
        </main>
    )
}