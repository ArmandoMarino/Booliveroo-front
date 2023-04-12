<script>
import { sliderImages } from '../data/images'
export default {
    name: 'AppMain',
    props: {
        restaurants: Array,
        categories: Array,
    }
}
</script>

<template>
    <!--! JUMBOTRON -->
<div class="jumbotron">
    <div class="container">
        <div class="row">
            <!-- MAIN-TEXT -->
            <div class="col-9 text-lg-center mx-lg-auto">
                    <h1 class="main-text my-4">I piatti che ami, a <span class="primary-color">domicilio.</span>
                    </h1>
                    <p class="postal-code-text">Inserisci il tuo indirizzo per trovare ristoranti nei dintorni</p>

                    <!-- TODO INPUT PASSERA' I DATI NELLA RestaurantPage -->
                    <!-- <div class="input-group mb-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <input type="text" class="form-control search-input" aria-label="Sizing example input"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        aria-describedby="inputGroup-sizing-default">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        <span class="input-group-text search-button" id="inputGroup-sizing-default">Search</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div> -->

                    <router-link class="search-button "
                        :to="{ name: 'restaurants', params: { component: RestaurantPage } }">
                        Search
                    </router-link>

                    <p class="login-text pt-3"><span class="primary-color">Accedi </span>per visualizzare i tuoi indirizzi
                        recenti.</p>

                </div>
            </div>
        </div>
    </div>

    <!--! DYNAMIC IMAGES COLLECTION -->
    <div class="dynamic-img-collection">
        <div class="slider">
            <div class="slide-track mb-3">
                <div class="slide rect "
                    style="background-image:url('https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://www.diregiovani.it/wp-content/uploads/2017/02/logo-McDonald%E2%80%99s.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://media.cdnandroid.com/item_images/600470/imagen-old-wild-west-0ori.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://play-lh.googleusercontent.com/uBCQPdCCHbFJCk3dDidGQ1paIeHaLRi-tJn83t2MkRoYiUX0X3K9CP3uV7dusjfRsqV5') ;">

                </div>
                <div class="slide rect "
                    style="background-image:url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg') ;">

                </div>
                <div class="slide rect "
                    style="background-image:url('https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://equitek.ca/wp-content/uploads/2020/10/Pizza-Hut-logo.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://dcassetcdn.com/design_img/3699781/809346/22123233/cpyfs55fdepsayrhkd5sqkm2m5_image.jpg') ;">

                </div>

                <div class="slide rect "
                    style="background-image:url('https://media.istockphoto.com/id/1220017909/photo/top-view-table-full-of-food.jpg?s=170667a&w=0&k=20&c=aqS9rBQtGzmcOP4ddNKYTU7h8gyG3Y3KVhsh1hlQd-g=') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('https://www.vetrina.toscana.it/wp-content/uploads/2021/11/Pokeria-by-nima-b9d230a3.jpg') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('https://cdn.mos.cms.futurecdn.net/8tEvBrHEeMTTBt26SiniHM-1200-80.jpg') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('https://ristoratori.mycia.it/images/logos/256.jpg') ;">

                </div>



                <!-- DOUBLE IT -->
                <div class="slide rect "
                    style="background-image:url('https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://www.diregiovani.it/wp-content/uploads/2017/02/logo-McDonald%E2%80%99s.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://media.cdnandroid.com/item_images/600470/imagen-old-wild-west-0ori.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://play-lh.googleusercontent.com/uBCQPdCCHbFJCk3dDidGQ1paIeHaLRi-tJn83t2MkRoYiUX0X3K9CP3uV7dusjfRsqV5') ;">

                </div>
                <div class="slide rect "
                    style="background-image:url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg') ;">

                </div>
                <div class="slide rect "
                    style="background-image:url('https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://equitek.ca/wp-content/uploads/2020/10/Pizza-Hut-logo.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://dcassetcdn.com/design_img/3699781/809346/22123233/cpyfs55fdepsayrhkd5sqkm2m5_image.jpg') ;">

                </div>

                <div class="slide rect "
                    style="background-image:url('https://media.istockphoto.com/id/1220017909/photo/top-view-table-full-of-food.jpg?s=170667a&w=0&k=20&c=aqS9rBQtGzmcOP4ddNKYTU7h8gyG3Y3KVhsh1hlQd-g=') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('https://www.vetrina.toscana.it/wp-content/uploads/2021/11/Pokeria-by-nima-b9d230a3.jpg') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABCFBMVEVVIx7mUBD/5LP/6Lb/7br/67n/67j/5rRCAABSIh7/6rntUg/lSQBUIR3/6bhBAABPGBZLIB/kPwBOIR5GHx9MExJLEBBRHRpGAAflSgBJCQxDHh/x1af+3q3y1qjkPgC+QxXJq4fmyZ50TD2JZVG4mXnAoX/0qXmefWOTNhm2QRbzVA6uj3GXdV2QbVdeLyfdwJf6y5r4wJDpZjBuKhzLRxNrQTVcJR3tgE7qbzvcTRF4UUHwk2OeORjyoHD81KONNBruilnxmGjoXSR4LRv4w5JmKB3nVxv2toarPRd/MBvthFNjNiyAW0jrdULjLgAzAACWSC5gPzbFOwDCa0XlsYY2GiAtGCDMe8/DAAAftUlEQVR4nO1dC1fi2LIOSTZJCIEEAokIyFsURFDBFsV3+2q1555z7tz//09uVe0khIfYc0egZ11q1vRCnvlS76q9awvChja0oQ1taEMb2tCGNrShDW1oQxva0IY2tKENbWhDG9rQhja0oQ1taEMb2tCGNvS7keGYZiabzSFlsxnTdIx1X9KXkeFkcq4qVGvNdr1RRmrU281aVVDdXOYfj9Mwc6rz1i5XRJkxFpV8isJfslgpt98cNWf+Y1E6WVU4KOdlOSop4jxSpKgs58sHgpp11n2xf52cbLJaz4fAKcA6YCMSY/BYCcHM16vJfxhIUx3UizJHAdCAVcVKt9FuNztIzXa70a0Ukbn+W+RifaCa677sXyUn6zYrsuQzSKk0DqpZMCvZDJhQIjSqrpo9P2hUFJ/Nklxpuv8IRhruYUNk3kVL3XZVdbPm/At3zKyrnre7knc7mNg4dH93s+O4r2V+vZIsljs5N/MZV5yMm+uURf9D5Vf3d+ajkTv08DGpWwM/MPV6Lud5/Gx24iXwKZ1ulHkYD3O/LR8zZiOK+BS52HbcWTeXK3OHj9ScRG+YrtMuknBL0YaZWdk1/xVykk0xyk1GR8348FDV3BwXvCQLXL5ccf3P+XJsZNQON1BRsZn8DUU1N6jIxL/KW9LjjwEqVmt085XyOeFJSoGzl7o+wmz7UPXZbSbfKjLyUa4McmvAsIicZJvh9cv5mo9PUA+baCYlBdxdQ4UnkjKxGAK4aMBD51yWuweBRJvJWp7exdq/Fxuzr8RACcQr0C+3IrMgcpHrOY5Qqr/VauD137zrz5UlAH0AnzI4ShOEne5V5TW7FixzST1ABipyORMyEW6XrA7EM3TBh4agAkLWzJHT9xmUxZvAmhkAeOgZp4xZRlGV2IG6BizzyHHpiljxXA2bz0wTzL9SaVcHCJW1M4brIxzLn9kk49TOwCO528nSFxjqeZHRHfs9/L8p5NGTyQ130gE4hySUScdJeqYlh080akCH/pvUCjJYamTxEfhCz76YbgOlnuWF3yBWzVZRbSSxxkXKhDSec0JQ84qo5FWuawqYlgy3IZAa1nwP8SqTZS3n6JHcCQCpNYW+trp2ZczV0E1HKwJpoOl2Gt1u45AgZutwjfKrYSRBTIGHhiP7dse3M/QWZHCOPwqJeeawEsVYtbZmt6E28arlcpIuTT0oyOjOOSfAEaD+JdU2XGoU9FAgHkLKFCBMFnzvmCxyYR2ToZbpu5vu9I+uktQ2v4gk/6vMZc73dSra0koZIx1FNMFYoh6W2+12/dXzDDXOVaWSxEfyYNIFJvm3t9doUjnAaI0jcuv0V1Sue6xA/RMV8hns3BQIYbTjQnboCaOLzrALfCz+Qao6DcWtsfVCJICKcs4BOQNkkdjuNH1WmAeMs0guVkFNnVdCOLaOhgmvsxq+JQmPok3uTSHYU1UeymbP0V3K7TUJag51UBEHnpfPNoANeUh3A3dnmFGyK5Wmik8ZeAtYCCF5TPGPoiJKnSgwO+N5w3ZFLHqhbGYgIsTmWsxNtsYB+lfsgmuT6qrjmBlMAvFpHtaYKr8HxGT2llRV1XXxkpMVwFb+A/5VuviIcypXQessee7e5BBra3AaZhUZoAxCcSjCqb1WO+1yt1uugeXPoBUN7AchFIv5fL5SqXRz/G/5XMXboAQuxC1HuUuJcoNlDvBrWXXlrt8R8Kqi1XEgmm3gpTGqoKHL6GYNrprtrI+Q1FJBkoqqkCOxTpI9Qujq+DZQ5SbKmZo5xwhOFFYdwLl5KRAejsA4HKd/nAeqoIKOBSbSqfoeH1ACHlekcBX1F0FxC0xsl8oDdDxylZsbVAcpv2Jro5ZZ4IxzDV4EzHRkxa/ykoVp8quXvdtvDArFop8BF12zI9NrhAmTDw4HP8GyZhIdiRemumjSWHmlPiN7gIaf/2ayK1ccfnVveZnBf8VKt4C6VXGdN3yfX5MxVE5gZyB2zdYh/oF43CSLKnU5gEybkeqSSBc9UEnUTflghdbGeQVzJ1UoVMMsQCq+EghHHdRqVRMgYCgqRlESQxnDmAxka+6wLoLvMMmtswMv1ENRhhAPkkmI0INyAVgxhb2uLutPktkU8Ad54KX4OYBjOtQwM2vo4MCadPP16kfOzMliwkXhqyi6guOgKJDqQkZiHjSbbb/5ZggUDSZXAQ4ph7GM/GaO/8DQxLcEBoA0KZ1Ac5/7tFIPoQ6pnFOtnoPD4GIKD8xMJqjYCRmKW9srcvykIqzhK757IHO7wp8wzIPq4ACZHMr2iLR02uKUTmuh581BA9yiWZWBsvB5SQxszJjUBv7oYDVyijKqFMfGO/dGBSe5TkKExTM5ir6yGzJ+acvWTq5H+yWk/dH1iWZbaf9FkNZaxjBkyiYpHIdMcfpX3aKyKjnNNMeuyntmwKtjZUxgScowmwgqokLaFq73hzpSBIkeDfevBdsHaXgKiCUpilblwbSDN1Fd5eYKquGGSYWVCf9rCnmqVXchI6AQRWJS28vXNUvb63vQJknX+3vwqv8l5AmLOTPXZKEqwJg4b1fQEs9RcJad/CEnWyGnljecbLkoFrptL9DR7JP9ufB8kPsntofROcRoJl+tFr3i4xQZGbyJjaUbG7oO+cDLFiCLyJA5MSjIAWF9NbPo0z0raD/0P4bngeyf2Pyrs5RuyhSXziTDgqce0cNlGxuUFQiXCZU7aJfL7TeVGJqk+l+QDyOlhdJn+AhjSeD6qDa8wFWZUHP6LfwnmR/nWEsjXvQjV+iYZZlhj16sCyg6apM3VQIfsb0XmQK4Fee0NQUxsrfNITapDyBNBGiGmXWTh/ilFF3Ir8vVRF5ZQRYaQtHPJSRWx8at25FDdai0NiGgW/FU6u7bxeXu7u7lxbe7VGoCpt7XiI3Zw0ZeKnQH2TE49bBT73qWB/3UkplIdWz+a2o+lCxFi1jLyJ5D4pfnHVzrJMzAeOrssqewmE9M6V2epeJhNp5YhCmrJqlGEwIH+abnCSmQl5eqiWjRuRXI1RnWPosi46sMom8AMfNa4NGqYF+P8W2l7nYLjLEYK/SOnp6ejnoFeMxYYfcuNWakfm37v+KDKxA4Tlz4Vax7NJaZY2DSKtewFSagae8KSfW8zK+CIirnlcdV9mgMMHX2HZjHepfvkRQIZxzENRV5v+whK7+fpcYQRx5Es4bgmA+O55w8QeFx/hLFFFM5hZI2z6QiKFcojw08bwKGAMYfj1iCXd1GJhUP1DJycRWT2NFdIKv6M4foduVAASTINhUKJjgsHvgsr2aDQsLaGU8fo1633VBrFLQFYUgIYOoSrOP3CZUbK+fPd4RwGbDR4yIv1fDaTblZrWDnrutFSBgTzlaOv4zwp3lVk0dQcnfgeoVbFhRawMgEOrj12IvB+wo/UnMAAnosBCRivUefu/o1mRuIHiQG+q2IavIVQ1657EfclHlMV/+/jrA/RMbaOAwt8DHomsZVlfSJDzB+JiZQxBLy0xyIW71YQpSObuHfd5/F+gk6DeO10ujkMMOs85p3eZxSkLuqL8vWYH+I7AxwsxtgFHK8MOoj1AIe/WCJwmMh9r4rx3rTYrr1WEiw25tYb+e4ILExkylINXCh2ED2zAzzOltEVPMoLimJ4tVArgOOWu3yyhq4e7DucGdJQSGS6fsAb2TWi+9cxW52AOrVFBcBoPS+cxk7im/Fe0y+8F/ub/s/53p11DAHUekLU7nbFxIXUj+2d/y1L2JUaTsgTFw70nuejMZ/yLGjVCR1FNuNx99jid4ExHghoRzH4/hiBN8j//CYrO8FOaPBa5KNSYblliim2LXmQupjrOV5cwnXevnpgC+FZ4wd7QCUSwbY4u8sFtbFVE9KHG9FdgrsBq3MzhFj75650QUvm0pSpdirHIwJXSL1zr+eeAt3MvNNHhSZH3RQOG772cSjyLm2BewD9sRvmHwT6GJqFxDBX8eMPfqIxUcPYYl7RbUrzwPoRR2z6eMXkHkQDS3W8p9U+WI2L3DUfDua6iUKHFBKiX0D9qSeYok7n7/vcgy9YPw25qsnSK0vxvoJMjHX/ag5ig2t6MEynH5ubE3ClMm1QRM95bc9MxO/jLFjLnagZCSfqatEbyeA832HniI1JNDHsdil97iPTORtq3ndX3T6s7W4ryBSw3m+NmvWJZkKawELH1ns1r/2b7HEFmFgjMspyKhELx0z+TgwPZeM3YWZ6H7U3kaTvhRF5GtF5joiIyeUiYVWyZPRo5B3SIkcbWo3JhLCu1jsAh/Ed1nIhwCPj7y/ShjZZJp+BXaacAGSvIStKJibzahhgNErbOu+HZXPgjgbJLaQ4sJJgojwubhKsZtxNB76kE5faR588GOoiHNqcX+bKGxZ7IfSXsSd+p74HvZ+EuM8u2XIxDvG0PQgCwvhd40/pY8odvvImKBfjs4ahL9NaGiinYUmzLczgOEslCoBFC6eKRGgxp8CFrLbcCyHHtTTxL696GfIqC/B1LiVDwxNQNqp7iGKTcVoSmw3xeX1KhVXuBamnhKFyXeNTat+qi34HTI1la9Pg3GBk7xwNaQfsKUK7GKimgZ+j/uOR8aOb5iCMLbemfxtsuYWv/DFdhy6zSV3HB9/IWFEoxQXfq1nSUHaEpFJAjtJXE31YpfgHkkpC4HpHFMg3WRNPyS1OG6dfx05VfaxKeVkDzkrKBKdJNBMdPvxi9iVSCHOzveEOI0PbgDzvP5woSKiMWVfnl5gXvaZentC2guik7AAMkyQHrEWgB4DYp73qbow6al3b/SFv0PRVe2r4zYsQi2u42n3HkIlNnvxEJayb3EQV1EBEJg6Xs6m/RClKx7C+0WmBmuaX1+OQne42An5hgYk0ge4RaVDqiGCWMbewVVIics4AIw97cS9F+PxreD9Mc9fLDY1n1/L/4XQzbKF/cn0MyGEOJQs4lY89fjt8umod3XV6x093b5fKexm5yIR+7ZzKUtPqffb3aNeD1572r04i/NaY6oQ4/ZVf16IEOXpy5NglIzFOYu176kcKlM89eOpIMdCRMnQ0xlw6Sgmilds4jXW28WKI6jwBVfh/UXGlFz+l1e+SbsXhjSeswBzcbRz96TAdcfE3tPlxc3Nxe3uU09kCUlMUCpJy9nhtd3biwvvNQBZuNzaOfKN1EJ3YXaWkT99br8sHrNBRPMEKTxTji7uqIi/tbVFKnd388QRwr9PN/y1OPXbUqnj2+8JFlNunvyopr8Q4S/Y9aUiTCgJdnUTT00b1K3Uz10svSRuf868Fk9FbgssISb+GQhF6eLnjC8Ay/Otx3kYO5pX5gf860f4a3ooiYp09GMrcAMopan4+24hpigKFXkldnV5jE1Szkp6w9aPI+wTrk8P/4otvbpCy3H1dHnzfnx8d/z+4/apl4gB/6Srb+AVESPa1u+7F9+O7+7ujs/gDWhc5aOrNdrSv+QPf347UqbcQYz1RKkQf4/FHu9E5eoCLQu2SQOSr3aPf67TH/6lmAaV7uziqXclYutXKoDTeP/Zk8RI/Ecsdhw/lhJHP+Nnt/iGBPiNQu/o8scjOv11xjR/OS71IrY4LlHAqA08yPFWHGOarfg3GdL7IKTjkRtn/xrj0jn2y8hOrYzycws2k1tgERhriWBoE6BpqV2fWZMuI8i7JnMLJzfJr+XkFrP5oXHYaEykoQvyQ4g4KeFN9RQJE2A/JZ56U5B3TeSH5nl5cmHpcvLD2RzfrTB5AvI4x2cz3NmNiRRag7MgaHfMt5phmpvjGwaT5Amtw2b+1+f4s3UaeEIphCGP6zQzV/8oUb0bwIOjoPf45eHwbbiNzavTYOFpQj8MdSl1mtlaW6YtT97aj2ttkP/SM/FddnTFy1RxcaYS8FGtze3K0fPQD9NygiXU2mbrpbnB1H5yTxGn66VUY6O0HzDc7Mao7uuVh0O09f5RvdStTmwHNjvLqZfOqXk7U8r+Uc3bZyoIaQz/p05hSpyS5VRvsuYd/qEJnVtWzXth38KnoG8xUWcCMNSgAGE9SgEfL+NzZBn9Sbhv8TEtq2+xoPcU0NzeEzhyTyAfscAWv2AivXYXk8M+cbr39DEtq/f0cf9wTOP+YSLk9eNP7InX8ambFve7bRORAfYP/T73yaKAhhuapTTyP+gBT1CoBxw79uU0xYvAwDRqOsFr5BvBOYwjg5ke8Me0vB7w3D7+FIX6+FLBZ9AxY8Sz716bO15IUKPmmMXGfJ7u439My+vjz1mLMUu2p4mRR8W/ZF58g7SCyZyt8RvuTYC3vj0COzq9FuPDy1CXthZjZj3NPPK9frCeBtWQ92LEYEXNDmdw6rvf7Mf1NL4HDdbTfEBLXE8ztSbqA7JGk2uiKJ6+jYeWnyCDpcTTDlXleOd07pqoDwj31i5rTVR4XdvHNLWubYsXsneeQqYH0bPbFJgadPG0ru1mdl3bB0SttSWtawutTVxAmr/ui69NPI6Dup3tXIaXRFHgLd/s3NCCsONCYnpt4gKixezLWps4Xl+6kPxcH9eXKlLs8qcYOwZntzsRjINgsptvrLeTumQJ8WxyfekiWubCvfAa4YVk7YXXCMd6BeUqJu9OJbxgZmJXiaezKxZeI7y3OJrBuoL0adzxdyhY572Y7OfQOu9EAvcKXcxm/bvwQoElEjPrvBdRphld5jrv0Fr9xRSCiGv1JfHqZnatfvwJ5I0dPc6s1V9E6LGWuVZ/vN/iEwpBpP0WCTa532IL91skEvP3Wywg823J+y1Ce2Y+IXtvDNHbMxOLxYI9M1Qkntozs/c5QNq1vtw9M3zf0/kvKLp1H1a6T/c9Rbx9T5/8/PnS9z15e9cWMdHxZnNqwv9h75qw+OJxDMqyNyCG9h/OJ+e1zHeVCtr2Xhgihzl//6Hu7T80MoNFEsi3ri15/2F4D+lcSlZk8c3bwpM+/Wt7SB2nIi8aCMkn9ix7xsnEPuBZytJW9rI3fVazT35pHzAP1ZxBQVo0EDJzsJJ9wPP3cvvkvEZpp1nx3LvTgLG0cC93KdjLbeRocMGHcz2N3Gr2cvP9+NHGfFnhI0Fwq3LDH3isWcLow/34I2G8H1/whw2x+Wx06dauYkT97EyFgPgUEIWmKRXHI03S9uleaRiMVOBDFYalvdNgpgJ9WTCDSJKayRkg9OpKZir4czHmeAw+CEp+6yg0zTQUwGppyxbu9573S/1+v7T/vHcv2FYw/sNx+ZwrDHupz6/IlcNpNmK8tqr5Ld5skxk5NWjzs1RWMwLu+gKEhjdYjtNHs01wBDhVlkyakkJ7ZZCNE1JCMrqq2SaT82lCT9dpvlnSFIxkU4rC/XaL5bfkZ1FsrixLCuW0tC9NardlYmM3zEYKSFc2n2ZixtCYPDVSilXXELKH3VfH7MiSXFy8+t0zMFzBsrhRRkmeF8UpNhpGsPFoNRSeExUQKgpXojpAdEA+adYcK3vDzqasoJNxvTGJ6GFF6kQaAsp/+48aHwADbPTeklz1nCg+62s8ZgjJrdMOr2iws9wbMCv5f9QOVRenoGSp/Z+rtrueKcrRADNiIu2qLNA8RoWzkZsgHDC00llfwby2sV7weVbyoCNKvkHgo+akLr1Jrciy2HWd80ajUT403IocjXppmGGQq0fLxSWdpgzy4cR0E3JrmNfmz9x7C24rDjkSWd1FO+oZBJc7N2oEqGUaPqOaTVmS5FeHD57zBDdXpyG1+F3JCt96WxyoYIAkGq+VeVvHzD1vbmIwsJHkiErRhtrhsLnt5/3obMcTWGx+QHrgUJrgr5MzTIKFwss/JFVM0OJOngaHmlVpLXMTvdmXojeKjqY5sHNing+aR3AYGzivfLBEM+MjFFxFGRfQs22yMFmvKyHm/6CZbxT4ma9K+Faukrz5pQQx0+abng/G5jXYbQ5W0puDAqEeRzgw+GhTPzCioFpUUGjJYYRiQvN1bfNLgxm0BDE7yJMV7Tp+qEYWUupKiqImy3yzsKQaAUI+eM7PZglXFGfvG0ZUDFURPIDrmUHrzxHmAwUdtU7D8MWO55ZdUrw6ZHzJA3/isysECPlA2iB0xXcrkuEPpPBrvpmquM45wv4saD5U3HCrtK9b7tJLNNFSPkeEh5AzkndrZMcIqcMybrjSkDYJkz9aIFTk49r4rLvfYNy13KSyheM2ZMRCtx/zBCX/RxtrHgq4EXLqZgghjaKXgiHsGJKKDBuf4Dm7tCXVUJtrHnZNF8Znsjd4BOm+FZl8ToMzaEhnk64RjGb3jU8lDSHEpcyhRSOUdVIRxuzUyV4ZfHrYmmey+3P1WYX7CDNX5lkVz9dzGQQEEHN1bxaih9DxRmGPu0gGLscjPyLwc3RMA4fcrX+uPp2NwJgiKR0a9Wjk6JKNrEJqxaevyufe2QF8xZZnR0iOKXCDINzg483Hw1zdN3HybITP2m5LIs2yT0al4y0c/TQs7Ql+3RpbREHoAraeEj+sxocQ8qMTDDOrvjYrILdqPiqXvYGQJh9O54sG0vRKsNXgsx+e+SDLu7P392M9Fd/XePLu5oGt4NTQJ0TLSW+ivjmBkGL1aAdP2GMYYZud7oCv7kSzHJ06oyTd+qw7vASyTkuIrj+6h3haxmFlu/GtB7oQ560sYREAhxFByMxxkY6NEdKKVZzcrXhuw/RKHplcY/KcGbxtp63VA7RHWDwbndppzT8rKKG8R7igOrkcpXMmkw4d76AOvN4wQr96SBO9Ao9gJg94khnUFO37ezt9HfmF1tQXA8RK78j2akreeU9KIv5ffumB565yLcOXMXHvzn0ER8jHXCt4BN2BnzmY6hs/V2lc3k8P9VZ/e7hyPbSfdb2khX41N/guKZK0c9Q9Dx3VaBInUR65YyCEXoaMIszkfP0tOIrUVM+702d22aX+fUv/bLHb15N2r+vPE0tftJPU8dXVewR4UqmFzl0TCAoYkxofXxkaeKxWus1XNevBMzJqbfbcNe2hdb39PNR/obv4tWT19f2ptT3Wfiu1c0Ybt+Ri2wyfjQTGsVmmpWhmB7AGyZHrHY+opS0rnWkXCd/k2XnpUetFs+5bL6sWUkvXZ6y3Jdw//Iuff6gwqTxx/qGT4Y1T47VTq9WmP/jw/O9//4cGSM+cf2g9t641wZ5ZGL10SrfmKYamBWdYkgGpuTNnWBqmObk83MnYz634zUX8B/NH3GnB18E/tOrbHi7c6rUMsj9cgDZxDqnSbQ+SOF5uXpHFwHNIk4P2f+JnEPj1fha8c0g1TyKthxNLSOv4S1Z/5QhBPe4/Uv7QWbLo6cRuvTNwJ8+SzeBZsu6ABrAWUo/g9BXl53/zs2Stfot2H1qjVmsvbesR/cTajlyvPKSxS62RjS0WTaN/Jl8Nnwcs4qxhVuyWG+3mAWph56DZbpS7kGjhANbEBc6Nkos3ce9sUqtECNMvrb1S37L0Zz1yva+vISrFkKY0erm/f9l7Pjm5P7UnQc6c6UyncUdpM2WUTuj2nmdnqUK+/q9/x1/8L0jTwhN7GPkz8mwJre2+3tJf1hCVCun09X5/GIkMMfhutYYz9vzXzuUunrUO8cjq9PjjiEY7RVuW1k4itv0yOl1b7mTZ9p8jaldfj+btivyFs9WTz62Hcatb498L/7/oKKva9dACd7kODvqUvm7p+xB9Wy/D6Y0gFr9wA3yhqwrVWrNdb/DjcuvtZq0qgPHJOIa2PeyPPCHUNHygPfTT8L06fp9VWrkRnSYIbkbbeFm6Prn/WtNKpRBXwTXQcdz8xGMwqp4DsU73I5EWTxy0E70Pd8WKtPDO6cNt+JLWJ3sTlk9oEMCcbl/rEdxSp2EPG5+37kF4wcSnF7MAvP3wZZsnlbgzbB8ew82ix/rett1fecQ9Q+AYR9rDXr8VGd5v2/b1fmn/2obsH1KPIdgHa7RQysD3PYMR9thkPev9yMh6QYQWLt7oRyILp36thsBrtFp6f28bbjqZ1WFrf/sULo8u/aTVWuCrAWBoUalm9/X+Qxq5dwpB0wvmZ59svlgNpe3TU6yzpbeRb9f29oMOXIi80KWn+8PTDz8JUQMlKGmySdpDZKiDy7FKuIf0oaWBoV55zvQB8YgG7IRestM4Cxrky6/+WR/rkfbCLYx13S+RMP45xD1PNu6S3d5fvwLOkLWvYzRuv+CCZjSv4C4W8gCEEnOi9F5rfxiBB9pwCOKpgdvRR3uthTMH1kPgN+7TaQsPXcGgXLO0ks5dpGbNd9k67Wi2h6NtC7CmR6DGFnrAB9Ds0e8ioCGCHH/PusYABzyEZp+g2UFGQHT3vH9PQou+ZBy+vOgkpDaYT6tU2j7V9+AJTWg9pE9Hv7Imeg3Uh+h0qD9va2n7AdfO6ojL3gOH3ifHbT3s9/uBB9fAp5Ma7keE7ef+SWQfFHh7u1Sy1xymLSAwqn+WWi/b2ksfVStyArzcBqkdbV+3XiDDem61Sv1gIETa4yGWC/tDHf0GxEWlT3c+rZXAAT4MW+Ae94WRHnkAuyr0df3Evm+VrPQpHkTyP6VgPpL2oOs8mLGvn/V9CLchemj1fwMXv5g0+/7lxLZsMPxpiuXwvANNQ4BgYsGYjBHAe7z6knXfIteePp1OM39LIiUCw3rysDeMPGP8LCAG0MthvzQCS+OHADiggAyPdao//56WZQFB5tpqRUb2nl7axrDnuQVwtnHVrD2uz4NDHJ7Ytjb6bO/vb0ma9YA9m1Ndf7GEvcjw9J64mbb6wzG7wHlCxN6K/MqGoN+QSKHS92h5hnu2lgbnsa3tRfrhXMM63XsevdjrTnL/Fmn2wz2tWAcH34L/pjeopdO/q+/7dfIrjWnt5fre+kez61OaKatuaEMb2tCGNrShDW1oQxva0IY2tKENbej/Ef0vONeGBtf2WqYAAAAASUVORK5CYII=') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('https://ristoratori.mycia.it/images/logos/256.jpg') ;">

                </div>
            </div>
            <div class="slide-track">
                <div class="slide rect "
                    style="background-image:url('https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://www.diregiovani.it/wp-content/uploads/2017/02/logo-McDonald%E2%80%99s.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://media.cdnandroid.com/item_images/600470/imagen-old-wild-west-0ori.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://play-lh.googleusercontent.com/uBCQPdCCHbFJCk3dDidGQ1paIeHaLRi-tJn83t2MkRoYiUX0X3K9CP3uV7dusjfRsqV5') ;">

                </div>
                <div class="slide rect "
                    style="background-image:url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg') ;">

                </div>
                <div class="slide rect "
                    style="background-image:url('https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://equitek.ca/wp-content/uploads/2020/10/Pizza-Hut-logo.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://dcassetcdn.com/design_img/3699781/809346/22123233/cpyfs55fdepsayrhkd5sqkm2m5_image.jpg') ;">

                </div>

                <div class="slide rect "
                    style="background-image:url('https://media.istockphoto.com/id/1220017909/photo/top-view-table-full-of-food.jpg?s=170667a&w=0&k=20&c=aqS9rBQtGzmcOP4ddNKYTU7h8gyG3Y3KVhsh1hlQd-g=') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('https://www.vetrina.toscana.it/wp-content/uploads/2021/11/Pokeria-by-nima-b9d230a3.jpg') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('data:image/png;base64,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') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('https://ristoratori.mycia.it/images/logos/256.jpg') ;">

                </div>



                <!-- DOUBLE IT -->
                <div class="slide rect "
                    style="background-image:url('https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://www.diregiovani.it/wp-content/uploads/2017/02/logo-McDonald%E2%80%99s.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://media.cdnandroid.com/item_images/600470/imagen-old-wild-west-0ori.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://play-lh.googleusercontent.com/uBCQPdCCHbFJCk3dDidGQ1paIeHaLRi-tJn83t2MkRoYiUX0X3K9CP3uV7dusjfRsqV5') ;">

                </div>
                <div class="slide rect "
                    style="background-image:url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=pexels-ella-olsson-1640772.jpg&fm=jpg') ;">

                </div>
                <div class="slide rect "
                    style="background-image:url('https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://equitek.ca/wp-content/uploads/2020/10/Pizza-Hut-logo.jpg') ;">

                </div>
                <div class="slide square"
                    style="background-image:url('https://dcassetcdn.com/design_img/3699781/809346/22123233/cpyfs55fdepsayrhkd5sqkm2m5_image.jpg') ;">

                </div>

                <div class="slide rect "
                    style="background-image:url('https://media.istockphoto.com/id/1220017909/photo/top-view-table-full-of-food.jpg?s=170667a&w=0&k=20&c=aqS9rBQtGzmcOP4ddNKYTU7h8gyG3Y3KVhsh1hlQd-g=') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('https://www.vetrina.toscana.it/wp-content/uploads/2021/11/Pokeria-by-nima-b9d230a3.jpg') ;">

                </div>

                <div class="slide square"
                    style="background-image:url('data:image/png;base64,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') ;">

                </div>

            <div class="slide square"
                style="background-image:url('https://ristoratori.mycia.it/images/logos/256.jpg') ;">

            </div>
        </div>
    </div>
