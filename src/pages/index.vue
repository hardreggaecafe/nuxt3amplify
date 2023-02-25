<template>
  <div>
    <h1>Hello World</h1>
    <p>hahahaha</p>
    <p>{{$config.baseURL}}</p>
  </div>
</template>

<script setup Lang='ts'>
  const runtimeConfig = useRuntimeConfig()

  console.log ("hahaha");
  console.log("apiURL=" + runtimeConfig.public.apiURL);
  console.log(`secret=${runtimeConfig.public.secret}`);
  console.log(`undefined=${runtimeConfig.public.undefined}`);
</script>
