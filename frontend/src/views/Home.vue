<template>
    <nav class="bg-gray-800">
        <div class="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
            <div class="flex justify-center h-16">
                <!-- Navbar Items Container -->
                <div class="flex items-center space-x-4" ref="navbarContainer">
                    <!-- Left Arrow -->
                    <button v-show="showLeftArrow" @click="scrollNavbar('left')"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        &lt;
                    </button>
                    <!-- Navbar Items -->
                    <ul class="flex" ref="navbarList">
                        <li v-for="menuCategory in menuCategories" :key="menuCategory._id">
                            <a :href="`#${menuCategory.name}`"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                {{ menuCategory.name }}
                            </a>
                        </li>
                    </ul>
                    <!-- Right Arrow -->
                    <button v-show="showRightArrow" @click="scrollNavbar('right')"
                        class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const menuCategories = ref([]);
        const navbarContainer = ref(null);
        const navbarList = ref(null);

        // Fetch menu items when the component is mounted
        onMounted(async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/menucategories');
                menuCategories.value = response.data.menuCategories;
            } catch (error) {
                console.error('Error fetching menu categories:', error);
            }
        });

        // Calculate whether the navbar items exceed the screen width
        const showLeftArrow = computed(() => {
            return navbarList.value && navbarContainer.value && navbarList.value.scrollLeft > 0;
        });

        const showRightArrow = computed(() => {
            return navbarList.value && navbarContainer.value && (navbarList.value.offsetWidth + navbarList.value.scrollLeft < navbarContainer.value.offsetWidth);
        });

        // Scroll the navbar list
        const scrollNavbar = (direction) => {
            const navbarListElement = navbarList.value;
            if (!navbarListElement) return;

            const scrollAmount = 100; // Adjust the scroll distance as needed
            if (direction === 'left') {
                navbarListElement.scrollLeft -= scrollAmount;
            } else if (direction === 'right') {
                navbarListElement.scrollLeft += scrollAmount;
            }
        };

        return {
            menuCategories,
            navbarContainer,
            navbarList,
            showLeftArrow,
            showRightArrow,
            scrollNavbar
        };
    }
};
</script>

<style scoped>
/* Add any custom styles here */
.navbar-items-container {
    overflow-x: hidden;
    white-space: nowrap;
    transition: transform 0.3s ease;
}

.navbar-items {
    display: inline-block;
}

button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
}
</style>