</div>



<!-- ! DELIVEROO'S SELECTION
    <div class="deliveroo-selection  my-5 ">
        <div class="container ">
            <h2 class="selection-title m-0 py-4">La selezione di Booliveroo</h2>

            SELECTION-COLLECTION
            <div class="row selection-collection d-flex justify-content-center">



                COMFORT FOOD
                <div class="col-12 col-sm-6 col-lg-5">
                    <a href="#">
                        <div class="selection-card mb-5">
                            CARD-IMG
                            <div class="selection-img">
                                <h3 class="img-text text-center">Comfort Food</h3>
                            </div>

                            CARD-TEXT
                            <div class="card-body">
                                <p class="card-description my-2">I grandi classici che scaldano il cuore, perfetti in ogni
                                    momento.</p>
                                <p class="discover-link"><a href="#">Scopri Comfort food</a></p>
                            </div>
                        </div>
                    </a>
                </div>

                DOLCI E DESSERT
                <div class="col-12 col-sm-6 col-lg-7">
                    <a href="#">
                        <div class="selection-card mb-5">
                            CARD-IMG
                            <div class="selection-img">
                                <h3 class="img-text text-center">Dolci e dessert</h3>
                            </div>

                            CARD-TEXT
                            <div class="card-body">
                                <p class="card-description my-2">Dolci piaceri per rendere la giornata ancora più gustosa.
                                </p>
                                <p class="discover-link"><a href="#">Scopri Dolci e dessert</a></p>
                            </div>
                        </div>
                    </a>
                </div>

                PERFETTI DA CONDIVIDERE
                <div class="col-12 col-sm-6 col-lg-7">
                    <a href="#">
                        <div class="selection-card mb-5">
                            CARD-IMG
                            <div class="selection-img">
                                <h3 class="img-text text-center">Perfetti da condividere </h3>
                            </div>

                            CARD-TEXT
                            <div class="card-body">
                                <p class="card-description my-2">Serve una scusa per stare insieme? Ordina dai ristoranti
                                    che trasformeranno la tua serata in una vera festa.</p>
                                <p class="discover-link"><a href="#">Scopri Perfetti da condividere</a></p>
                            </div>
                        </div>
                    </a>
                </div>


                ESCLUSIVA DELIVEROO
                <div class="col-12 col-sm-6 col-lg-5">
                    <a href="#">
                        <div class="selection-card mb-5">
                            CARD-IMG
                            <div class="selection-img">
                                <h3 class="img-text text-center">Esclusiva Booliveroo</h3>
                            </div>

                            CARD-TEXT
                                        <div class="card-body">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p class="card-description my-2">I più famosi, i più buoni, i preferiti. Quelli che trovi
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        solo su Booliveroo</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <p class="discover-link"><a href="#">Scopri Esclusiva Boolivero</a></p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div> -->

    <!--!RESTAURANTS CATEGORIES-->
    <div class="restaurants-categories my-5">
        <div class="container">
            <h2 class="categories-title my-4">Le nostre cucine</h2>

            <!-- RESTAURANTS CATEGORIES COLLECTION -->
            <div class="row categories-collection d-flex justify-content-center">

                <!-- CATEGORIES -->
                <div v-for="category in categories" :key="category.id" class="col-12 col-sm-6 col-lg-4">
                    <router-link :to="{ name: 'categories-restaurants', params: { id: category.id } }">
                        <div class="categories-card mb-5">
                            <!-- CATEGORIES CONTENT -->
                            <div class="categories-content">
                                <!-- IMG -->
                                <div class="categories-img">
                                    <img :src="category.image" class="img-fluid" :alt="category.name">
                                </div>
                                <!-- BUTTON -->
                                <div class="categories-button">
                                    <!-- <h1 class="categories-text">{{ category.label }}</h1> -->
                                    <button>Scopri di più</button>
                                </div>
                                <!-- TEXT -->
                                <h2 class="categories-text">{{ category.label }}</h2>

                            </div>

                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <!--! NEWS -->
    <div class="news my-5 pb-4">
        <div class="container">
            <h2 class="news-title py-3">Novità dalla nostra cucina</h2>


            <div class="news-card mb-4">
                <!-- DELIVEROO FOR WORK -->
                <div class="row deliveroo-for-work align-items-center">

                    <div class="col-6">
                        <div class="news-img"></div>
                    </div>

                    <div class="col-6">
                        <div class="card-text">
                            <h4>Deliveroo for Work</h4>
                            <p>Clienti o colleghi affamati? Il nostro team Corporate ti può aiutare.</p>
                            <a href="#" class="primary-button">Contattaci</a>
                        </div>
                    </div>

                </div>
            </div>


            <div class="news-card">
                <!-- DELIVEROO APP -->
                <div class="row deliveroo-app align-items-center">

                    <div class="col-6">

                        <div class="card-text ps-3 row">

                            <div class="col-12">
                                <h4>Hai già la nostra app?</h4>
                            </div>
                            <div class="d-none d-md-block ">
                                <p>Scaricala ora - disponibile su Apple Store e Google Play!</p>
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-3">
                                        <a href="#">
                                            <img class="img-fluid download "
                                                src="https://chiavari.ditechmobility.com/wp-content/uploads/2018/04/apple-store.png"
                                                alt="download-appstore">
                                        </a>
                                    </div>

                                    <div class="col-12 col-sm-6 col-md-3">
                                        <a href="#">
                                            <img class="img-fluid download"
                                                src="https://chiavari.ditechmobility.com/wp-content/uploads/2018/04/apple-store.png"
                                                alt="download-appstore">
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-6">
                        <div class="news-img"></div>
                    </div>

                </div>
            </div>
        </div>
