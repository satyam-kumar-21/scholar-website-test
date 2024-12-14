import { useState } from "react"

const Testinomials =  () => {

    const testimonials = [
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
            name: "Vikash Kumar",
            title: "Software Engineer at Google",
            quote: "The Scholar Program changed my life, providing me with the financial support I needed to pursue my dreams."
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
            name: "Ananya Gupta",
            title: "Data Scientist at Facebook",
            quote: "Thanks to the Scholar Program, I was able to focus entirely on my studies without financial stress. It’s an invaluable opportunity."
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
            name: "Dr. Ravi Mehta",
            title: "Surgeon at Johns Hopkins Hospital",
            quote: "The Scholar Program not only helped me finance my medical education but also provided me with mentorship and networking opportunities that were crucial to my career."
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
            name: "Priya Deshmukh",
            title: "Product Manager at Amazon",
            quote: "Receiving the scholarship opened doors to incredible career opportunities and allowed me to complete my degree with confidence."
        },
        {
            avatar: "https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg",
            name: "Dr. Suresh Patel",
            title: "General Practitioner",
            quote: "The financial support from the Scholar Program allowed me to focus on my medical studies without the burden of financial constraints. It has been a life-changing experience."
        }
    ];
    
    

    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    return (
        <section className="py-14 bg-gray-50">
            <div className="max-w-screen-xl  mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl text-indigo-600 sm:text-3xl md:text-4xl font-semibold mb-4">What students are saying</h2>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" />
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Testinomials