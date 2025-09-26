export const addNewMedicince = async function (newMedicince) {
  try {
    const response = await fetch(
      "https://68d3dd32214be68f8c678194.mockapi.io/medicince",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newMedicince),
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("Medicine created successfully:", data);
      return data;
    } else {
      const errorText = await response.text();
      console.error("Failed with status:", response.status, errorText);
    }
  } catch (error) {
    console.log("the error are ", error.message);
  }
};
