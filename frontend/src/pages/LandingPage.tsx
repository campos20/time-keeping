import { Link } from "react-router";
import { appRoutes } from "../config/appRoutes";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100">
      <section className="flex flex-col items-center justify-center flex-1 p-8 bg-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Time Keeping</h1>
        <p className="text-lg mb-8">Your personal time management tool.</p>
        <Link
          to={appRoutes.timeEntry}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </section>

      <section className="flex flex-row items-center justify-center p-8 bg-gray-200">
        <div className="w-1/2 px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Time Keeping?</h2>
          <p className="text-center max-w-xl">
            Time Keeping helps you visualize how you spend your day, manage your
            tasks, and boost your productivity.
          </p>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src="/clock.jpeg"
            height={500}
            width={500}
            alt="Why Time Keeping"
            className="rounded shadow max-w-full h-auto"
          />
        </div>
      </section>

      <section className="flex flex-col items-center p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl text-center">
          <li className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold mb-2">Easy Time Logging</h3>
            <p>Log your tasks and activities with just a few clicks.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold mb-2">Detailed Reports</h3>
            <p>Get insights on how and where you spend your time.</p>
          </li>
          <li className="bg-gray-100 p-4 rounded shadow">
            <h3 className="font-bold mb-2">AI Integration</h3>
            <p>Use AI to analyze your time entries and suggest improvements.</p>
          </li>
        </ul>
      </section>

      <footer className="flex items-center justify-center p-4 bg-gray-300">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Time Keeping
        </p>
      </footer>
    </div>
  );
};
