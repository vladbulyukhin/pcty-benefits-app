import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { type Employee } from "../../../models/Employee";
import {
  createEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
} from "../../../api/employeeApi";
import { useAsyncHandler } from "../../../hooks/useAsyncHandler";
import { useNavigate } from "react-router-dom";

type EmployeeContextValue = Readonly<{
  createEmployee: (
    employee: Omit<Employee, "id">
  ) => Promise<Employee | undefined>;
  deleteEmployee: () => Promise<Employee | undefined>;
  employee: Employee | null;
  hasFailed: boolean;
  isLoading: boolean;
  updateEmployee: (employee: Employee) => Promise<Employee | undefined>;
}>;

const EmployeeContext = createContext<EmployeeContextValue | null>(null);

type EmployeeContextProviderProps = Readonly<{
  employeeId: string | null;
}>;

export const EmployeeProvider: React.FC<
  React.PropsWithChildren<EmployeeContextProviderProps>
> = ({ children, employeeId }) => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState<Employee | null>(null);

  const updateEmployeeCallback = useCallback(
    (updatedEmployee: Partial<Employee>) =>
      updateEmployee({ ...employee, ...updatedEmployee } as Employee),
    [employee]
  );

  const deleteEmployeeCallback = useCallback(
    () => (employeeId ? deleteEmployee(employeeId) : Promise.reject()),
    [employeeId]
  );

  const createEmployeeHandler = useAsyncHandler(createEmployee, setEmployee);
  const updateEmployeeHandler = useAsyncHandler(
    updateEmployeeCallback,
    setEmployee
  );

  const deleteEmployeeHandler = useAsyncHandler(
    deleteEmployeeCallback,
    setEmployee
  );

  useEffect(() => {
    if (!employeeId || employeeId === "new") {
      return;
    }

    getEmployee(employeeId)
      .then(setEmployee)
      .catch(() => {
        navigate("/");
        setEmployee(null);
      });
  }, [employeeId, navigate]);

  const value: EmployeeContextValue = useMemo(
    () => ({
      employee,
      isLoading:
        createEmployeeHandler.isLoading ||
        updateEmployeeHandler.isLoading ||
        deleteEmployeeHandler.isLoading,
      hasFailed:
        createEmployeeHandler.hasFailed ||
        updateEmployeeHandler.hasFailed ||
        deleteEmployeeHandler.hasFailed,
      createEmployee: createEmployeeHandler.execute,
      updateEmployee: updateEmployeeHandler.execute,
      deleteEmployee: deleteEmployeeHandler.execute,
    }),
    [
      employee,
      createEmployeeHandler.execute,
      updateEmployeeHandler.execute,
      deleteEmployeeHandler.execute,
      createEmployeeHandler.isLoading,
      updateEmployeeHandler.isLoading,
      deleteEmployeeHandler.isLoading,
      createEmployeeHandler.hasFailed,
      updateEmployeeHandler.hasFailed,
      deleteEmployeeHandler.hasFailed,
    ]
  );

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

EmployeeProvider.displayName = "EmployeeContextProvider";

export const useEmployee = (): EmployeeContextValue => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useEmployee must be used within a EmployeeProvider");
  }
  return context;
};
