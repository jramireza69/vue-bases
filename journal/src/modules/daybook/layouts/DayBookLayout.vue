<template>
<div>

      <Navbar />
    <div class="d-flex mt-2">

        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</div>
</template>



<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
    }
}
</script>