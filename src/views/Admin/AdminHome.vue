<template>
  <div>
    <h1>AdminHome</h1>
  </div>
</template>

<script>
import { mapState, mapAction } from 'vuex';

export default {
    // data() {
    //     return {
    //         form: {
    //             title: '',
    //             date: '',
    //             contents: '',
    //         },
    //         show: true
    //     }
    // },
    // methods: {
    //     onSubmit(evt) {
    //         evt.preventDefault();
    //         alert(JSON.stringify(this.form));
    //     },
    //     onReset(evt) {
    //         evt.preventDefault();
    //         // Reset our form values
    //         this.form.title = '';
    //         this.form.date = '';
    //         this.form.contents = '';
    //         // Trick to reset/clear native browser form validation state
    //         this.show = false
    //         this.$nextTick(() => {
    //             this.show = true;
    //         });
    //     }
    // }
}
</script>