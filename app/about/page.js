import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function name(params) {
    return (<>
        <Navbar />
        <div className="bg-white dark:bg-gray-900 min-h-screen px-6 py-12 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Us</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Your one-stop platform for effortless event planning.
                </p>

                <div className="text-left space-y-6">
                    <p className="text-gray-700 dark:text-gray-300">
                        At <span className="font-semibold text-indigo-600 dark:text-indigo-400">EventEase</span>, we believe that organizing an event should be exciting, not overwhelming. Whether you're planning a wedding, corporate gathering, birthday bash, or any celebration — we've got everything you need in one place.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What We Offer</h2>
                    <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                        <li><strong>Catering:</strong> Discover a wide range of cuisines and catering packages to suit any event size or style.</li>
                        <li><strong>Venue Rentals:</strong> Rent halls, banquet spaces, outdoor venues, and more across various locations.</li>
                        <li><strong>Decor Services:</strong> Hire decorators to transform your venue into a dream space.</li>
                        <li><strong>Bar & Beverage Services:</strong> Choose from licensed vendors for full bar setups or bartenders.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">For Service Providers</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Are you a vendor? Join our growing network and showcase your services to thousands of event planners. We make it easy to manage bookings, promote your offerings, and grow your business.
                    </p>

                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Our Mission</h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        We're here to simplify event planning by connecting customers with trusted service providers — all under one platform.
                    </p>
                </div>
            </div>
        </div>
        <Footer /></>)
}