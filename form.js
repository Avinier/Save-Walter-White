let btnEl = document.querySelector(".btn");

export const fetchHandler = async () => {
  let nameEl = document.querySelector(".uname");
  let locationEl = document.querySelector(".ulocation");

  if (nameEl && locationEl) {
    if (nameEl.value === "" && locationEl.value === "") {
      alert("Please enter something cmon");
      console.log("null");
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
    console.log("All done");
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
