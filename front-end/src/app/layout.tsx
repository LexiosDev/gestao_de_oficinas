"use client";

import "./globals.css";
import { useState, useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.className = storedTheme;
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.className = newTheme;
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <html lang="pt-br">
      <body className={theme}>
        <div
          className="fixed top-4 right-4 bg-gray-300 p-1 rounded-full shadow-lg z-50 cursor-pointer dark:bg-gray-700"
          onClick={toggleTheme}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 18a6 6 0 0 0 0-12v12z" />
          </svg>
        </div>
        {children}
      </body>
    </html>
  );
}