import { defineStore } from "pinia";

export const useShoplistStore = defineStore({
  id: "shoplist",
  state: () => ({
    shoplist: [
      {
        id: 1,
        name: "Milk",
        quantity: 2,
        unit: "liters",
        purchased: false,
      },
      {
        id: 2,
        name: "Eggs",
        quantity: 12,
        unit: "pcs",
        purchased: false,
      },
      {
        id: 3,
        name: "Bread",
        quantity: 1,
        unit: "loaf",
        purchased: true,
      },
    ],
  }),
  getters: {
    shoplistItems: (state) => {
      return state.shoplist;
    }, // return state.shoplist;
  },
  actions: {
    addItem(name: string, quantity: number, unit: string, purchased: boolean) {
      this.shoplist.push({
        id: this.shoplist.length + 1,
        name,
        quantity,
        unit,
        purchased,
      });
    },
    removeItem(id: number) {
      this.shoplist = this.shoplist.filter((item) => item.id !== id);
    },
    togglePurchased(id: number) {
      if (this.shoplist.length > 0) {
        this.shoplist = this.shoplist.map((item) => {
          if (item.id === id) {
            item.purchased = !item.purchased;
          }
          return item;
        });
      }
    },
  }, // actions
});
