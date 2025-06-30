"use client";

import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const contactLinks = [
    {
        icon: Mail,
        label: "Email",
        href: "mailto:abhisheksingh4928@gmail.com",
    },
    {
        icon: Twitter,
        label: "X (Twitter)",
        href: "https://x.com/Abhishekdotsol",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/abhishek-singh88",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/abhishek-singh-9645a628b",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="max-w-2xl mx-auto px-4 py-20 scroll-mt-20">
            <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
            <p className="text-center text-gray-400 mb-10">
                Connect with me on your favorite platform or drop an email.
            </p>

            <div className="flex flex-col gap-5">
                {contactLinks.map(({ icon: Icon, label, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-4 border border-neutral-800 px-6 py-4 rounded-lg hover:bg-neutral-900 hover:scale-[1.02] transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-white group-hover:text-blue-400 transition" />
                            <span className="text-white text-base">{label}</span>
                        </div>
                        <span className="text-sm text-blue-500 group-hover:underline">
                            → Visit
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
