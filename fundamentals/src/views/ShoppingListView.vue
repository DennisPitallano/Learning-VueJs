<script setup lang="ts">
import { ref } from "vue";
import { useShoplistStore } from "@/stores/shoplistStore";
const header = ref("Shopping List App");

const newItem = ref({
  name: "",
  quantity: 0,
  unit: "",
  purchased: false,
});

const shop = useShoplistStore();

function saveItem() {
  shop.addItem(
    newItem.value.name,
    newItem.value.quantity,
    newItem.value.unit,
    newItem.value.purchased
  );
}
</script>

<template>
  <div class="row-auto px-2 py-2">
    <div class="align-middle">
      <form
        @submit.prevent="saveItem()"
        class="bg-transparent dark:bg-slate-900 rounded-lg ring-1 ring-green-900 ring-slate-900/5 shadow-xl text-center"
      >
        <div class="py-3 px-3">
          <label class="pr-2" for="">Item Name:</label>
          <input
            autocomplete="off"
            type="text"
            class="bg-gray-800 border-1 border-gray-400 focus:border-gray-500 rounded"
            id="name"
            v-model="newItem.name"
          />
        </div>
        <div class="py-3 px-3">
          <label class="pr-2" for="">Qty:</label>
          <input
            type="text"
            class="bg-gray-800 border-1 border-gray-400 focus:border-gray-500"
            id="name"
            v-model="newItem.quantity"
          />
        </div>
        <div class="py-3 px-3">
          <label class="pr-2" for="">Unit:</label>
          <input
            type="text"
            class="bg-gray-900 border-1 border-gray-400 focus:border-gray-500"
            id="name"
            v-model="newItem.unit"
          />
        </div>
        <h1>{{ newItem.name }} {{ newItem.quantity }} {{ newItem.unit }}</h1>
        <br />
        <div class="py-3">
          <button
            class="inline-block bg-gray-800 uppercase hover:translate-x-0 focus:bg-green-600 tracking-wider font-semibold hover:bg-gray-700 text-green-500 px-5 py-1 rounded-full focus:ring-indigo-600"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
    <div class="">
      <h1 class="text-center py-2">{{ header }}</h1>
      <br />
      <div>
        <ul>
          <li
            @click="shop.togglePurchased(item.id)"
            v-for="(item, index) in shop.shoplistItems"
            :key="index"
            class="list-group-item bg-gray-700 dark:bg-gray-900 rounded-sm p-1 m-1"
            :class="{ strikeout: item.purchased }"
          >
            <span>{{ item.name }}</span>
            <span v-if="item.quantity">({{ item.quantity }})</span>
            <span v-if="item.unit">{{ item.unit }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .shop {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.strikeout {
  text-decoration: line-through;
}
.list-group-item {
  justify-content: space-between;
  cursor: pointer;
}
</style>
