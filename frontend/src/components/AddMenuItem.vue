<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Add New Menu Item</h2>
        <form @submit.prevent="addItem" class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
                <input type="text" v-model="name" id="name" required class="mt-1 p-2 border border-gray-300 rounded-md w-full">
            </div>

            <div>
                <label for="images" class="block text-sm font-medium text-gray-700">Images:</label>
                <input type="text" v-model="images" id="images" required class="mt-1 p-2 border border-gray-300 rounded-md w-full">
            </div>

            <div>
                <label for="category" class="block text-sm font-medium text-gray-700">Category:</label>
                <input type="text" v-model="category" id="category" required class="mt-1 p-2 border border-gray-300 rounded-md w-full">
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description:</label>
                <textarea v-model="description" id="description" required class="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
            </div>

            <div>
                <label for="price" class="block text-sm font-medium text-gray-700">Price:</label>
                <input type="number" v-model.number="price" id="price" required class="mt-1 p-2 border border-gray-300 rounded-md w-full">
            </div>

            <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Add Item</button>
        </form>
    </div>
</template>
  
<script setup>
import axios from 'axios';
import { ref } from 'vue';

const name = ref('');
const images = ref('');
const category = ref('');
const description = ref('');
const price = ref(0);

const addItem = async () => {
    try {
        await axios.post('http://localhost:5000/api/menuitems', {
            name: name.value,
            images: images.value.split(','), // Convert to array if multiple images
            category: category.value,
            description: description.value,
            price: price.value
        });
        alert('Menu item added successfully!');
        // Clear form fields
        name.value = '';
        images.value = '';
        category.value = '';
        description.value = '';
        price.value = 0;
    } catch (error) {
        console.error('Error adding menu item:', error);
        alert('Failed to add menu item. Please try again later.');
    }
};
</script>
