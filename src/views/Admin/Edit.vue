<template>
  <div>
    <b-form @reset="onReset" @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="ArtTitle"
        label-for="input-1"
        class="mt-3"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          type="text"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Date" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.date"
          type="date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="ArtContent:" label-for="input-3">
       <b-form-textarea
          id="input-3"
          v-model="form.content"
          placeholder="Art content..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            // form: {
            // 	id: this.$route.params.id,
            //     title: '',
            //     date: null,
            //     content: '',
            // },
            show: true,
        }
    },
    computed: {
    	...mapGetters(['findTgArtByID']),
    	
    	form: function() {
    		return this.findTgArtByID(this.$route.params.id);
    	},
    },
    methods: {
    	...mapActions(['updateArt']),

        onSubmit(evt) {
            evt.preventDefault();
            this.updateArt(this.form);
        },
        onReset(evt) {
            evt.preventDefault();
            // Reset our form values
            this.form.title = '';
            this.form.date = '';
            this.form.content = '';
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true;
            });
        }
    }
}
</script>