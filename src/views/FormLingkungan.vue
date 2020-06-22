<template>
  <div class="main-content-container container-fluid px-4">
      <!-- Page Header -->
      <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
          <span class="text-uppercase page-subtitle">Overview</span>
          <h3 class="page-title">Form Lingkungan</h3>
        </div>
      </div>
              <d-list-group-item class="p-3">
                <d-row>
                  <!-- Forms -->
                  <d-col sm="12" md="6">
                      <div class="form-group">
                        <d-form>
                          <strong class="text-muted d-block mb-2">Lingkungan</strong>
                          <d-input placeholder="Nama Lingkungan" v-model="form.name"/>
                          </d-form>
                      </div>
                      <div class="form-group">
                        <d-form>
                        <strong class="text-muted d-block mb-2">Ketua Lingkungan</strong>
                        <d-input placeholder="Nama Ketua Lingkungan" v-model="form.ketuaLingkungan"/>
                        </d-form>
                      </div>
                      <div class="form-group">
                        <strong class="text-muted d-block mb-2">Gender</strong>
                        <fieldset id="gender">
                          <d-form-radio value=false v-model="form.female">Male</d-form-radio>
                          <d-form-radio value=true v-model="form.female" >Female</d-form-radio>
                        </fieldset>
                        </div>
                      <div class="form-group">
                        <strong class="text-muted d-block mb-2">Phone</strong>
                        <d-form>
                          <d-input-group prepend="+62" class="mb-3">
                        <d-input placeholder="Nomor HP" v-model="form.phone"/>
                        </d-input-group>
                        </d-form>
                      </div>
                        </d-col>

                        <d-col md="12" class="form-group">
                          <!-- <d-checkbox>I agree with your <a href="#">Privacy Policy</a>.</d-checkbox> -->
                        </d-col>
                        <d-button class="ml-3" @click="onSubmit()" style="width: 5rem;" pill outline>Submit</d-button>
                        <d-button class="ml-3" @click="onReset()" theme="danger" style="width: 5rem;" pill outline>Reset</d-button>
                </d-row>
              </d-list-group-item>
  </div>
</template>
<script>


export default {
  name: 'Tables',
  data() {
    return {
      form: {
        name: '',
        ketuaLingkungan: '',
        female: null,
        phone: '',
      },
    };
  },
};
</script>
