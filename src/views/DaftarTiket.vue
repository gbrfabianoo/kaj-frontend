<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">{{tulisan}}</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <!-- <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Active Users</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">Lingkungan</th>
                  <th scope="col" class="border-0">KetuaLingkungan</th>
                  <th scope="col" class="border-0">Gender</th>
                  <th scope="col" class="border-0">Nomor Telepon</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for = "(data, index) in datas">
                  <td>{{index + 1}}</td>
                  <td>{{data.name}}</td>
                  <td>{{data.lingkungan}}</td>
                  <td>{{data.female ? "Wanita" : "Pria"}}</td>
                  <td>{{data.telp}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Default Dark Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small overflow-hidden mb-4">
          <div class="card-header bg-dark">
            <h6 class="m-0 text-white">Inactive Users</h6>
          </div>
          <div class="card-body p-0 pb-3 bg-dark text-center">
            <table class="table table-dark mb-0">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">ID Misa</th>
                  <th scope="col" class="border-0">ID Lingkungan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for = "(data, index) in datas">
                  <td>{{index + 1}}</td>
                  <td>{{data.idm}}</td>
                  <td>{{data.idl}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const datas = [
  {
    idm: '412vbyu12vb4',
    idl: 'h12byhb12kr1',
  },
  {
    idm: 'id12bbik2r1j',
    idl: 'r12iubnr12j1',
  },
];

export default {
  name: 'DaftarTiket',
  data() {
    return {
      tulisan: 'Tiket',
      datas,
    };
  },
};
</script>
