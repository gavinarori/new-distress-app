
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";

export  const getSession= async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getServerSession(authOptions);
    res.status(200).json({ session });
  } catch (error) {
    console.error("Error fetching session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};