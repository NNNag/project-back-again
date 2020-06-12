<template>
    <div>
       <div class="alert" :class="mode" role="alert">
         <slot></slot>
       </div>
    </div>   
</template>

<script>
  export default {
     nane: "alert",
     props: [
       'mode'
     ]    
  };
</script>

<style scope lang="scss">

.primary {
    color: #fff;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.danger {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.success {
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
}
.alert {
    position: relative;
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
}   
</style>
