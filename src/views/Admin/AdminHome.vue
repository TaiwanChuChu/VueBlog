<template>
  <div>
    <b-table :items="items" :fields="fields" striped responsive="sm">
        
        <template v-slot:cell(content)="row">
            {{ row.item.content | fmContent }}
        </template>

        <template v-slot:cell(id)="row">
            <b-button size="sm" @click="editArt(row.item.id)" class="mr-2">編輯</b-button>
            <b-button size="sm" @click="delArt(row.item.id)" class="mr-2">刪除</b-button>
        </template>

     <!--  <template v-slot:row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Age:</b></b-col>
            <b-col>{{ row.item.age }}</b-col>
          </b-row>

          <b-row class="mb-2">
            <b-col sm="3" class="text-sm-right"><b>Is Active:</b></b-col>
            <b-col>{{ row.item.isActive }}</b-col>
          </b-row>

          <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
        </b-card>
      </template> -->
    </b-table>
   <!--  <pre>
           {{ items }}
    </pre> -->
  </div>
</template>

<script>
import { mapState, mapAction } from 'vuex';

    export default {
        data() {
            return {
                fields: [
                    { key: 'title', label: '文章標題' },
                    { key: 'content', label: '文章內容' },
                    { key: 'id', label: '功能' },
                ]
            }
        },
        computed: {
            ...mapState(['articles']),
            items: function() {
                return this.articles;
            }
        },
        methods: {
            editArt: function(id) {
                this.$router.push({ name: 'Admin_Edit', params: { id: id } }).catch(err => {console.log(err);});
            },

            delArt: function(id) {
                console.log('delArt: ' + id);
            },
        },
        filters: {
            fmContent: str => {
                console.log(str);
                return str.length > 150 ? str.substring(0, 150) + '．．．' : str;
            },
        }
    }
</script>
<!-- 
<script>
import { mapState, mapAction } from 'vuex';

    export default {
        data() {
            return {
                sortBy: 'title',
                sortDesc: false,
                fields: [
                    { key: 'title', sortable: true },
                    { key: 'contents', sortable: true },
                    { key: 'id', sortable: false },
                ],
            }
        },
        computed: {
            ...mapState(['articles']),

        }
    }
</script> -->