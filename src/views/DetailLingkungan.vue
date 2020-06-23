<template>
  <d-container fluid class="main-content-container px-4">
    <!-- Page Header -->
    <d-row no-gutters class="page-header py-4">
      <d-col col sm="4" class="text-center text-sm-left mb-4 mb-sm-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Lingkungan Profile</h3>
      </d-col>
    </d-row>

    <d-row>
      <d-col lg="4">
        <d-card class="card-small mb-4 pt-3">

          <d-card-header class="border-bottom text-center">

            <div class="mb-3 mx-auto">
              <img class="rounded-circle" src="@/assets/images/avatars/0.jpg" :alt="dummydata.name" width="110" v-show="dummydata.female">
              <img class="rounded-circle" src="@/assets/images/avatars/1.jpg" :alt="dummydata.name" width="110" v-show="!dummydata.female">
            </div>

            <h4 class="mb-0">{{ dummydata.name }}</h4>

            <span class="text-muted d-block mb-2">Paroki Santa Perawan Maria Diangkat ke Surga</span>

            <d-button pill outline size="sm" class="mb-2 mr-2 mt-2" style="width: 5rem;" @click="edit()"> Edit </d-button>
            <d-button pill outline size="sm" class="mb-2 mt-2" theme="danger" style="width: 5rem;"> Delete </d-button>

          </d-card-header>

          <d-list-group flush>

            <d-list-group-item class="px-4">
              <div class="progress-wrapper">
                <strong class="text-muted d-block mb-2">Tickets Used</strong>
                <d-progress class="progress-sm">
                  <span class="progress-value">74</span>
                  <d-progress-bar :value="74" :max="100" />
                </d-progress>
              </div>
            </d-list-group-item>

            <d-list-group-item>
              <strong class="text-muted d-block mb-2">Description</strong>
              <span>{{ description }}</span>
            </d-list-group-item>
          </d-list-group>

        </d-card>
      </d-col>
      <d-col lg="8">
        <d-card class="card-small mb-4">
        <d-card-header class="border-bottom">
          <h6 class="m-0">Lingkungan Detail</h6>
        </d-card-header>
          <d-list-group flush>
            <d-list-group-item class="p-3">
              <d-row>
                <d-col>
                  <d-form>
                    <d-form-row>
                      <!-- First Name -->
                      <d-col md="6" class="form-group">
                        <label for="name" style="cursor: context-menu;">Lingkungan</label>
                        <d-form-input type="text" id="name" v-model="form.name" v-show="editMode" class="hoverable"/>
                        <d-form-input type="text" id="name" :value="form.name" v-show="!editMode" disabled style="cursor: context-menu; border-color: white;"/>
                      </d-col>
                      <!-- Last Name -->
                      <d-col md="6" class="form-group">
                        <label for="paroki" style="cursor: context-menu;">Paroki</label>
                        <d-form-input type="text" id="paroki" value="Paroki Santa Perawan Maria Diangkat ke Surga" disabled style="cursor: context-menu; border-color: white;"/>
                      </d-col>
                    </d-form-row>
                    <d-form-row>
                      <!-- Email -->
                      <d-col md="6" class="form-group">
                        <label for="ketuaLingkungan" style="cursor: context-menu;">Ketua Lingkungan</label>
                        <d-form-input type="text" id="ketuaLingkungan" v-model="form.ketuaLingkungan" v-show="editMode" class="hoverable"/>
                        <d-form-input type="text" id="name" :value="dummydata.ketuaLingkungan" v-show="!editMode" disabled style="cursor: context-menu; border-color: white;"/>
                      </d-col>
                      <!-- Password -->
                      <d-col md="6" class="form-group">
                        <label for="gender" style="cursor: context-menu;">Gender</label>
                        <fieldset id="gender" class="ml-2" v-show="editMode">
                          <div style="display: flex">
                          <d-form-radio value=false v-model="form.female" style="font-size: 0.8rem;" class="hoverable">Male</d-form-radio>
                          <d-form-radio value=true v-model="form.female" style="font-size: 0.8rem;" class="ml-4 hoverable">Female</d-form-radio>
                          </div>
                        </fieldset>
                        <d-form-input type="text" id="gender" :value="dummydata.female ? 'Female' : 'Male'" v-show="!editMode" disabled style="cursor: context-menu; border-color: white;"/>
                      </d-col>
                    </d-form-row>
                    <!-- Address -->
                    <div class="form-group">
                        <label for="phone" style="cursor: context-menu;">Phone Number</label>
                        <d-input-group prepend="+62" class="mb-3 hoverable" id="phone" v-show="editMode">
                          <d-input v-model="form.phone"/>
                        </d-input-group>
                        <d-input-group prepend="+62" class="mb-3" id="phone" v-show="!editMode" disabled style="cursor: context-menu; border-color: white">
                          <d-input :value="dummydata.phone"/>
                        </d-input-group>
                      </div>
                  </d-form>
                    <d-button pill outline theme="success" style="width: 5rem;" @click="onSubmit()" v-show="editMode">Update</d-button>
                    <d-button pill outline theme="danger" style="width: 5rem;" class="ml-2" @click="onCancel()" v-show="editMode">Cancel</d-button>
                </d-col>
              </d-row>
            </d-list-group-item>
          </d-list-group>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
const dummydata = {
  name: 'Dominikus 3',
  ketuaLingkungan: 'Gabriel Fabiano',
  female: false,
  phone: '8119431818',
};

export default {
  name: 'user-profile-lite',
  created() {
    this.update();
  },
  data() {
    return {
      editMode: false,
      description: 'lorem ipsum',
      dummydata,
      form: {
        name: '',
        ketuaLingkungan: '',
        female: null,
        phone: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.dummydata.name = this.form.name;
      this.dummydata.ketuaLingkungan = this.form.ketuaLingkungan;
      this.dummydata.female = this.form.female;
      this.dummydata.phone = this.form.phone;
      this.editMode = !this.editMode;
      this.update();
    },
    onCancel() {
      this.update();
      this.edit();
    },
    edit() {
      this.editMode = !this.editMode;
    },
    update() {
      this.form.name = this.dummydata.name;
      this.form.ketuaLingkungan = this.dummydata.ketuaLingkungan;
      this.form.female = this.dummydata.female;
      this.form.phone = this.dummydata.phone;
    },
    getImage(gender) {
      if (gender) {
        return '@/assets/images/avatars/0.jpg';
      }
      return '@/assets/images/avatars/1.jpg';
    },
  },
};

  

</script>

<style>
.hoverable {
  transition: 0.5s ease;
}
.hoverable:hover {
  filter: brightness(0.9)
}
</style>
