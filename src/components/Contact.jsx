// 3. значення за замовчанням

// const defaultPErson = {
//   name: 'Vitaliy',
//   phone: '+38 067 000 00 00',
//   email: 'v.ivanov@gmail.com',
//   isAvailable: true,
//   age: 30,
// };

function Contact(props) {
  //   console.log(props);
  //   const {
  //     name = 'Vitaliy',
  //     phone,
  //     email,
  //     isAvailable = false,
  //     age,
  //   } = props.person ?? defaultPerson;
  return (
    <>
      <h2>Contact</h2>
      <section>
        <p>Name: {props.name}</p>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <p>isAvaliable: {props.isAvaliable?.toString() ?? 'false'}</p>
      </section>
    </>
  );
}

export default Contact;
