"use client"

import { useEffect, useState, useRef } from 'react';
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


export function Overview() {
  const [signInClicked, setSignInClicked] = useState(false);
  const cancelButtonRef = useRef(null)
  return (
<div></div>
  )
}