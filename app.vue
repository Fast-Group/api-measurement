<template>
  <div>
    <h1>Measurements API</h1>
    <p>This API receives data from the dimensioning machine.</p>
    <h2>Request</h2>
    <p>POST /api/measurements</p>
    <pre>
    {
    "Barcode": [
      "YT2318522147003012"
      ],
      "MachineCode": "PAXF-01",
      "Weight": 0.0,
      "Length": 0.0,
      "Width": 0.0,
      "Height": 0.0,
      "RequestTime": "2023-06-08 15:09:29"
    }
  </pre>
  <h2>Response</h2>
  <pre>
    {
       "Message": "success",
       "Barcode": "YT2318522147003012",
       "ChuteCode": [ 2 ]
    }
  </pre>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Measurements API',
})
</script>
