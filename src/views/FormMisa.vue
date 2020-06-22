
<template>
  <div>

    <d-container fluid class="main-content-container px-4">

      <!-- Page Header -->
      <d-row no-gutters class="page-header py-2 pb-4 mb-3 border-bottom">
        <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
          <span class="text-uppercase page-subtitle">Overview</span>
          <h3 class="page-title">Form Misa</h3>
        </d-col>
      </d-row>


              </d-list-group-item>

              <d-list-group-item class="p-3">
                <d-row>

                  <!-- Forms -->
                  <d-col sm="12" md="6">


                      <div class="form-group">
                        <d-form validated>
                          <strong class="text-muted d-block mb-2">Hari</strong>

                          <d-select required>

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
                        <d-form validated>
                        <strong class="text-muted d-block mb-2">Tanggal</strong>
                         <vc-date-picker v-model="date" :input-props='{ placeholder: "Date",readonly: true}'/>
                        </d-form>
                      </div>
                      <div class="form-group">
                        <d-form validated>
                        <strong class="text-muted d-block mb-2">Waktu Mulai</strong>
                        <d-input placeholder="17.00" required/>
                        </d-form>
                        </div>


                      <div class="form-group">
                        <strong class="text-muted d-block mb-2">Waktu Selesai</strong>
                        <d-form validated>

                        <d-input placeholder="19.00" required />
                        </d-input-group>
                        </d-form>

                      </div>
                      <div class="form-group">
                        <d-form validated>
                          <strong class="text-muted d-block mb-2">Romo</strong>
                          <d-input placeholder="Mgr. Ignatius Suharyo" required/>

                          </d-form>

                      </div>

                      <label validated for="feDescription">Description</label>
                        <d-textarea name="feDescription" rows="5" required></d-textarea>

                        </d-col>
                      </d-form-row>
                    </d-form>
                  </d-col>


                        <d-col md="12" class="form-group">
                          <!-- <d-checkbox>I agree with your <a href="#">Privacy Policy</a>.</d-checkbox> -->
                        </d-col>
                      </d-form-row>
                        <d-button class="ml-3" type="submit">Buat Jadwal Misa</d-button>
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>

          </d-card>
        </d-col>

        <d-col lg="4" class="mb-4">


                </d-form>
              </d-list-group-item>
            </d-list-group>
          </d-card>
        </d-col>
      </d-row>
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
        female: null,
        ketuaLingkungan: '',
        phone: '',


      },
      date: new Date(),
    };
  },
};
</script>
