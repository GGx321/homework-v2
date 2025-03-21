"use client";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

export default function HomeworkPage() {
    const { homework } = useParams(); // Теперь params.homework корректно работает
    const HomeworkComponent = dynamic(() => import(`../${homework}`), { ssr: false });

    return (
        <div>
            <HomeworkComponent />
        </div>
    );
}
