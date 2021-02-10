<template>
  <!-- BEGIN: Delete Confirmation Modal -->
  <div id="delete-confirmation-modal" class="modal">
    <div class="modal__content">
      <div class="p-5 text-center">
        <xCircleIcon class="w-16 h-16 text-theme-6 mx-auto mt-3" />
        <div class="text-3xl mt-5">Are you sure?</div>
        <div class="text-gray-600 mt-2">
          Do you really want to delete these records? This process cannot be
          undone.
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button
          type="button"
          data-dismiss="modal"
          class="button w-24 border text-gray-700 mr-1"
        >
          Cancel
        </button>
        <button type="button" class="button w-24 bg-theme-6 text-white">
          Delete
        </button>
      </div>
    </div>
  </div>
  <!-- END: Delete Confirmation Modal -->
</template>

<script>
export default {
  name: "DeleteModal",

}
</script>

<style scoped>

</style>
