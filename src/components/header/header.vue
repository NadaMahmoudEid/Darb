<template>
  <div class="navigation-wrap bg-light start-header start-style">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-md navbar-light">
            <div class="col-3 d-flex">
           
              <div class="col-3">
                <div class="row">
                  <div class="col-2 me-3">

                    <h5>سلة</h5>
                    <h5>ر.س</h5>

                  </div>
                  <i class="fa-solid fa-bag-shopping col-1 mt-4"></i>

                </div>

              </div>
              <div class="col-4">
                <div class="row">
                  <div class="col-2 me-5">

                    <h5>حسابى</h5>
                    <h5>تسجيل الدخول</h5>

                  </div>
                  <i class="fa-regular fa-user mt-4 text-danger col-1"></i>

                </div>

              </div>

              <div class="col-4 mt-3">
                <div class="dropdown">
                  <select class="language-select">
                    <option value="en">EN</option>
                    <option value="ar">AR</option>
                  </select>
                </div>
                <img src="../../assets/flag.svg" alt="Saudi Arabia Flag">
              </div>


            </div>
            <div class="col-7">
              <div class="col-12 col-md-10 col-lg-12">
                <form class="card card-sm p-1">
                  <div class=" row no-gutters align-items-center">
                 
                    <!--end of col-->
                    <div class="col">
                      <input class="form-control form-control-lg form-control-borderless" type="search"
                       id="search" placeholder="أدخل كلمة البحث">
                    </div>
                    <!--end of col-->
                    <div class="col-auto" >
                      <button class="btn btn-lg" type="submit">  <i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                    <!--end of col-->
                  </div>
                </form>
              </div>
            </div>
            <div class="col-2">

              <img src="../../assets/newLogo.svg" alt="">

            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.icon {
  position: relative;
  display: inline-block;
  font-size: 24px;
  /* Adjust the size as needed */
}

.icon::before {
  content: "<i class=" fa-solid fa-bag-shopping"></i>";
  /* Unicode value for the desired Font Awesome icon */
  font-family: "Font Awesome";
  /* Font Awesome font family */
}

.icon sub,
.icon sup {
  position: absolute;
  font-size: 12px;
  /* Adjust the size as needed */
  color: #888;
  /* Adjust the color as needed */
}

.icon sub {
  bottom: -8px;
  /* Adjust the position as needed */
}

.icon sup {
  top: -8px;
  /* Adjust the position as needed */
}

i {
  font-size: xx-large;
  margin: 3%;
  margin-top: 30%;
  position: relative;
}

/*                         */   .dropdown {
      display: inline-block;
      position: relative;
    }
    
    /* CSS for the language select */
    .language-select {
      color: black;
      padding: 12px 16px;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border: none;
      background: transparent;
      cursor: pointer;
    }
     
    /* CSS for the arrow icon */
    .dropdown::after {
      content: "\25BE";
      position: absolute;
      top: 50%;
      right: 4%;
      transform: translateY(-50%);
    }
      /* CSS for the dropdown list options */
    .language-select option {
      padding: 8px 16px;
      background-color: #fff;
      color: #000;
    }
    
    .language-select option:hover {
      background-color: #f1f1f1;
    }

.form-control-borderless {
  border: none;
}

.form-control-borderless:hover,
.form-control-borderless:active,
.form-control-borderless:focus {
  border: none;
  outline: none;
  box-shadow: none;
}
#search{
  padding: 0;
    text-align: right;
    margin: 0;
}
.col-auto button{
  background-color: #00464A;
  color: white;
  font-size: smaller;
  

}
/* Please ❤ this if you like it! */
</style>