<template>
  <div>
    <b-form inline id="searchForm">
      <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Search for a component" />
      <b-button variant="primary">Go!</b-button>
    </b-form>
  </div>
</template>
<script>
</script>
<style lang="scss">
#searchForm {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  input {
    width: 35%;
  }
}
@media (max-width: 700px) {
  #searchForm {
    align-items: center;
    input {
      width: 70%;
      margin-right: 5%;
      margin-bottom: 0 !important;
    }
    button {
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