</div>


<!--! WORK WITH DELIVEROO -->
<div class="work-with-deliveroo my-5">
    <div class="container">
        <h2 class="work-title py-4">Lavora con Booliveroo</h2>

        <div class="row">

            <!-- RIDER
                <div class="col-12 col-md-4 ">
                    <div class="mb-5" style="background-color: #FF483B;">
                        <div class="p-0 work-card">

                            CARD-IMG
                            <div class="work-img">
                                <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                    class="img-fluid mb-2" alt="...">
                            </div>

                            CARD-TEXT
                                        <div class="card-body p-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <h3>Rider</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <p class="card-description py-3">Diventa un rider:flessibilità, ottimi guadagni e un mondo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    di
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    vantaggi per te.</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <a href="#" class="primary-button">Unisciti a noi</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div> -->





                <!-- RESTAURANTS-->
                <div class="col-12 ">
                    <div class="mb-5" style="background-color: #FF8100;">
                        <div class="p-0 work-card pb-4">

                            <!-- CARD-IMG -->
                            <div class="work-img">

                            </div>

                            <!-- CARD-TEXT -->
                            <div class="card-body p-3">
                                <h3>Ristoranti</h3>
                                <p class="card-description py-3">Diventa partner di Booliveroo e raggiungi sempre più
                                    clienti. Ci
                                occupiamo noi della consegna, così che la tua unica preoccupazione sia continuare a
                                preparare il miglior cibo.</p>
                            <a href="#" class="primary-button">Diventa partner</a>
                        </div>

                    </div>
                </div>
            </div>


            <!-- CAREERS
                <div class="col-12 col-md-4 ">
                    <div class="mb-5" style="background-color: #BAC3C3;">
                        <div class="p-0 work-card">

                            CARD-IMG
                            <div class="work-img">
                                <img src="https://media.istockphoto.com/id/618630648/it/foto/hamburger-smash-al-formaggio-fatto-in-casa.jpg?s=612x612&w=0&k=20&c=hRo3VZF0OZwXgkFTIXbks25H2ikQiFCPZtk0wYVAAxA="
                                    class="img-fluid mb-2" alt="...">
                            </div>

                            CARD-TEXT
                                        <div class="card-body p-3">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <h3>Lavora con noi</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <p class="card-description py-3">La nostra missione è trasformare il modo in cui le persone
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    mangiano. È un obiettivo ambizioso, come noi, e ci servono persone che ci aiutino a
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    raggiungerlo..</p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <a href="#" class="primary-button">Scopri di più</a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </div>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </div> -->


            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/partials/variables' as*;



