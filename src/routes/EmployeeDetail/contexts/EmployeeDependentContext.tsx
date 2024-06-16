import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  createDependent,
  deleteDependent,
  getEmployeeDependents,
  updateDependent,
} from "../../../api/dependentApi";
import { useAsyncHandler } from "../../../hooks/useAsyncHandler";
import type { Dependent } from "../../../models/Dependent";

type EmployeeDependentContextValue = Readonly<{
  dependents: ReadonlyArray<Dependent>;
  createDependent: (name: string) => void;
  updateDependent: (dependent: Omit<Dependent, "employeeId">) => void;
  deleteDependent: (id: string) => void;
  isLoading: boolean;
  hasFailed: boolean;
}>;

export const EmployeeDependentContext =
  createContext<EmployeeDependentContextValue | null>(null);

type EmployeeDependentProviderProps = Readonly<{
  employeeId: string | null;
}>;

export const EmployeeDependentProvider: React.FC<
  React.PropsWithChildren<EmployeeDependentProviderProps>
> = ({ children, employeeId }) => {
  const [dependents, setDependents] = useState<ReadonlyArray<Dependent>>([]);

  const fetchDependentsHandler = useAsyncHandler(
    () => getEmployeeDependents(employeeId!),
    setDependents
  );

  const createDependentHandler = useAsyncHandler(
    (name: string) =>
      employeeId
        ? createDependent({ name, employeeId })
        : Promise.reject("no employee id"),
    (newDependent) => setDependents((prev) => [...prev, newDependent])
  );

  const updateDependentHandler = useAsyncHandler(
    ({ id, name }: Omit<Dependent, "employeeId">) =>
      employeeId
        ? updateDependent({ id, name, employeeId })
        : Promise.reject("no employee id"),
    (updatedDependent) =>
      setDependents((prev) =>
        prev.map((dep) =>
          dep.id === updatedDependent.id ? updatedDependent : dep
        )
      )
  );

  const deleteDependentHandler = useAsyncHandler(
    (id: string) => deleteDependent(id),
    (_, id: string) =>
      setDependents((prev) => prev.filter((dep) => dep.id !== id))
  );

  useEffect(() => {
    if (!employeeId || employeeId === "new") {
      return;
    }
    getEmployeeDependents(employeeId)
      .then(setDependents)
      .catch(() => setDependents([]));
  }, [employeeId]);

  const value: EmployeeDependentContextValue = useMemo(
    () => ({
      dependents,
      createDependent: createDependentHandler.execute,
      updateDependent: updateDependentHandler.execute,
      deleteDependent: deleteDependentHandler.execute,
      isLoading:
        fetchDependentsHandler.isLoading ||
        createDependentHandler.isLoading ||
        updateDependentHandler.isLoading ||
        deleteDependentHandler.isLoading,
      hasFailed:
        fetchDependentsHandler.hasFailed ||
        createDependentHandler.hasFailed ||
        updateDependentHandler.hasFailed ||
        deleteDependentHandler.hasFailed,
    }),
    [
      dependents,
      createDependentHandler.execute,
      updateDependentHandler.execute,
      deleteDependentHandler.execute,
      fetchDependentsHandler.isLoading,
      createDependentHandler.isLoading,
      updateDependentHandler.isLoading,
      deleteDependentHandler.isLoading,
      fetchDependentsHandler.hasFailed,
      createDependentHandler.hasFailed,
      updateDependentHandler.hasFailed,
      deleteDependentHandler.hasFailed,
    ]
  );

  return (
    <EmployeeDependentContext.Provider value={value}>
      {children}
    </EmployeeDependentContext.Provider>
  );
};

EmployeeDependentProvider.displayName = "EmployeeDependentProvider";

export const useEmployeeDependents = (): EmployeeDependentContextValue => {
  const context = useContext(EmployeeDependentContext);
  if (!context) {
    throw new Error(
      "useEmployeeDependents must be used within a EmployeeDependentProvider"
    );
  }
  return context;
};
