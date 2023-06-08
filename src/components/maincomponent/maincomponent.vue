<template>
   
   <div >
        <div>
           <Headercomponent/>
        </div>

        <div> 
            <RouterView></RouterView>
        </div>

        <div>
          <Footer/>
        </div>

    </div>
</template>

<script>
import Headercomponent from '@/components/header/header.vue'
import Footer from '@/components/Footer/footer.vue'
export default {
    components:{
        Headercomponent,
        Footer,
        
     }
}
</script>

<style scope>
.main{
   min-height: 100vh;
   width: 100%;
}

</style>