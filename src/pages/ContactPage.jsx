import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../css/ContactPage.module.css";

export default function ContactPage() {
  return (
    <div className={`min-h-screen flex flex-col bg-light-honeymilk text-dark-indigo dark:bg-dark-plum dark:text-light-honeymilk transition-colors duration-500`}>
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <main className="flex-grow p-8">
        <section className="max-w-4xl mx-auto text-center">
          {/* Work in Progress Banner */}
          <div className={`${styles.wipBanner} mb-8`}>
            🚧 This page is still a Work in Progress 🚧
          </div>

          <h2 className="text-3xl font-bold mb-6 text-light-dreamy dark:text-dark-orchid">
            Contact Us
          </h2>
          <p className="mb-8 text-dark-indigo/80 dark:text-light-dreamy/80">
            Have questions or suggestions? Reach out to us through the channels
            below. We’d love to hear from you!
          </p>

          {/* Contact Methods */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className={`p-6 rounded-xl shadow-lg bg-light-crystal dark:bg-dark-indigo ${styles.contactCard}`}>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-dark-indigo dark:text-light-yellow">
                careerskills@advisor.com
              </p>
            </div>

            <div className={`p-6 rounded-xl shadow-lg bg-light-fairy dark:bg-dark-orchid ${styles.contactCard}`}>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a
                href="https://linkedin.com/company/career-skills"
                className={`text-dark-indigo underline dark:text-light-yellow hover:opacity-80 ${styles.glowLink}`}
              >
                linkedin.com/company/career-skills
              </a>
            </div>
          </div>

          {/* Team Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-light-dreamy dark:text-light-yellow">
              Our Team
            </h3>
            <ul className="space-y-2 text-lg">
              <li className="text-dark-indigo dark:text-light-honeymilk">
                Zenith Cheeli – Lead Developer
              </li>
              <li className="text-dark-indigo dark:text-light-honeymilk">
                [Name 2] – UI/UX Designer
              </li>
              <li className="text-dark-indigo dark:text-light-honeymilk">
                [Name 3] – Content Strategist
              </li>
              <li className="text-dark-indigo dark:text-light-honeymilk">
                [Name 4] – Backend Engineer
              </li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
