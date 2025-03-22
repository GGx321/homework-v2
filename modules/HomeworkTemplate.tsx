import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface HomeworkTemplateProps {
    title: string;
    description: string;
    fileUrl: string;
    html: string;
    css: string;
    js: string;
}

export default function HomeworkTemplate({ title, description, fileUrl, html, css, js }: HomeworkTemplateProps) {
    return (
    <div>
        <Header />
        <div className="pt-44 max-w-7xl mx-auto p-4 min-h-screen text-white">
            <div className="flex justify-between">
            <div>
                <div className="text-2xl font-bold mb-4">{title}</div>
                <p className="mb-4">{description}</p>
            </div>
            <Link href={fileUrl} download>
                <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">Скачать архив</button>
            </Link>
            </div>
            <div className="px-4 pb-4 mt-4 rounded overflow-auto bg-zinc-600">
                <div className="pt-4 text-bold">HTML</div>
                <div className="rounded">
                    <SyntaxHighlighter language="html" style= {materialDark}>
                    {html}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div className="px-4 pb-4 mt-4 rounded overflow-auto bg-zinc-600">
                <div className="pt-4 text-bold">CSS</div>
                <div className="rounded">
                    <SyntaxHighlighter language="css" style= {materialDark}>
                    {css}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div className="px-4 pb-4 mt-4 rounded overflow-auto bg-zinc-600">
                <div className="pt-4 text-bold">JS</div>
                <div className="rounded">
                    <SyntaxHighlighter language="js" style= {materialDark}>
                    {js}
                    </SyntaxHighlighter>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
}
