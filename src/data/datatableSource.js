export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "nom",
    headerName: "Nom",
    width: 230,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={"https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"} alt="avatar" />
    //       {params.row.agent}
    //     </div>
    //   );
    // },
  },
  {
    field: "prenoms",
    headerName: "Prenoms",
    width: 230,
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "telephone",
    headerName: "Telephone",
    width: 100,
  },
  
];

// export const userRows = async () => {
//   const response = await fetch(" http://127.0.0.1:5000/agents/", {
//     method: "GET",
//     mode: "cors",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   if (response.ok) {
//     const data = await response.json();
//     return data
//   }
// };



//temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "2snow@gmail.com",
//     status: "passive",
//     age: 42,
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "3snow@gmail.com",
//     status: "pending",
//     age: 45,
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "4snow@gmail.com",
//     status: "active",
//     age: 16,
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "5snow@gmail.com",
//     status: "passive",
//     age: 22,
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "6snow@gmail.com",
//     status: "active",
//     age: 15,
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "7snow@gmail.com",
//     status: "passive",
//     age: 44,
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "8snow@gmail.com",
//     status: "active",
//     age: 36,
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "pending",
//     age: 65,
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "active",
//     age: 65,
//   },
// ];
