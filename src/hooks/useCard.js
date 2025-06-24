import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useCard = create((set, get) => ({
  cards: {}, // Change to an object for storing multiple sections

  getCardsByAdress: async (page, section) => {
    try {
      const response = await axios.get(`/getCardsByAdress/${page}/${section}`);
      set((state) => ({
        cards: {
          ...state.cards,
          [`${page}-${section}`]: response.data,
        },
      }));
    } catch (error) {
      toast.error(error.message);
    }
  },

  getCardsForSection: (page, section) => {
    const cardsKey = `${page}-${section}`;
    return get().cards[cardsKey] || [];
  },
}));
