`use server`;
import { fetchEmployees } from "@/api/api";
import { FC, use } from "react";

type Props = {
  name?: string;
};

const employeePromise = fetchEmployees();

export const ListView: FC<Props> = ({}) => {
  const employees = use(employeePromise);
  return (
    <div>
      <ul>
        {employees.map((emp) => (
          <div key={emp.id}>
            <h2>{emp.name}</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};
