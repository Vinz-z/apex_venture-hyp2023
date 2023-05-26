<template>
    <div>
      <table :id="tableId" :class="tableClass">
        <caption>{{ caption }}</caption>
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <th scope="row">{{ item.year }}</th>
            <td :style="`--size: ${item.progress};`">
              <span class="data">{{ item.value }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tableId: {
        type: String,
        default: "animations-example-3"
      },
      tableClass: {
        type: String,
        default: "charts-css column show-labels hide-data data-spacing-5 show-primary-axis"
      },
      caption: {
        type: String,
        default: "Animation Example #3"
      },
      data: {
        type: Array,
        default: () => []
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    height: 200px;
    max-width: 300px;
    margin: 0 auto;
  }
  
  tbody {
    overflow-y: hidden;
  }
  
  tbody th {
    background-color: #fff;
    z-index: 1;
  }
  
  tbody td {
    animation: moving-bars 4s linear infinite;
  }
  
  @keyframes moving-bars {
    0% { transform: translateY(100%); }
    15% { transform: translateY(0); }
  }
  </style>