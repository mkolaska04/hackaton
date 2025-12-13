'use client';
import Divider from "../components/Divider";

export default function Regulamin() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/file.pdf'; 
        link.download = 'Regulamin_Idea2Impact.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }



    return (
        <main className="min-h-screen  pt-20 lg:pb-8 ">
            <h1 className="text-5xl text-center font-grotesk font-semibold py-3">Regulamin</h1>
            <h2 className="text-3xl text-center font-grotesk font-semibold pb-6">Idea2Impact hackaton</h2>
            <Divider />
            <section className="mx-auto  max-w-5xl px-4">
                <h3 className="text-2xl text-center font-sans font-semibold mt-8 mb-4 px-4">§ 1 Postanowienia ogólne</h3>
                <ol className="list-decimal list-inside px-8 space-y-4 mb-6">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam omnis inventore rem alias ipsam exercitationem fugiat magnam repudiandae? Nobis veniam qui aspernatur, amet necessitatibus maxime ea numquam dolore perspiciatis!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum quae quaerat, sequi magni iure dignissimos officiis alias odit animi quasi repudiandae harum aspernatur officia dolorum, quibusdam hic tempora delectus.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo illo omnis dolores a, ipsum voluptatum maiores minima explicabo nulla harum beatae saepe necessitatibus, asperiores velit maxime ipsa, fugit ducimus ea!</li>
                </ol>

                <h3 className="text-2xl text-center font-sans font-semibold mt-8 mb-4 px-4">§ 2 Uczestnicy</h3>
                <ol className="list-decimal list-inside px-8 space-y-4 mb-6">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam omnis inventore rem alias ipsam exercitationem fugiat magnam repudiandae? Nobis veniam qui aspernatur, amet necessitatibus maxime ea numquam dolore perspiciatis!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum quae quaerat, sequi magni iure dignissimos officiis alias odit animi quasi repudiandae harum aspernatur officia dolorum, quibusdam hic tempora delectus.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo illo omnis dolores a, ipsum voluptatum maiores minima explicabo nulla harum beatae saepe necessitatibus, asperiores velit maxime ipsa, fugit ducimus ea!</li>
                </ol>

                <h3 className="text-2xl text-center font-sans font-semibold mt-8 mb-4 px-4">§ 3 Zasady Wydarzenia</h3>
                <ol className="list-decimal list-inside px-8 space-y-4 mb-6">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam omnis inventore rem alias ipsam exercitationem fugiat magnam repudiandae? Nobis veniam qui aspernatur, amet necessitatibus maxime ea numquam dolore perspiciatis!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum quae quaerat, sequi magni iure dignissimos officiis alias odit animi quasi repudiandae harum aspernatur officia dolorum, quibusdam hic tempora delectus.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo illo omnis dolores a, ipsum voluptatum maiores minima explicabo nulla harum beatae saepe necessitatibus, asperiores velit maxime ipsa, fugit ducimus ea!</li>
                </ol>

                <h3 className="text-2xl text-center font-sans font-semibold mt-8 mb-4 px-4">§ 4 Prawa autorskie</h3>
                <ol className="list-decimal list-inside px-8 space-y-4 mb-6">
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laboriosam omnis inventore rem alias ipsam exercitationem fugiat magnam repudiandae? Nobis veniam qui aspernatur, amet necessitatibus maxime ea numquam dolore perspiciatis!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum quae quaerat, sequi magni iure dignissimos officiis alias odit animi quasi repudiandae harum aspernatur officia dolorum, quibusdam hic tempora delectus.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo illo omnis dolores a, ipsum voluptatum maiores minima explicabo nulla harum beatae saepe necessitatibus, asperiores velit maxime ipsa, fugit ducimus ea!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eius natus. Quisquam sequi nam error, debitis at tempore repellat tenetur consectetur quidem blanditiis dolorem hic, excepturi consequuntur non, eveniet nostrum!</li>
                </ol>

            </section>

            <div className="w-full flex justify-center">
                <button onClick={() => { handleDownload(); }} className="mt-8 px-6 py-3 bg-primary text-white font-semibold font-inter rounded-lg hover:bg-secondary transition w-fit mx-auto text-2xl">Pobierz Regulamin (PDF)</button>
            </div>

        </main>
    );
}