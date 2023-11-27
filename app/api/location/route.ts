
import prisma from '@/lib/prisma';

export async function Location() {
  try {
    await prisma.$connect();
  } catch (err) {
    return Error("Database Connection failed");
  }
}

export async function handleRequest(request:any) {
  try {
    const body = await request.json();
    const { latitude, longitude, accuracy, timestamp, userId } = body;
    const newLocation = await prisma.location.create({
      data: {
        latitude,
        longitude,
        accuracy,
        timestamp,
        userId,
      },
    });

    await prisma.$disconnect();

    return new Response(JSON.stringify(newLocation), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Error saving location data', { status: 500 });
  }
}
