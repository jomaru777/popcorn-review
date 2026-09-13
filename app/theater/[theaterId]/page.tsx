import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { theaters } from "@/data/theaters";
// import type { Review } from "@/types/review";

export type Review = {
    id: string;
    theaterId: string;
    flavor: string;
    rating: number;
    name: string;
    price: number;
    comment: string;
    movieTitle: string;
};

export default async function TheaterPage({ params }: { params: Promise<{ theaterId: string }>}) {
    const { theaterId } = await params;

    const q = query(
        collection(db, "reviews"),
        where("theaterId", "==", theaterId)
    );
    const querySnapshot = await getDocs(q);
    const reviews: Review[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))as Review[];

    const theater = theaters.find((theater) =>
        theater.id === theaterId
    );
    if (!theater) {
        return <div>映画館が見つかりません</div>;
    }

    return (
        <div>
            <h2>{theater.name}</h2>
            <h2>ポップコーンレビュー</h2>
            {
                reviews.map((review) => {
                    return (
                        <div key={review.id}>
                            <p>{review.flavor}</p>
                            <p>{review.rating}</p>
                            <p>{review.name}</p>
                            <p>{review.price}</p>
                            <p>{review.comment}</p>
                            <p>{review.movieTitle}</p>
                        </div>
                    )
                })
            }
        </div>
    );

}





