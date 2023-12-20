"use client";
import React from "react"
//import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
//import { useState } from "react";
import { useDemoModal } from "@/components/modal/demo-modal";
import Footer from '@/app/Footer/page';

export default function HtmlForm() {
  const { DemoModal, setShowDemoModal } = useDemoModal();
  return (
    <div className="">
<section className="bg-gradient-to-r from-rose-100 to-teal-100 w-screen">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="lg:col-span-2 lg:py-12">
        <p className="max-w-xl text-lg">
          At the same time, the fact that we are wholly owned and totally
          independent from manufacturer and other group control gives you
          confidence that we will only recommend what is right htmlFor you.
        </p>

        <div className="mt-8">
          <a href="" className="text-2xl font-bold text-pink-600">
            0151 475 4450
          </a>

          <address className="mt-2 not-italic">
            282 Kevin Brook, Imogeneborough, CA 58517
          </address>
        </div>
      </div>

      <div className="rounded-lg  p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-600 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-600 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-600 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
              <input
                className="peer sr-only"
                id="option1"
                type="radio"
                
                name="option"
              />

              <label
                htmlFor="option1"
                className="block w-full rounded-lg border border-gray-600 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                
              >
                <span className="text-sm"> Option 1 </span>
              </label>
            </div>

            <div>
              <input
                className="peer sr-only"
                id="option2"
                type="radio"
                
                name="option"
              />
              <label
                htmlFor="option2"
                className="block w-full rounded-lg border border-gray-600 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                
              >
                <span className="text-sm"> Option 2 </span>
              </label>
            </div>
            <div>
              <input
                className="peer sr-only"
                id="option3"
                type="radio"
                
                name="option"
              />

              <label
                htmlFor="option3"
                className="block w-full rounded-lg border border-gray-600 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                
              >
                <span className="text-sm"> Option 3 </span>
              </label>
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
          <DemoModal />
                <button type="button" onClick={() => setShowDemoModal(true)} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                  submit
                  </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    <Footer/>
    </div>
  )
}