// ****** GENERAL******
.primary-button {
    padding: 10px 20px;
    border-radius: 4px;

    color: white;
    background-color: $primary;
}

.primary-color {
    color: $primary;
}

a {
    text-decoration: none;
}


li {
    list-style-type: none;
}



// JUMBOTRON
.jumbotron {
    min-height: 470px;
    background-image: url('https://c4.wallpaperflare.com/wallpaper/646/592/902/black-background-sandwich-hamburger-bokeh-fast-food-hd-wallpaper-preview.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;


    .main-text {
        font-size: 40px;
        font-weight: 700;
    }


    .search-button {
        border-radius: 20px;
        padding: 10px 20px;
        background-color: $primary;
        color: white;
    }


}

// DYNAMIC IMAGES COLLECTION
.dynamic-img-collection {


    // Animation
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(-2120px)
        }
    }


    // Styling
    .slider {
        margin: auto;
        overflow: hidden;
        display: grid;


        .slide-track:first-child {
            animation: scroll 10s linear pause;

        }

        .slide-track:last-child {
            animation: scroll 20s linear pause;

        }


        .slide-track {
            height: 100%;
            display: flex;
            width: 4240px;
        }


        .slide {
            height: 130px;
            margin-left: 15px;
            display: flex;
            align-items: center;


            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            border-radius: 10px;
        }

        .slide.square {
            width: 130px;
        }

        .slide.rect {
            width: 270px;
        }

        .slide img {
            max-width: 100%;
            min-height: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }




}


