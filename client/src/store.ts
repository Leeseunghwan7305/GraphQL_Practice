import create from "zustand";

const count = create((set) => ({
  count: 0,
  increaseCount: () => {
    set((state) => {
      console.log(state);
      return state.count + 1;
    });
  },
}));
