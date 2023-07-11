export const genericFunctionOne = (data: any) => {
  return data.toFixed(2)
}

export function genericFunction<T>(data: T) {
  return data
}

export const genericFunctionArrow = <T>(data: T):T => data;
