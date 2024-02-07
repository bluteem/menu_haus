<template>
    <nav class="bg-gray-800 py-3">
        <div class="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
            <div class="flex justify-center h-16">
                <!-- Navbar Items Container -->
                <div class="flex items-center space-x-4" ref="navbarContainer">
                    <!-- Navbar Items -->
                    <ul class="flex" ref="navbarList">
                        <li v-for="menuCategory in menuCategories" :key="menuCategory._id" class="flex items-center">
                            <a :href="`#${menuCategory.name}`"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-center">{{
                                    menuCategory.name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const menuCategories = ref([]);

        // Fetch menu items when the component is mounted
        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/menucategories');
                menuCategories.value = response.data.menuCategories;
            } catch (error) {
                console.error('Error fetching menu categories:', error);
            }
        });

        return {
            menuCategories
        };
    }
};
</script>

<style scoped>

</style>
