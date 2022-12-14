let btnEl = document.querySelector(".btn");

export const fetchHandler = async () => {
  let nameEl = document.getElementById("uname");
  let locationEl = document.getElementById("ulocation");

  if (nameEl && locationEl) {
    if (nameEl.value === "" && locationEl.value === "") {
      alert("Please enter something cmon");
      console.log("nullz");
      return false;
    }
    const userData = {
      name: nameEl.value,
      location: locationEl.value,
    };

    const response = await fetch(
      "https://save-walter-white-default-rtdb.firebaseio.com/userdata.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    alert(
      "Thanks for donating ;) Now you can return to the main page to see your contributions!"
    );
    window.location.reload();
  }

  const getResponse = await fetch(
    "https://save-walter-white-default-rtdb.firebaseio.com/userdata.json"
  );
  const data = await getResponse.json();

  const DATA = [];

  for (const key in data) {
    DATA.push({
      id: key,
      name: data[key].name,
      location: data[key].location,
    });
  }
  return DATA;
};

if (btnEl) {
  btnEl.addEventListener("click", fetchHandler);
}
