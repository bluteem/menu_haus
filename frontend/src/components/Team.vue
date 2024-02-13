<!-- MenuItems.vue -->
<template>
    <main class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden py-10 px-10">
    
      <h1 class="text-3xl font-bold mb-4">Team</h1>
    
      <!-- Add Menu Item Button -->
      <button @click="showModal1 = true"
        class="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 border-b border-gray-300">
        Add New User
      </button>
    
      <div class="border-b border-gray-300 mt-6"></div>
    
      <ul>
        <li v-for="user in users" :key="user._id" class="flex items-center border-b border-gray-300 pt-2 pb-4">
          <div class="flex">  
            <!-- Left column for the image -->
            <div class=" w-1/6 px-4">
              <p class="text-gray-600"><span class="font-bold">Name:</span> {{ user.fullName }}</p>
            </div>
            <!-- Right column for the text content -->
            <div class="w-3/6 px-4">
              <p class="text-gray-600"><span class="font-bold">Name:</span> {{ user.fullName }}</p>
              <!-- Edit and Delete buttons -->
            </div>
            <div class="w-1/6">
              <button @click="getUser(user._id, $refs.Alert)" type="button"
                class="mt-2 mr-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">Edit</button>
              <button @click="deleteUser(user._id, $refs.Alert)"
                class="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300">Delete</button>
            </div>
          </div>      
        </li>
      </ul>
      <!-- Show message if there are no menu items -->
      <p v-if="users.length === 0" class="text-gray-600">No user available</p>
    </main>
     
      <!-- Modal for adding a new user -->
      <div :style="{ display: showModal1 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    
    
          <!-- Modal content -->
          <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h3 class="text-lg leading-6 font-medium text-gray-900">Add New User</h3>
              <div class="mt-5">
                <!-- Add User Form -->
                <form @submit.prevent="addUser($refs.Alert)">
                  <!-- Form fields go here -->
                  <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700">Full Name:</label>
                    <input type="text" v-model="newUser.fullName" id="name" required
                      class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                  </div>

                  <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email" v-model="newUser.email" id="email" required
                      class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                  </div>                  
    
                  <div class="mb-4">
                    <label for="role" class="block text-sm font-medium text-gray-700">Role:</label>
                    <select v-model="newUser.role" id="role" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                      <option disabled selected>Select Role</option>
                      <option v-for="role in users.role" :key="role._id" :value="role._id">{{ user.role }}</option>
                    </select>
                  </div>
    
                  <div class="mb-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                    <input type="password" v-model="newUser.password" id="password" required
                      class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                  </div>
    
                  <button type="submit"
                    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                    Add Item
                  </button>
                </form>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button @click="showModal1 = false ; resetForm()" type="button"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    
    
    <!-- Modal for editing menu item -->
    <div :style="{ display: showModal2 ? 'block' : 'none' }" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    
        <!-- Modal content -->
        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Edit User Info</h3>
            <div class="mt-5">
              <!-- Add Menu Item Form -->
              <form @submit.prevent="updateUser($refs.Alert)">
                <!-- Form fields go here -->
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-700">Full Name:</label>
                  <input type="text" v-model="newUser.fullName" id="name" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>

                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
                  <input type="email" v-model="newUser.email" id="email" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>
    
                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700">Role:</label>
    
                  <select v-model="newUser.role" id="role" class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                    <option disabled selected>Select Role</option>
                    <option v-for="role in users.role" :key="role._id" :value="role._id">{{ role.name }}</option>
                  </select>
    
                  <!-- <input type="text" v-model="newMenuItem.category" id="category" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full"> -->
    
    
                </div>
    
                <div class="mb-4">
                  <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
                  <input type="password" v-model.number="newUser.password" id="password" required
                    class="mt-1 p-2 border border-gray-300 rounded-md w-full">
                </div>
    
                <button type="submit"
                  class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                  Save
                </button>
              </form>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button @click="showModal2 = false; resetForm()" type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>  
    
    <Alert ref="Alert" />
    </template>
    
    <script>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import Alert from '@/components/Alert.vue';
    
    export default {
      components: {
        Alert
      },
      setup() {
        // Reactive variables
        const showModal1 = ref(false);
        const showModal2 = ref(false);
        const newUser = ref({
          email: '',
          password: '',
          fullName: '',
          role: '',
        });
        const users = ref([]);
    
        // Fetch menu items when the component is mounted
        onMounted(async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/users');
            users.value = response.data.userData;
          } catch (error) {
            console.error('Error fetching users:', error);
          } 
        });
    
        // Add a new menu item
        const addUser = async (alertRef) => {
          try {
            const response = await axios.post('http://localhost:5000/api/users', {
              email: newUser.value.email,
              password: newUser.value.password,
              fullName: newUser.value.fullName,
              role: newUser.value.role
            });
            users.value.push(response.data.userData);
            showModal1.value = false;
            resetForm();
            // Show success alert using the passed alertRef
            alertRef.showAlert('User added successfully!');
          } catch (error) {
            console.error('Error adding user:', error);
            // Show error alert using the passed alertRef if failed to add menu item
            alertRef.showAlert('Failed to add user. Please try again later.');
          }
        };    
    
        // Fetch a single menu item
        const getUser = async (itemId, alertRef) => {
          try {
            const response = await axios.get(`http://localhost:5000/api/users/${itemId}`);
            const variable = response.data.userData;
            newUser.value = {
              _id: variable._id,
              email: variable.email,
              password: variable.password,
              fullName: variable.fullName,
              role: variable.role
            };
            showModal2.value = true;
          } catch (error) {
            console.error('Error fetching user:', error);
            // Show alert if failed to fetch menu item details
            alertRef.showAlert('Failed to fetch user details. Please try again later.');
          }
        };
    
        // Update a user info
        const updateUser = async (alertRef) => {
          try {
            // Send a PUT request to update user info
            const response = await axios.put(`http://localhost:5000/api/users/${newUser.value._id}`, newUser.value);
            // Extract updated user data from the response
            const updatedUser = response.data.userData;
            // Find the index of the updated user in the users array
            console.log(updatedUser);
            const updatedUserIndex = userData.value.findIndex(item => item._id === userData._id);
            // If the updated user index is found
            if (updatedUserIndex !== -1) {
              users.value.splice(updatedUserIndex, 1, userData);
            }
            // Hide the modal for editing user info
            showModal2.value = false;
            resetForm();
            // Show success alert
            alertRef.showAlert('User info updated successfully!');
          } catch (error) {
            console.error('Error updating user info:', error);
            // Show error alert if failed to update menu item
            alertRef.showAlert('Failed to update user info. Please try again later.');
          }
        };
    
        // Delete a menu item
        const deleteUser = async (itemId, alertRef) => {
          try {
            await axios.delete(`http://localhost:5000/api/users/${itemId}`);
            users.value = users.value.filter(item => item._id !== itemId);
            // Show success alert
            alertRef.showAlert('User deleted successfully!');
          } catch (error) {
            console.error('Error deleting user:', error);
            // Show error alert if failed to delete menu item
            alertRef.showAlert('Failed to delete user. Please try again later.');
          }
        };
    
        // Reset form fields
        const resetForm = () => {
          newUser.value = {
            _id: null,
            email: '',
            password: '',
            fullName: '',
            role: '',
          };
        };
    
        return {
          showModal1,
          showModal2,
          newUser,
          users,
          getUser,
          updateUser,
          addUser,
          deleteUser,
          resetForm,
        };
      }
    };
    </script>
    
    <style>/* Add your Tailwind CSS styles here */</style>