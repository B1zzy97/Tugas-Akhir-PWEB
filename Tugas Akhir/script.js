        let data = [];
        let editIndex = -1;

        const form = document.getElementById('crudForm');
        const judulInput = document.getElementById('judul');
        const tanggal_masukInput = document.getElementById('tanggal_masuk');
        const tanggal_keluarInput = document.getElementById('tanggal_keluar');
        const submitBtn = document.getElementById('submitBtn');
        const updateBtn = document.getElementById('updateBtn');
        const tableBody = document.getElementById('tableBody');

        function renderTable() {
            tableBody.innerHTML = '';
            data.forEach((item, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.judul}</td>
                    <td>${item.tanggal_masuk}</td>
                    <td>${item.tanggal_keluar}</td>
                    <td class="actions">
                        <button class="btn-edit" onclick="editItem(${index})">Edit</button>
                        <button class="btn-delete" onclick="deleteItem(${index})">Delete</button>
                    </td>
                `;
                tableBody.appendChild(row);
            });
        }

        function addItem(judul, tanggal_masuk, tanggal_keluar) {
            const newItem = {
                id: data.length + 1,
                judul: judul,
                tanggal_masuk: tanggal_masuk,
                tanggal_keluar: tanggal_keluar
            };
            data.push(newItem);
            renderTable();
        }

        function editItem(index) {
            editIndex = index;
            judulInput.value = data[index].judul;
            tanggal_masukInput.value = data[index].tanggal_masuk;
            tanggal_keluarInput.value = data[index].tanggal_keluar;
            submitBtn.style.display = 'none';
            updateBtn.style.display = 'inline-block';
        }

        function updateItem(judul, tanggal_masuk, tanggal_keluar) {
            data[editIndex].judul = judul;
            data[editIndex].tanggal_masuk = tanggal_masuk;
            data[editIndex].tanggal_keluar = tanggal_keluar;
            editIndex = -1;
            submitBtn.style.display = 'inline-block';
            updateBtn.style.display = 'none';
            renderTable();
        }

        function deleteItem(index) {
            data.splice(index, 1);
            data.forEach((item, i) => item.id = i + 1);
            renderTable();
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const judul = judulInput.value.trim();
            const tanggal_masuk = tanggal_masukInput.value.trim();
            const tanggal_keluar = tanggal_keluarInput.value.trim();

            if (judul && tanggal_masuk, tanggal_keluar) {
                if (editIndex === -1) {
                    addItem(judul, tanggal_masuk, tanggal_keluar);
                } else {
                    updateItem(judul, tanggal_masuk, tanggal_keluar);
                }
                judulInput.value = '';
                tanggal_masukInput.value = '';
                tanggal_keluarInput.value = '';
            }
        });

        updateBtn.addEventListener('click', function() {
            const judul = judulInput.value.trim();
            const tanggal_masuk = tanggal_masukInput.value.trim();
            const tanggal_keluar = tanggal_keluarInput.value.trim();

            if (judul && tanggal_masuk, tanggal_keluar) {
                updateItem(judul, tanggal_masuk, tanggal_keluar);
                judulInput.value = '';
                tanggal_masukInput.value = '';
                tanggal_keluarInput.value = '';
            }
        });

        renderTable();