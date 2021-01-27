function countArray() {
  const TaskArray = [
    { TaskId: 1111, TaskName: "Costing Sheet Renewable" },
    { TaskId: 2222, TaskName: "Surveilliance" },
    { TaskId: 1111, TaskName: "ReNew " },
  ];
  let a = 0;
  TaskArray.forEach((data) => {
    if (data.TaskName.toLowerCase().includes("renew")) {
      a++;
    }
  });
  return a;
}
console.log("Count", countArray());