// DELIVEROO'S SELECTION
.deliveroo-selection {
    background-color: black;
    color: white;

    .selection-card {
        a {
            color: white;
        }

        .selection-img {
            position: relative;
            background-image: url('https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 150px;

            .img-text {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        .card-body {
            .discover-link {
                a {
                    color: $primary;
                }
            }
        }
    }
}


// RESTAURANTS CATEGORIES

.categories-card {
    transition: 0.8s;


    .categories-content {
        position: relative;
        transition: 0.8s;


        &:hover {
            scale: 0.9;
        }

        .categories-img {}

        .categories-img img {}


        .categories-button {

            &:hover {
                opacity: 1;

            }

            background: linear-gradient(0deg, rgba(0, 0, 0, 0.6)0%, rgba(0, 0, 0, 0)80%);
            color: white;
            opacity: 0;

            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            display: flex;
            justify-content: center;
            align-items: center;

            transition: 0.5s;

            button {
                background-color: transparent;
                padding: 10px 20px;
                border: 2px solid white;
                color: white;
                transition: 0.6s;

                &:hover {
                    background-color: rgba(0, 0, 0, 0.6);
                }
            }

        }
    }

    &:hover .categories-text {
        opacity: 0;
    }

    .categories-text {
        text-align: center;
        color: white;
        background-color: black;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 5px;

        transition: 0.5s;
    }



}




// NEWS
.news {
    min-height: 300px;
    background-color: #F9FAFA;

    .news-card {
        background-color: white;

        .download {
            width: 100px;
        }

        .news-img {
            background-image: url('https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 150px;
        }
    }
}


// WORK WITH DELIVEROO

.work-with-deliveroo {

    .work-card {
        color: white;

        .work-img {
            height: 300px;
            background-image: url('https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
        }
    }


}
</style>