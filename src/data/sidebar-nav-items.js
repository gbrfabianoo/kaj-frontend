export default function () {
  return [{
    title: 'Blog Dashboard',
    to: {
      name: 'blog-overview',
    },
    htmlBefore: '<i class="material-icons">edit</i>',
    htmlAfter: '',
  }, //{
  //   title: 'Forms & Components',
  //   htmlBefore: '<i class="material-icons">view_module</i>',
  //   to: {
  //     name: 'components-overview',
  //   },
  // }, {
  //   title: 'Tables',
  //   htmlBefore: '<i class="material-icons">table_chart</i>',
  //   to: {
  //     name: 'tables',
  //   },
  {
    title: 'Detail Lingkungan',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'detail-lingkungan',
    },
  }, {
    title: 'Daftar Lingkungan',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'daftarlingkungan',
    },
  }, {
    title: 'Daftar Misa',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'daftarmisa',
    },
  }, {
    title: 'Daftar Tiket',
    htmlBefore: '<i class="material-icons">table_chart</i>',
    to: {
      name: 'daftartiket',
    },
  }, {
    title: 'Form Lingkungan',
    htmlBefore: '<i class="material-icons">edit</i>',
    to: {
      name: 'formlingkungan',
    },
  }, {
    title: 'Form Misa',
    htmlBefore: '<i class="material-icons">edit</i>',
    to: {
      name: 'formmisa',
    },
  }, {
    title: 'Errors',
    htmlBefore: '<i class="material-icons">error</i>',
    to: {
      name: 'errors',
    },
  }];
}
