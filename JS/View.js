var id = 0,
  movieName,
  movieType,
  movieDirector,
  movieList,
  movieAdd;
movieName = document.getElementById("movieName");
movieType = document.getElementById("movieType");
movieDirector = document.getElementById("movieDirector");
movieList = document.getElementById("movieList");
movieAdd = document.getElementById("movieAdd");

function AddMovie() {
  let row = document.createElement("tr");
  movieAdd.append(row);
  id = id + 1;
  row.innerHTML = `
   <td>${id}</td>
   <td>${movieName.value}</td>
   <td>${movieType.value}</td>
   <td>${movieDirector.value}</td>
   <td>
   <input type="submit" style="width: 100px" value="Ekle">
   <button style="width: 100px">Sil</button>
   </td>`;
  movieAdd.append(row);
  inputClear();
}

function inputClear() {
  movieName.value = "";
  movieType.value = "";
  movieDirector.value = "";
}
