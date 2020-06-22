<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Daftar Misa</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
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
                  <th scope="col" class="border-0">Hari</th>
                  <th scope="col" class="border-0">Tanggal</th>
                  <th scope="col" class="border-0">Waktu Mulai</th>
                  <th scope="col" class="border-0">Waktu Selesai</th>
                  <th scope="col" class="border-0">Romo</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for = "(data, index) in datas">
                  <td>{{index + 1}}</td>
                  <td>{{data.day}}</td>
                  <td>{{data.date}}</td>
                  <td>{{data.mjam}}</td>
                  <td>{{data.sjam}}</td>
                  <td>{{data.romo}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Default Dark Table -->
    <!-- <div class="row">
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
                  <th scope="col" class="border-0">Hari</th>
                  <th scope="col" class="border-0">Tanggal</th>
                  <th scope="col" class="border-0">Waktu Mulai</th>
                  <th scope="col" class="border-0">Waktu Selesai</th>
                  <th scope="col" class="border-0">Romo</th>
                </tr>
              </thead>
              <tbody>
                <tr  v-for = "(data, index) in datas">
                  <td>{{index + 1}}</td>
                  <td>{{data.day}}</td>
                  <td>{{data.date}}</td>
                  <td>{{data.mjam}}</td>
                  <td>{{data.sjam}}</td>
                  <td>{{data.romo}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>

const datas = [
  {
    day: 'Sabtu',
    date: '27 Juni 2020',
    mjam: '17.30',
    sjam: '19.00',
    romo: 'Edu',
  },
  {
    day: 'Minggu',
    date: '28 Juni 2020',
    mjam: '09.00',
    sjam: '10.30',
    romo: 'Edu',
  },
  {
    day: 'Minggu',
    date: '28 Juni 2020',
    mjam: '17.00',
    sjam: '18.30',
    romo: 'Wahyu',
  },
];

export default {
  name: 'DaftarMisa',
  data() {
    return {
      tulisan: 'Misa',
      datas,
    };
  },
};
</script>
