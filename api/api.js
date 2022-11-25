//Vi hämtar böckerna från ett så kallat api
const url = 'https://gik2f8-labs.herokuapp.com/books';

//För att man ska kunna använda async, await behöver man ange att funktionen är async (asynkron)
async function getAll() {
  //Man väntar alltid (await) på att det till höger, det asynkrona anropet ska bli färdigt, innan man går vidare.
  //Await behöver man alltid anropa inifrån en asynkron funktion. 
  const result = await fetch(url)
    .then((result) => result.json())
    //Alla promises har en catch, e här innebär error
    .catch((e) => e);

  return result;
}
