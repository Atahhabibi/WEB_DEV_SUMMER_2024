
const url = "https://randomuser.me/api/";

export const getUser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const { phone, email } = person;
    const {
      picture: { large: image },
    } = person;
    const {
      login: { password },
    } = person;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;
  
    return {
      phone,
      email,
      email,
      image,
      password,
      age,
      street:`${number} ${name}`,
      name: `${first} ${last}`
    };
  };