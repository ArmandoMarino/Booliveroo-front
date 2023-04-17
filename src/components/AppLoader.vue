<script>
export default {
    name: 'AppLoader'
};
</script>

<template>
    <div class="loader-overlay">
        <div class="my-spinner text-primary" role="status">
            <span class="loader">
            </span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.loader-overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;


    background-color: rgba(0, 0, 0, 0.8);

    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

.my-spinner {
    height: 150px;
    width: 150px;
    z-index: 2;
}

.loader {
    display: block;
    width: 48px;
    height: 48px;
    margin: auto;
    position: relative;
}

.loader:before {
    content: '';
    width: 48px;
    height: 5px;
    background: #000;
    opacity: 0.25;
    position: absolute;
    top: 60px;
    left: 0;
    border-radius: 50%;
    animation: shadow 0.5s linear infinite;
}

.loader:after {
    content: "";
    width: 100%;
    height: 100%;
    background: url(../assets/img/loader_logo.png) no-repeat;
    background-size: 45px;
    animation: bxSpin 0.5s linear infinite;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
}

@keyframes bxSpin {
    17% {
        border-bottom-right-radius: 3px;
    }

    25% {
        transform: translateY(9px) rotate(22.5deg);
    }

    50% {
        transform: translateY(18px) scale(1, .9) rotate(45deg);
        border-bottom-right-radius: 40px;
    }

    75% {
        transform: translateY(9px) rotate(67.5deg);
    }

    100% {
        transform: translateY(0) rotate(90deg);
    }
}

@keyframes shadow {

    0%,
    100% {
        transform: scale(1, 1);
    }

    50% {
        transform: scale(1.2, 1);
    }
}
</style>