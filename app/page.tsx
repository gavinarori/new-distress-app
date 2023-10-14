"use client"

import Footer from '@/app/Footer/page';
import ThreeDots from '@/components/ThreeDotsWave';
import { useEffect, useState, useRef } from 'react';
import  LoadingDots from "@/app/icons/loading-dots";
import { useDemoModal } from "@/components/modal/demo-modal";
import Link from "next/link";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"




export default function Home() {
  const [userLocation, setUserLocation] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [signInClicked, setSignInClicked] = useState(false);
  const cancelButtonRef = useRef(null)
  const [open, setOpen] = useState(true)


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
    <div className="flex flex-col items-center justify-center p-4">
      <div >
      <ThreeDots/>
      </div>
      <div className="w-full overflow-hidden shadow-2xl md:max-w-lg md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200  px-4 py-6 pt-8 text-center md:px-16">
          
            <Image
              src="/vercel.svg"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          
          <h3 className="font-display text-xl font-bold">Emergency distress alarm</h3>
          <p className="text-sm text-gray-500">
            tap the button to send a distress signal 
            like a SOS!
          </p>
        </div>
        <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-200  px-4 py-6 pt-8 text-center md:px-16'>
        <p className="text-sm text-gray-500">
           specify the type of Emergency
          </p>
        <Select >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="choose from ..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Emergencies</SelectLabel>
          <SelectItem value="Fire">Fire</SelectItem>
          <SelectItem value="Robbery">Robbery</SelectItem>
          <SelectItem value="Kidnapping">Kidnapping</SelectItem>
          <SelectItem value="Ambulance">Ambulance</SelectItem>
          <SelectItem value="Violence">Violence</SelectItem>
          <SelectItem value="Missing persons">Missing persons</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </div>
        
        <div className="flex flex-col space-y-4  px-4 py-8 md:px-16">
          {/* <button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? "cursor-not-allowed border-gray-200 "
                : "border border-gray-200  hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            onClick={() => {
              setSignInClicked(true);
              
            }}
          >
            
            {signInClicked ? (
              <LoadingDots color="#f54248" />
            ) : (
              <div>
                <p>tap to distress</p>
              </div>
            )}
          </button> */}
          <Dialog>
      <DialogTrigger asChild>
        <button className=' border-gray-200  hover:bg-gray-50 flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none'>tap to distress</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tap to distress </DialogTitle>
          <DialogDescription>
            are you sure you want to send a distress signal ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-2">
        <button
            disabled={signInClicked}
            className={`${
              signInClicked
                ? "cursor-not-allowed border-gray-200 "
                : "border border-gray-200  hover:bg-gray-50"
            } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm  transition-all duration-75 focus:outline-none ml-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto`}
            onClick={() => {
              setSignInClicked(true);
              
            }}
          >
            
            {signInClicked ? (
              <LoadingDots color="#f54248" />
            ) : (
              <div>
                <p>Ok</p>
              </div>
            )}
          </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    ref={cancelButtonRef}
                    
                  >
                    Cancel
                  </button>
                </div>

        </DialogFooter>
      </DialogContent>
    </Dialog>
          
          <p className="text-sm text-gray-500 text-center">
            please <Link href="/signIn" className='text-blue-300'>sign in</Link> first 
          </p>
        </div>
      </div>
      <div className='w-full overflow-hidden shadow-2xl md:max-w-lg md:rounded-2xl md:border md:border-gray-200 mt-10'>
      <div className='flex flex-col items-center justify-center space-y-3 border-b border-gray-200  px-4 py-6 pt-8 text-center md:px-16'>
        {/* Display user's location */}
      {userLocation && (
          <div className="my-4">
            <h2 className="text-2xl font-semibold border-b-2">Your Location:</h2>
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
      </div>
    </div>
    <Footer/>
    </main>
  )
}
