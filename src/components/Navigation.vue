<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'Home' }">Blogs</router-link>
      </div>
      <div class="nav-links">
        <ul v-show="!mobile">
          <router-link class="link" to="#">Home</router-link>
          <router-link class="link" to="#">Blogs</router-link>
          <router-link class="link" to="#">Create Post</router-link>
          <router-link class="link" to="#">Login/Register</router-link>
        </ul>
      </div>
    </nav>
    <menuIcon @click="mobileToggleNav" class="menu-icon" v-show="mobile"/>
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-show="mobileNav">
        <router-link class="link" to="#">Home</router-link>
        <router-link class="link" to="#">Blogs</router-link>
        <router-link class="link" to="#">Create Post</router-link>
        <router-link class="link" to="#">Login/Register</router-link>
      </ul>
    </transition>
  </header>
</template>

<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
export default {
  name: "navigation",
  components: {
    menuIcon,
  },
  data() {
    return {
        mobile: null,
        mobileNav: null,
        windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 750) {
            this.mobile = true;
            return;
        }
        this.mobile = false
        this.mobileNav = false;
        return;
    },
    mobileToggleNav() {
        this.mobileNav = !this.mobileNav;
    }
  }
};
</script>

<style lang="scss" scoped>

header {
    background-color: white;
    padding: 0 23px;
    box-shadow: 0 3px 5px -1px black, 0 1.5px 4px -1px black;
    z-index: 99;

    .link {
        font-weight: 500;
        padding: 0 6px;
        transition: .3s color ease;

        &:hover {
            color: rgb(46, 217, 236);
        }
    }
    nav {
        display: flex;
        padding: 23px 0;

        .branding {
            display: flex;
            align-items: center;
            
            .header {
                font-weight: 550;
                font-size: 22px;
                color: black;
                text-decoration: none;
            }
        }
        .nav-links {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;

            ul {
                margin-right: 32px;

                .link {
                    margin-right: 32px;
                }
                .link:last-child {
                    margin-right: 0;
                }
            }
        }
    }

    .menu-icon {
        position: absolute;
        top: 30px;
        right: 22px;
        height: 22px;
        width: auto;
        cursor: pointer;
    }
    .mobile-nav {
        padding: 20px;
        width: 300px;
        max-width: 250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: rgb(104, 101, 101);
        top: 0;
        left: 0;

        .link {
            padding: 15px 0;
            color: rgb(199, 244, 246)
        }

    }

    .mobile-nav-enter-active,
    .mobile-nav-leave-active {
        transition: all 1s ease;
    }

    .mobile-nav-enter {
        transform: translateX(-250px);
    }
    .mobile-nav-enter-to {
        transform: trnslateX(0);
    }
    .mobile-nav-leave-to {
        transform: translateX(-250px);
    }


}

</style>