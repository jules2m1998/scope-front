<template>
    <v-container id="page" class="my-10">
        <v-card
                class="mx-auto px-4 d-flex flex-column justify-center align-center py-4"
                width="500px"
        >
            <img class="img__prev" @click="openFile" id="upload" alt="image" src="~@/assets/utils/test.jpg" width="400px">
            <input type="file" id="imgFile" v-show="false" @change="setImage">

            <v-btn x-large color="primary" class="w-100 mt-10" dark @click="searchImage">Rechercher</v-btn>
        </v-card>
    </v-container>
</template>

<script>
    import {httpParams} from "@/components/mixins.mixin";

    export default {
        name: "Search",
        methods: {
            openFile () {
                document.getElementById('imgFile').click()
            },
            setImage(event) {
                this.fullPictureLocation = event.target.files[0]
                let reader = new FileReader();
                reader.onload = function()
                {
                    let output = document.getElementById('upload');
                    output.src = reader.result;
                }
                reader.readAsDataURL(event.target.files[0]);
            },
            searchImage () {
                if (this.fullPictureLocation){
                    const imageForm = new FormData();
                    imageForm.append('img', this.fullPictureLocation)
                    this.$http.post(this.host + 'person/image/find', imageForm)
                        .then(res => {
                            let id = res.data.correspondances.id

                            this.$router.push({name: 'detail', params: {id}})
                        })
                }
            }
        },
        data: () => ({
            fullPictureLocation: null
        }),
        mixins: [httpParams]
    }
</script>

<style lang="scss" scoped>

    .img__prev{
        border: 1px dotted red;
        height: auto;
        width: 400px;
        cursor: pointer;
        &:hover{
            border: 1px dotted #0f1b4c;
        }
    }

</style>