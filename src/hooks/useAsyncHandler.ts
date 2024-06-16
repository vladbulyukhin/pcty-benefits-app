import { useCallback, useState } from "react";

type AsyncHandler<T, P = void> = Readonly<{
  execute: (params: P) => Promise<T | undefined>;
  isLoading: boolean;
  hasFailed: boolean;
}>;

export const useAsyncHandler = <T, P = void>(
  asyncFunction: (params: P) => Promise<T>,
  onSuccess: (result: T, params: P) => void,
  onFailure?: () => void
): AsyncHandler<T, P> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  const execute = useCallback(
    async (params: P) => {
      setIsLoading(true);
      setHasFailed(false);

      try {
        const result = await asyncFunction(params);
        onSuccess(result, params);
        return result;
      } catch (error) {
        setHasFailed(true);
        console.error(error);
        onFailure?.();
      } finally {
        setIsLoading(false);
      }
    },
    [asyncFunction, onSuccess, onFailure]
  );

  return { execute, isLoading, hasFailed };
};
