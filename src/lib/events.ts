import { appleevent, googleevent, nextevent, reactevent } from "@/components/image"

export interface eventDataType {
    id: string,
    title: string,
    date: string,
    location: string,
    image: string,
    description: string,
    availableSeats: number
}

export const eventData: eventDataType[] = [
    
  {
    "id": "e1",
    "title": "React Conference 2025",
    "date": "2025-06-10",
    "location": "San Francisco, CA",
    "image": reactevent.src,
    "description": "Join industry experts and developers for the largest React event of the year. Workshops, keynotes, and networking sessions.",
    "availableSeats": 120
  },
  {
    "id": "e2",
    "title": "Apple September Event 2025",
    "date": "2025-09-19",
    "location": "Los Angeles, CA",
    "image": appleevent.src,
    "description": "For upcoming launch of iPhone 17 series, Macbook, iPad, iPod and Apple watch upcoming versions",
    "availableSeats": 200
  },
  {
    "id": "e3",
    "title": "Google Events",
    "date": "2025-10-15",
    "location": "Mountain View, CA",
    "image": googleevent.src,
    "description": "Join industry experts and developers for the largest Google event of the year. Workshops, jobs, environment, workplace etc.",
    "availableSeats": 100
  },
  {
    "id": "e4",
    "title": "Next.js Events",
    "date": "2025-10-29",
    "location": "Dallas, TX",
    "image": nextevent.src,
    "description": "Join industry experts and developers for the largest Vercel event of the year. About Next.js next version, how it differs from others and more.",
    "availableSeats": 50
  },
]