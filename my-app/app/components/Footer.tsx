export default function Footer() {
    return (
        <footer className="w-full p-4 bg-background/80 shadow-md mt-auto">
            <div className="container mx-auto text-center text-white">
                &copy; {new Date().getFullYear()} Idea2Impact. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}