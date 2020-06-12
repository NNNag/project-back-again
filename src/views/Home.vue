<template>
    <div class="home">
       <button-counter></button-counter>
       <todo></todo>
    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import ToDo from "@/components/ToDo.vue";

export default {
    name: "home",
    components: {
        HelloWorld,
        ToDo
    }
}
</script>
