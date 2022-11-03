import { BrowserRouter } from "react-router-dom";
import create from "zustand";

interface CountStore {
  todo: number[];
  count: number;
  increaseCount: () => void;
  countInput: (input: number) => void;
}

const myStore = create<CountStore>((set) => ({
  todo: [],
  count: 0,
  increaseCount: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  countInput: (input) => {
    set((state) => ({ todo: [...state.todo, input] }));
  },
}));

export default myStore;
// import create from "zustand";

// interface BearState {
//   bears: number;
//   count: number;
//   increase: (by: number) => void;
// }

// const myStore = create<BearState>()((set) => ({
//   bears: 0,
//   count: 0,
//   increase: (
//     by // state == 지금 현재의 나의 상태
//   ) => set((state) => ({ bears: state.bears + by, count: state.count + by })),
// }));

// export default myStore;
