export default function Taskpage() {
  const Arrfirst = [
    {
      id: 1,
      version: "1.0",
      name: "CRF",
    },
    {
      id: 2,
      version: "2.0",
      name: "CRF",
    },
    {
      id: 3,
      version: "3.0",
      name: "CRF",
    },
    {
      id: 4,
      version: "1.0",
      name: "ToolKit",
    },
  ];
  let text = "CRF 1.0";
  const arr2 = text.split(" ");
  console.log(arr2[0], arr2[1]);
  {
    Arrfirst.map((item) => {
      if (item.name == arr2[0] && item.version != arr2[1]) {
        console.log("output ", item);
      }
    });
  }

  return <>This is task page</>;
}
