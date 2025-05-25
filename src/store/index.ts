import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBookSlotStore = create<any>()(
    persist(
        (set)=>({
            bookedSlot: null,
            setBookedSlot: (bookedSlot: any) => set({bookedSlot: bookedSlot})
        }),
        {
            name: "booked-slot"
        }
    )
)