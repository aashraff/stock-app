<template>
  <q-page class="row items-center justify-evenly">
    <example-component
      title="View your favourite stock by code"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
  </q-page>
</template>

<script lang="ts">
import Vue from 'vue';

import ExampleComponent from 'components/OptionsComponent.vue';
import { Todo, Meta } from 'components/models';

export default Vue.extend({
  name: 'PageIndex',
  components: { ExampleComponent },
  data() {
    const todos: Todo[] = [
      {
        id: 1,
        content: 'ANZ',
      },
      {
        id: 2,
        content: 'Wesfarmers',
      },
      {
        id: 3,
        content: 'IBM',
      },
      {
        id: 4,
        content: 'NRMA',
      },
      {
        id: 5,
        content: 'Tesla',
      },
      {
        id: 6,
        content: 'AWS',
      }
    ];
    const meta: Meta = {
      totalCount: 6
    };
    return { todos, meta };
  }
});
</script>
