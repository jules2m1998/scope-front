<template>
    <div>
        <div id="one__illustration" class="w-100">
            <div id="filter" class="w-100 d-flex flex-column justify-center align-center">
                <div id="search__box" class="d-flex flex-row align-center">
                    <div id="icon" class="ml-2"><v-icon>mdi-magnify</v-icon></div>
                    <div id="input" class="mr-3"><input type="text"></div>
                </div>
            </div>

        </div>
        <v-container id="two_what">
            <v-row justify="center" align="center">
                <v-col cols="7" id="left__text" class="align-center px-8">
                    <h1>C'est quoi scope ?</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias cupiditate dolorem ex iure, nobis similique vero. Aspernatur, blanditiis consectetur deserunt earum iusto, labore necessitatibus optio quasi qui quia quis?
                    </p>
                </v-col>
                <v-col id="right__illust" cols="5" class="d-flex justify-end">
                    <img src="~@/assets/home/right__illust.png" alt="Illustration" height="200px">
                </v-col>
            </v-row>
        </v-container>
        <v-row id="tree__show">
            <v-container class="">
                <h1>Personnes récemment déclarées perdues</h1>
                <div class="d-flex justify-space-between" id="persons">
                    <div v-for="(person, key) in declares" :key="key" class="d-flex align-center flex-column" :class="key%2 === 0 ? 'align-self-baseline' : 'align-self-end'">
                        <v-avatar width="150px" height="auto">
                            <img
                                    :src="person.img"
                                    :alt="person.name"
                            >
                        </v-avatar>
                        <div class="person__name mt-2 font-weight-bold">
                            {{person.name}}
                        </div>
                    </div>
                </div>
            </v-container>
        </v-row>
        <v-container id="four__begin" class="d-flex flex-column align-center justify-center">
            <h1>Avez-vous perdu quelqu'un ?</h1>
            <v-btn class="ma-2" x-large outlined color="primary">
                Commencer
                <v-icon right>mdi-login</v-icon>
            </v-btn>
        </v-container>
        <div id="five__stat">
            <v-container>
                <v-row>
                    <v-col id="img__stat">
                        <img src="~@/assets/home/stats.png" alt="Statistiques" height="200px">
                    </v-col>
                    <v-col id="stats">
                        <h1>Le nombre 225</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci animi autem beatae consectetur consequuntur, et eveniet excepturi fugiat in nisi perferendis placeat reprehenderit ut, voluptas. Dolor doloremque est porro.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: () => ({
            declares: [
                {
                    img: "https://cdn.vuetifyjs.com/images/john.jpg",
                    name: "Meva'a Jules Junior"
                },
                {
                    img: "https://cdn.vuetifyjs.com/images/john.jpg",
                    name: "Meva'a Jules Junior"
                },
                {
                    img: "https://cdn.vuetifyjs.com/images/john.jpg",
                    name: "Meva'a Jules Junior"
                },
                {
                    img: "https://cdn.vuetifyjs.com/images/john.jpg",
                    name: "Meva'a Jules Junior"
                },
                {
                    img: "https://cdn.vuetifyjs.com/images/john.jpg",
                    name: "Meva'a Jules Junior"
                },
            ],
            path: 'http://127.0.0.1:8800/individual/current',
            base: 'http://127.0.0.1:8800/'
        }),
        created() {
            this.$http.get(this.path)
                .then(res => {
                    let data = res.data
                    this.declares = []
                    data.forEach(item => {
                        console.log(data)
                        this.declares.push({
                            img: this.base + item.person.imgs[0].fullPictureLocation,
                            name: item.person.name
                        })
                        console.log(this.declares)
                    })
                })
                .catch( err => console.log(err))
            console.log(this.path)
        }
    }
</script>

<style scoped lang="scss">
    #one__illustration{
        height: 450px;
        background: url("~@/assets/home/illustration.png") no-repeat center center;
        background-size: cover;

        #filter{
            background-color: rgba(33, 67, 206, .5);
            height: 100%;

            #search__box{
                width: 40%;
                height: 40px;
                background: rgba(255, 255, 255, .36);
                border-radius: 10px;
                box-shadow: 0 0 14px 8px rgba(0, 0, 0, 0.21);

                #icon{
                    flex-grow: 1;
                }
                #input{
                    flex-grow: 20;
                    input{
                        width: 100%;
                    }
                    input:focus{
                        outline: none;
                    }
                }
            }
        }
    }
    #two_what{
        #left__text{
            h1{
                color: #2c3762;
                font-size: 18px;
            }
            p{
                color: #7f7a7a;
                font-size: 14px;
            }
        }
    }
    #tree__show{
        background: #f7f8fa;
        h1{
            font-size: 20px;
        }
        #persons{
            width: 100%;
            height: 245px;
            .person__name{
                font-size: 12px;
            }
        }
    }
    #five__stat{
        background: #1f28cf;
        color: white;
        #stats{
            text-align: right;
        }
    }
</style>