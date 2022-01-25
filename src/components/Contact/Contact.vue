<template>
  <div >
    <h4 style="text-align:center;">Contact us</h4>
    <div id="inquiry-form">
      <b-card
        class="col-md-4"
        title="Get Quotations"
        sub-title="We will contact you back"
      >
        <InquiryForm />
      </b-card>
    </div>
  </div>
</template>

<script>
import InquiryForm from "./Inquiry.vue";
export default {
  name: "ContactUs",
  components: {
    InquiryForm,
  },
};
</script>
