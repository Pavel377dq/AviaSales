export const filters = (state) => state.checkboxes.arr;
export const checkboxes = (state) => state.checkboxes;
export const sortTag = (state) => state.sort.sortTag;

export  const all = (state) => state.tickets;

export  const amount = (state) => all(state).amount;
export  const tickets = (state) => all(state).tickets;