"use client"

import Image from 'next/image'
import Navbar from "@/app/Navbar/nav";
import Footer from '@/app/Footer/page';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';


export default function Home() {
  const [userLocation, setUserLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    let watchId: number | undefined;

    // Check if the Geolocation API is available in the browser
    if ('geolocation' in navigator) {
      // Get the user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position);
        },
        (error) => {
          setError(error.message);
        }
      );

      // Watch for changes in the user's location
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          setUserLocation(position);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not available in this browser.');
    }

    // Clean up the watchPosition when the component unmounts
    return () => {
      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

return (
    <main>
      <Navbar/>
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <button
          
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Call{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            make an emergency call .
          </p>
        </button>

        <button
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </button>

        <button
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Message
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            send an emergency message.
          </p>
        </button>

        <button
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            SOS
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </button>
      </div>
            {/* Display user's location */}
        {userLocation && (
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Your Location:</h2>
            <p>Latitude: {userLocation.coords.latitude}</p>
            <p>Longitude: {userLocation.coords.longitude}</p>
            <p>Accuracy: {userLocation.coords.accuracy}</p>
            <p>Timestamp: {userLocation.timestamp}</p>
          </div>
        )}

        {/* Display error message if any */}
        {error && (
          <div className="my-4">
            <p className="text-red-500">{error}</p>
          </div>
        )}
    </div>
    <Footer/>
    </main>
  )
}
