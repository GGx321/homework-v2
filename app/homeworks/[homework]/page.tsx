"use client";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import Head from "next/head";

interface HomeworkTitles {
    [key: string]: string;
}

const homeworkTitles: HomeworkTitles = {
    Homework1: "Домашнее задание 1",
    Homework2: "Домашнее задание 2",
    Homework3: "Домашнее задание 3",
    Homework4: "Домашнее задание 4",
    Homework5: "Домашнее задание 5",
    Homework6: "Домашнее задание 6",
    Homework7: "Домашнее задание 7",
    Homework8: "Домашнее задание 8",
    Homework9: "Домашнее задание 9",
    Homework10: "Домашнее задание 10",
    Homework11: "Домашнее задание 11",
    Homework12: "Домашнее задание 12",
    Homework13: "Домашнее задание 13",
    Homework14: "Домашнее задание 14",
    Homework15: "Домашнее задание 15"
};

const HomeworkPage = () => {
    const { homework } = useParams<{ homework: string }>();

    const title = homework && homeworkTitles[homework] ? homeworkTitles[homework] : homework;

    useEffect(() => {
        document.title = title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', `${title}...`);
        }
    }, [homework]);

    const HomeworkComponent = dynamic(() => import(`../${homework}`), { ssr: false });

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={`${title}...`} />
            </Head>
            <HomeworkComponent />
        </div>
    );
};

export default HomeworkPage;
