<script setup>
function handleFetchGet() {
  fetch('/api/get')
    .then(response => {
      response.json().then(result => {
        console.log("result", result)
      })
    })
}
function handleFetchPost() {
  fetch('/api/post', {
    method: 'POST',
  })
    .then(response => {
      response.json().then(result => {
        console.log("result", result)
      })
    })
}
function handleFetchText() { 
  fetch('/api/text')
    .then(response => {
      response.text().then(result => {
        console.log("result", result)
      })
    })
}
</script>

<template>
  <div>
    <button @click="handleFetchGet">Get</button>
    <button @click="handleFetchPost">Post</button>
    <button @click="handleFetchText">text</button>
  </div>
</template>

<style scoped></style>
