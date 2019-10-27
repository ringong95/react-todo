export const DEFAULT_TEXT = 'DEFAULT_TEXT';
export const TYPE_NAME = 'TYPE_NAME';

export function Default(foo) {
  return {
    type: DEFAULT_TEXT,
    payload: foo,
  };
}
