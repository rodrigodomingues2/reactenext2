import Link from 'next/link';

export default function HomePage() {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Bem-vindo ao meu site!</h1>
            <p>
                Navegue até a página do contador clicando abaixo:
            </p>
            <Link href="/counter">
                <button style={{ padding: "10px 20px", fontSize: "16px" }}>
                    Counter
                </button>
            </Link>
        </div>
    );
}
