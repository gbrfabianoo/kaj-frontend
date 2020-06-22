
<template>
  <div class="main-content-container container-fluid px-4">

      <!-- Page Header -->
      <div class="page-header row no-gutters py-4">
        <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
          <span class="text-uppercase page-subtitle">Overview</span>
          <h3 class="page-title">Form Misa</h3>
        </div>
      </div>
              <d-list-group-item class="p-3">
                <d-row>
                  <!-- Forms -->
                  <d-col sm="12" md="6">


                      <div class="form-group">
                        <d-form>
                          <strong class="text-muted d-block mb-2">Hari</strong>
                          <d-select>
                            <option>Senin</option>
                            <option>Selasa</option>
                            <option>Rabu</option>
                            <option>Kamis</option>
                            <option>Jumat</option>
                            <option>Sabtu</option>
                            <option>Minggu</option>

                          </d-select>
                          </d-form>

                      </div>
                      <div class="form-group">
                        <d-form>
                        <strong class="text-muted d-block mb-2">Tanggal</strong>
                         <vc-date-picker v-model="date" :input-props='{ placeholder: "Date",readonly: true}'/>
                        </d-form>
                      </div>
                      <div class="form-group">
                        <d-form>
                        <strong class="text-muted d-block mb-2">Waktu Mulai</strong>
                        <d-input placeholder="Start Time"/>
                        </d-form>
                        </div>


                      <div class="form-group">
                        <strong class="text-muted d-block mb-2">Waktu Selesai</strong>
                        <d-form>

                        <d-input placeholder="Finish Time"/>
                        </d-form>

                      </div>
                      <div class="form-group">
                        <d-form>
                          <strong class="text-muted d-block mb-2">Romo</strong>
                          <d-input placeholder="Pastor"/>

                          </d-form>

                      </div>

                        </d-col>

                        <d-col md="12" class="form-group">
                        </d-col>
                        <d-button class="ml-3" @click="onSubmit()" style="width: 5rem;" pill outline>Submit</d-button>
                        <d-button class="ml-3" @click="onReset()" theme="danger" style="width: 5rem;" pill outline>Reset</d-button>
                </d-row>
              </d-list-group-item>

        <d-col lg="4" class="mb-4">

        </d-col>
  </div>
</template>
<script>


export default {
  name: 'Tables',
  data() {
    return {
      dummydata: {
        name: '',
        female: null,
        ketuaLingkungan: '',
        phone: '',
      },
      date: new Date(),
    };
  },
};
</script>
