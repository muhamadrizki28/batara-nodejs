$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:5000/products',
    contentType: 'text/plain',
    // data: 'data',
    // dataType: 'dataType',
    success: function (res) {
      var no = 1;
      for (const item of res) {
        console.log(item);

        $('#data-product').append(`
        <tr>
          <th scope="row">${no++}</th>
          <td>${item['title']}</td>
          <td>${item['price']}</td>
          <td>${item['updatedAt']}</td>
          <td>
            <button class="btn btn-primary btn-edit" data-toggle="modal" data-target="#modal-edit" id-data="${item['id']}">Update</button>
            <button class="btn btn-danger btn-delete" data-toggle="modal" id-data="${item['id']}">Delete</button>
          </td>
        </tr>
          `);
      }
    },
  });

  // Save Data
  $(document).on('click', '#btn-save-produk', function () {
    var data = {
      title: $('#nama-produk').val(),
      price: $('#harga-produk').val(),
    };

    $.ajax({
      type: 'POST',
      // perhatikan slash /(slash) kecuali save
      url: 'http://localhost:5000/products/',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (data) {
        window.location = 'C:/xampp/htdocs/JuniorProgrammerBatara/Day2/FrontEnd/index.html';
      },
    });
  });

  // Delete Data
  $(document).on('click', '.btn-delete', function () {
    // $(document).on('click', '#btn-delete-produk', function () {
    var id = $(this).attr('id-data');
    // console.log(id);
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:5000/products/' + id,
      contentType: 'text/plain',
      success: function (res) {
        window.location = 'C:/xampp/htdocs/JuniorProgrammerBatara/Day2/FrontEnd/index.html';
      },
    });
  });

  // Edit Data To Form
  $(document).on('click', '.btn-edit', function () {
    var id = $(this).attr('id-data');
    $.ajax({
      type: 'GET',
      url: 'http://localhost:5000/products/' + id,
      contentType: 'text/plain',
      success: function (res) {
        $('#nama-produk-edit').val(res['title']);
        $('#harga-produk-edit').val(res['price']);
        $('#btn-edit-produk').attr('id-data', res['id']);
      },
    });
  });

  // Edit Data
  $(document).on('click', '#btn-edit-produk', function () {
    var data = {
      title: $('#nama-produk-edit').val(),
      price: $('#harga-produk-edit').val(),
    };

    $.ajax({
      type: 'PUT',
      // perhatikan slash /
      url: 'http://localhost:5000/products/' + $(this).attr('id-data'),
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      success: function (data) {
        window.location = 'C:/xampp/htdocs/JuniorProgrammerBatara/Day2/FrontEnd/index.html';
      },
    });
  });
});
