import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 px-8 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <p className="text-gray-400">
            Career Skills Advisor helps students and professionals choose the right
            skills and build future-ready careers.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <ul className="space-y-1 text-gray-400">
            <li><a href="mailto:info@careerskills.com" className="hover:text-white">Email: info@careerskills.com</a></li>
            <li><a href="https://linkedin.com" className="hover:text-white">LinkedIn</a></li>
            <li><a href="https://twitter.com" className="hover:text-white">Twitter</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
