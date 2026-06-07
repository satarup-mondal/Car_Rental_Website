"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div
      className="
min-h-screen

bg-gradient-to-br
from-black
via-slate-900
to-slate-800

text-white

px-12
py-20
"
    >
      <h1
        className="
text-5xl
font-bold
text-center
mb-5
"
      >
        Contact Us
      </h1>

      <p
        className="
text-gray-400
text-center
mb-16
"
      >
        Have questions? We are here to help you.
      </p>

      <div
        className="
grid
grid-cols-1
md:grid-cols-3
gap-8
mb-16
"
      >
        <div
          className="
bg-white/10
p-8
rounded-2xl
text-center
"
        >
          <Phone className="mx-auto mb-5" />

          <h2 className="text-xl font-bold">Phone</h2>

          <p className="text-gray-400 mt-3">+91 9864892828</p>
        </div>

        <div
          className="
bg-white/10
p-8
rounded-2xl
text-center
"
        >
          <Mail className="mx-auto mb-5" />

          <h2 className="text-xl font-bold">Email</h2>

          <p className="text-gray-400 mt-3">support@carrental.com</p>
        </div>

        <div
          className="
bg-white/10
p-8
rounded-2xl
text-center
"
        >
          <MapPin className="mx-auto mb-5" />

          <h2 className="text-xl font-bold">Location</h2>

          <p className="text-gray-400 mt-3">Assam , India</p>
        </div>
      </div>

      <div
        className="
max-w-3xl
mx-auto

bg-white/10

border
border-white/20

rounded-3xl

p-10
"
      >
        <input
          placeholder="Your Name"
          className="
w-full

bg-black/40

p-5

rounded-xl

mb-5

outline-none
"
        />

        <input
          placeholder="Your Email"
          className="
w-full

bg-black/40

p-5

rounded-xl

mb-5

outline-none
"
        />

        <textarea
          placeholder="Your Message"
          rows={6}
          className="
w-full

bg-black/40

p-5

rounded-xl

outline-none
"
        />

        <button
          className="
mt-8

w-full

bg-gradient-to-r

from-blue-500

to-purple-600

py-4

rounded-xl

font-bold


hover:scale-105

transition-all

duration-300
"
        >
          Send Message
        </button>
      </div>
    </div>
  );
}
