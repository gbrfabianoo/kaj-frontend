<template>
  <div>
    <d-container fluid class="main-content-container px-4">
      <!-- Page Header -->
      <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
        <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
          <span class="text-uppercase page-subtitle">Overview</span>
          <h3 class="page-title">Form</h3>
        </d-col>
      </d-row>
              <d-list-group-item class="p-3">
                <d-row>
                  <!-- Forms -->
                  <d-col sm="12" md="6">
                      <div class="form-group">
                        <d-form validated>
                          <strong class="text-muted d-block mb-2">Lingkungan</strong>
                          <d-input placeholder="Petrus Kanisius" required/>
                          </d-form>
                      </div>
                      <div class="form-group">
                        <d-form validated>
                        <strong class="text-muted d-block mb-2">Ketua Lingkungan</strong>
                        <d-input placeholder="Benediktus" required/>
                        </d-form>
                      </div>
                      <div class="form-group">
                        <strong class="text-muted d-block mb-2">Gender</strong>
                        <fieldset id="gender">
                          <d-form-radio value=false v-model="dummydata.female">Male</d-form-radio>
                          <d-form-radio value=true v-model="dummydata.female" >Female</d-form-radio>
                        </fieldset>
                        </div>
                      <div class="form-group">
                        <strong class="text-muted d-block mb-2">Phone</strong>
                        <d-form validated>
                          <d-input-group prepend="+62" class="mb-3">
                        <d-input placeholder="" required />
                        </d-input-group>
                        </d-form>
                      </div>
                      <label validated for="feDescription">Description</label>
                        <d-textarea name="feDescription" rows="5" required></d-textarea>
                        </d-col>

                        <d-col md="12" class="form-group">
                          <!-- <d-checkbox>I agree with your <a href="#">Privacy Policy</a>.</d-checkbox> -->
                        </d-col>
                        <d-button class="ml-3" type="submit">Create New Account</d-button>
                </d-row>
              </d-list-group-item>
        <d-col lg="4" class="mb-4">
        </d-col>
    </d-container>
  </div>
</template>
<script>


export default {
  name: 'Tables',
  data() {
    return {
      dummydata: {
        name: '',
        ketuaLingkungan: '',
        female: null,
        phone: '',
      },
    };
  },
};
</script>
